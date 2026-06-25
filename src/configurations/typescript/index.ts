import { isEmpty } from '@morev/utils';
import { GLOB_TS, GLOB_TSX } from '#globs';
import { parserTypescript } from '#parsers';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import stylistic from './plugins/stylistic';

import typescript from './rules/typescript';

import type { TypescriptConfigurationOptions } from '#types';

export default function configurationTypescript(options: Partial<TypescriptConfigurationOptions> = {}) {
	const {
		overrides = {},
		ignores = [],
		extraFileExtensions = [],
	} = options;

	const files = options.files ?? [
		GLOB_TS,
		GLOB_TSX,
		...extraFileExtensions.map((extension) => `**/*.${extension}`),
	];

	return [
		defineConfigurationPart({
			name: 'morev/typescript/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/typescript/core',
			languageOptions: {
				parser: parserTypescript,
				ecmaVersion: 'latest',
				sourceType: 'module',
				parserOptions: {
					extraFileExtensions: extraFileExtensions.map((extension) => `.${extension}`),
					projectService: true,
					tsconfigRootDir: process.cwd(),
				},
			},
			files,
			ignores,
			...mergeParts(
				typescript,
				stylistic,
			),
		}),
		defineConfigurationPart({
			name: 'morev/typescript/disables',
			files,
			ignores,
			rules: {
				'no-undef': 'off',
				'jsdoc/require-returns-type': 'off',
				'jsdoc/require-param-type': 'off',
				'jsdoc/require-yields-type': 'off',
				// Reason: TypeScript already reports invalid argument counts.
				'unicorn/no-invalid-argument-count': 'off',
				// Reason: TypeScript already checks built-in property availability from configured libs.
				'unicorn/no-nonstandard-builtin-properties': 'off',
				// Reason: TypeScript already reports undeclared class members.
				'unicorn/no-undeclared-class-members': 'off',
				// Reason: I would be happy to enable it if `.includes()` narrowed types, but it does not:
				// https://github.com/microsoft/TypeScript/issues/31018
				'unicorn/prefer-includes-over-repeated-comparisons': 'off',
				// Reason: TypeScript already uses `@typescript-eslint/require-array-sort-compare` with type-aware options.
				'unicorn/require-array-sort-compare': 'off',
				// Reason: TypeScript code should use explicit `private`, not an underscore convention.
				'unicorn/prefer-private-class-fields': 'off',
			},
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/typescript/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
