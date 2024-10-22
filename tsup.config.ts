import type { Options } from 'tsup';

export const tsup: Options = {
	sourcemap: false,
	clean: true,
	target: 'esnext',
	format: ['esm'],
	dts: true,
	entryPoints: [
		'src/index.ts',
		'src/parsers.ts',
		'src/plugins.ts',
	],
	external: [
		'@morev/utils',
		'@eslint/eslintrc',
		'eslint-plugin-chai-friendly',
		'eslint-plugin-astro',
		'astro-eslint-parser',
		'eslint-plugin-cypress',
		'eslint-plugin-eslint-comments',
		'eslint-plugin-import-x',
		'eslint-plugin-jest',
		'eslint-plugin-jsdoc',
		'eslint-plugin-jsonc',
		'eslint-plugin-markdownlint',
		'eslint-plugin-no-autofix',
		'eslint-plugin-no-secrets',
		'eslint-plugin-node',
		'eslint-plugin-regexp',
		'eslint-plugin-sonarjs',
		'eslint-plugin-unicorn',
		'eslint-plugin-vitest',
		'eslint-plugin-vitest-globals',
		'eslint-plugin-vue',
		'eslint-plugin-yml',
	],
};