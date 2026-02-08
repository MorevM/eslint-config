import { pluginPerfectionist } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		perfectionist: pluginPerfectionist,
	},
	rules: {
		// Enforce sorted array values if the includes method is immediately called after the array is created (autofixable)
		// https://perfectionist.dev/rules/sort-array-includes
		'perfectionist/sort-array-includes': 'off',

		// Enforce sorted class members (autofixable)
		// https://perfectionist.dev/rules/sort-classes
		'perfectionist/sort-classes': 'off',

		// Enforce sorted decorators. (autofixable)
		// https://perfectionist.dev/rules/sort-decorators
		'perfectionist/sort-decorators': 'off',

		// Enforce sorted TypeScript enum members (autofixable)
		// https://perfectionist.dev/rules/sort-enums
		'perfectionist/sort-enums': 'off',

		// Enforce sorted export attributes (autofixable)
		// https://perfectionist.dev/rules/sort-export-attributes
		'perfectionist/sort-export-attributes': ['warn', {
			type: 'natural',
			order: 'asc',
			fallbackSort: {
				type: 'line-length',
				order: 'desc',
			},
			alphabet: '',
			ignoreCase: true,
			specialCharacters: 'keep',
			locales: ['en-US'],
			partitionByComment: false,
			partitionByNewLine: true,
			newlinesBetween: 'ignore',
			groups: ['type-attribute', 'unknown'],
			customGroups: [
				{ groupName: 'type-attribute', elementNamePattern: '^type' },
			],
		}],

		// Enforce sorted exports (autofixable)
		// https://perfectionist.dev/rules/sort-exports
		'perfectionist/sort-exports': ['warn', {
			type: 'natural',
			order: 'asc',
			fallbackSort: {
				type: 'line-length',
				order: 'desc',
			},
			alphabet: '',
			ignoreCase: true,
			specialCharacters: 'keep',
			locales: ['en-US'],
			partitionByComment: false,
			partitionByNewLine: true,
			newlinesBetween: 'ignore',
			groups: [
				'wildcard-export',
				'named-export',
				'value-export',
				'type-export',
			],
		}],

		// Enforce sorted heritage clauses (autofixable)
		// https://perfectionist.dev/rules/sort-heritage-clauses
		'perfectionist/sort-heritage-clauses': 'off',

		// Enforce sorted import attributes (autofixable)
		// https://perfectionist.dev/rules/sort-import-attributes
		'perfectionist/sort-import-attributes': ['warn', {
			type: 'natural',
			order: 'asc',
			fallbackSort: {
				type: 'line-length',
				order: 'desc',
			},
			alphabet: '',
			ignoreCase: true,
			specialCharacters: 'keep',
			locales: ['en-US'],
			partitionByComment: false,
			partitionByNewLine: true,
			newlinesBetween: 'ignore',
			groups: ['type-attribute', 'unknown'],
			customGroups: [
				{ groupName: 'type-attribute', elementNamePattern: '^type' },
			],
		}],

		// Enforce sorted imports (autofixable)
		// https://perfectionist.dev/rules/sort-imports
		'perfectionist/sort-imports': ['warn', {
			type: 'natural',
			order: 'asc',
			fallbackSort: {
				type: 'alphabetical',
				order: 'asc',
			},
			ignoreCase: true,
			specialCharacters: 'keep',
			locales: ['en-US'],
			sortBy: 'path',
			internalPattern: [
				'^~.*',
				'^@/.*',
				'^#.*',
			],
			sortSideEffects: false,
			partitionByComment: false,
			partitionByNewLine: false,
			newlinesBetween: 'ignore',
			groups: [
				['vitest', 'jest'],
				['vite'],
				['vue', 'react', 'astro'],
				['builtin'],
				['external'],
				['internal'],
				['parent'],
				['sibling'],
				['index'],
				['type-external'],
				['type-builtin'],
				['type-internal'],
				['type-parent'],
				['type-sibling'],
				['type-index'],
				['style'],
				['side-effect'],
				['side-effect-style'],
				['unknown'],
			],
			customGroups: [
				{
					groupName: 'vitest',
					elementNamePattern: '^vitest(\/.*)?$',
				},
				{
					groupName: 'jest',
					elementNamePattern: '^jest(/.*)?$',
				},
				{
					groupName: 'vite',
					elementNamePattern: '^vite(\/.*)?$',
				},
				{
					groupName: 'vue',
					elementNamePattern: '^vue(\/.*)?$',
				},
				{
					groupName: 'astro',
					elementNamePattern: '^astro(\/.*)?$',
				},
				{
					groupName: 'react',
					elementNamePattern: '^react(-.*)?$',
				},
			],
			environment: 'node',
		}],

		// Enforce sorted TypeScript interface properties (autofixable)
		// https://perfectionist.dev/rules/sort-interfaces
		'perfectionist/sort-interfaces': 'off',

		// Enforce sorted intersection types in TypeScript (autofixable)
		// https://perfectionist.dev/rules/sort-intersection-types
		'perfectionist/sort-intersection-types': 'off',

		// Enforce sorted JSX props within JSX elements (autofixable)
		// https://perfectionist.dev/rules/sort-jsx-props
		'perfectionist/sort-jsx-props': 'off',

		// Enforce sorted elements within JavaScript Map object (autofixable)
		// https://perfectionist.dev/rules/sort-maps
		'perfectionist/sort-maps': 'off',

		// Enforce sorted module members (autofixable)
		// https://perfectionist.dev/rules/sort-modules
		'perfectionist/sort-modules': 'off',

		// Enforce sorted named exports (autofixable)
		// https://perfectionist.dev/rules/sort-named-exports
		'perfectionist/sort-named-exports': ['warn', {
			type: 'natural',
			order: 'asc',
			fallbackSort: {
				type: 'line-length',
				order: 'desc',
			},
			alphabet: '',
			ignoreCase: true,
			specialCharacters: 'keep',
			locales: ['en-US'],
			ignoreAlias: false,
			partitionByComment: false,
			partitionByNewLine: true,
			newlinesBetween: 'ignore',
			groups: [
				'value-export',
				'type-export',
			],
		}],

		// Enforce sorted named imports (autofixable)
		// https://perfectionist.dev/rules/sort-named-imports
		'perfectionist/sort-named-imports': ['warn', {
			type: 'natural',
			order: 'asc',
			fallbackSort: {
				type: 'line-length',
				order: 'desc',
			},
			alphabet: '',
			ignoreCase: true,
			specialCharacters: 'keep',
			locales: ['en-US'],
			ignoreAlias: false,
			partitionByComment: false,
			partitionByNewLine: true,
			newlinesBetween: 'ignore',
			groups: [
				'value-import',
				'type-import',
			],
		}],

		// Enforce sorted object types (autofixable)
		// https://perfectionist.dev/rules/sort-object-types
		'perfectionist/sort-object-types': 'off',

		// Enforce sorted objects (autofixable)
		// https://perfectionist.dev/rules/sort-objects
		'perfectionist/sort-objects': 'off',

		// Enforce sorted set values (autofixable)
		// https://perfectionist.dev/rules/sort-sets
		'perfectionist/sort-sets': 'off',

		// Enforce sorted switch case statements (autofixable)
		// https://perfectionist.dev/rules/sort-switch-case
		'perfectionist/sort-switch-case': 'off',

		// Enforce sorted TypeScript union types (autofixable)
		// https://perfectionist.dev/rules/sort-union-types
		'perfectionist/sort-union-types': 'off',

		// Enforce sorted variable declarations within a scope (autofixable)
		// https://perfectionist.dev/rules/sort-variable-declarations
		'perfectionist/sort-variable-declarations': 'off',
	},
});
