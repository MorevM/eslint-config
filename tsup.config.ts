import type { Options } from 'tsup';

export const tsup: Options = {
	sourcemap: false,
	clean: true,
	target: 'esnext',
	format: ['esm'],
	dts: true,
	entry: {
		index: './src/index.ts',
		plugins: './src/plugins.ts',
		parsers: './src/parsers.ts',
		globs: './src/globs.ts',
		cli: './src/cli/index.ts',
	},
	external: [
		'@morev/utils',
		'@morev/disable-autofix',
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
		'eslint-plugin-no-secrets',
		'eslint-plugin-node',
		'eslint-plugin-regexp',
		'eslint-plugin-sonarjs',
		'eslint-plugin-unicorn',
		'eslint-plugin-vitest',
		'eslint-plugin-vitest-globals',
		'eslint-plugin-vue',
		'eslint-plugin-yml',
		'eslint-plugin-perfectionist',
		'eslint-plugin-package-json',
	],
};
