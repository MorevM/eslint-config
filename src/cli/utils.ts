import path from 'node:path';
import fs from 'node:fs';
import { exec } from 'node:child_process';
import { safeJsonParse, sleep, stripIndent } from '@morev/utils';
import type { PackageJson } from '@morev/utils';
import ansis from 'ansis';
import { log } from '@clack/prompts';

type Agent = 'npm' | 'yarn' | 'pnpm' | 'bun';
type AgentCommand = 'add-dev' | 'upgrade';
type AgentCommandDeclaration = {
	command: string;
	flags: string[];
};
export const runAgentCommand = (agent: Agent, action: AgentCommand, args: string[]) => {
	const stack: string[] = [agent];
	const mappings: Record<Agent, Record<AgentCommand, AgentCommandDeclaration>> = {
		npm: {
			'add-dev': { command: 'add', flags: ['--save-dev'] },
			'upgrade': { command: 'update', flags: ['--save'] },
		},
		yarn: {
			'add-dev': { command: 'add', flags: ['--dev'] },
			'upgrade': { command: 'upgrade', flags: ['--caret'] },
		},
		pnpm: {
			'add-dev': { command: 'add', flags: ['--save-dev'] },
			'upgrade': { command: 'update', flags: [] },
		},
		bun: {
			'add-dev': { command: 'add', flags: ['--dev'] },
			'upgrade': { command: 'update', flags: [] },
		},
	};

	stack.push(
		mappings[agent][action].command,
		...args,
		...mappings[agent][action].flags,
	);

	return stack.filter(Boolean).join(' ');
};

export const customExec = (command: string) => new Promise<string>((resolve, reject) => {
	exec(command, (error, stdout, stderr) => {
		if (error === null) {
			resolve(stdout.trim());
			return;
		}
		reject(error);
	});
});

export const loadModule = async (name: string) => {
	try {
		return await import(name);
	} catch {
		return undefined;
	}
};

export const prependTabs = (value: string) =>
	value.trim().split(`\n`).map((line) => `\t${line}`).join(`\n`);

export const formatCliMessage = (value: string): string => {
	const tagToColorMap = {
		m: 'magenta',
		c: 'cyan',
		g: 'green',
		r: 'red',
		y: 'yellow',
	} as const;
	const regexp = new RegExp(`<((${Object.keys(tagToColorMap).join('|')}))>(.*?)</\\2>`, 'g');

	return stripIndent(value.replaceAll(regexp,
		(substring, _, tag: keyof typeof tagToColorMap, tagContents) => {
			return formatCliMessage(ansis[tagToColorMap[tag]](tagContents));
		}));
};

export const getPackageJsonPath = () =>
	path.join(process.cwd(), 'package.json');

export const getPackageJson = () => {
	const packageJsonPath = getPackageJsonPath();

	if (!fs.existsSync(packageJsonPath)) return null;

	try {
		const packageJsonContents = fs.readFileSync(packageJsonPath, { encoding: 'utf8' });
		return safeJsonParse<PackageJson>(packageJsonContents);
	} catch {
		return null;
	}
};

export const createStepMessage = (stepsCount: number, delay: number) =>
	async (message: string, stepNumber: number) => {
		log.info(
			formatCliMessage(`
			<m>Step ${stepNumber}/${stepsCount}</m>: ${message}
		`),
		);
		await sleep(delay);
	};
