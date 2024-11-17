import { isEmpty } from '@morev/utils';
import { GLOB_CYPRESS, GLOB_TESTS } from '#globs';
import { parserTypescript } from '#parsers';
import { pluginVitest } from '#plugins';
import { defineConfigurationPart, hasTsconfig, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import vitest from './rules/vitest';

import type { VitestConfigurationOptions } from '#types';

export default function configurationVitest(options: Partial<VitestConfigurationOptions> = {}) {
	const {
		files = [...GLOB_TESTS],
		overrides = {},
		ignores = [...GLOB_CYPRESS],
		globals = true,
	} = options;

	const languageOptions: Record<string, any> = {};

	if (globals) {
		languageOptions.globals = {
			...pluginVitest.environments.env.globals,
		};
	}

	if (hasTsconfig()) {
		languageOptions.parser = parserTypescript;
		languageOptions.parserOptions = {
			project: true,
			projectService: true,
			tsconfigRootDir: process.cwd(),
		};
	}

	const settingsVitest = hasTsconfig()
		? { typecheck: true }
		: {};

	return [
		defineConfigurationPart({
			name: 'morev/vitest/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/vitest/core',
			languageOptions,
			settings: {
				vitest: settingsVitest,
			},
			files,
			ignores,
			...mergeParts(
				vitest,
			),
		}),
		defineConfigurationPart({
			name: 'morev/vitest/disables',
			files,
			ignores,
			rules: {
				// It's better to be explicit in tests.
				'sonarjs/no-duplicate-string': 'off',
			},
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/vitest/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
