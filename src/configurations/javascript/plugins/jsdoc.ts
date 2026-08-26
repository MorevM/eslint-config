import { pluginJsdoc } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		jsdoc: pluginJsdoc,
	},
	rules: {
		// Checks that `@access` tags use one of the correct values
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md
		'jsdoc/check-access': 'error',

		// Reports invalid alignment of JSDoc block asterisks (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md
		'jsdoc/check-alignment': 'warn',

		// Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md
		'jsdoc/check-examples': 'off',

		// Reports invalid padding inside JSDoc blocks
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md
		// Note: false positives with multiline aligned strings
		'jsdoc/check-indentation': 'off',

		// Reports invalid alignment of JSDoc block lines (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md
		'jsdoc/check-line-alignment': ['warn', 'always', {
			customSpacings: {
				postTag: 3,
				postType: 3,
				postName: 3,
			},
		}],

		// Ensures that parameter names in JSDoc match those
		// in the function declaration (autofixable but may be confusing)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md
		'no-autofix/jsdoc/check-param-names': ['error', {
			allowExtraTrailingParamDocs: false,
			badParamNames: false,
			badParamOrder: true,
			checkDestructured: true,
			checkRestProperty: false,
			checkTypesPattern: '/^(?:[oO]bject|[aA]rray|PlainObject|Generic(?:Object|Array))$/v',
			disableExtraPropertyReporting: false,
			disableMissingParamChecks: false,
			duplicateParams: true,
			enableFixer: true,
			extraParams: false,
			useDefaultObjectProperties: false,
		}],

		// Ensures that property names in JSDoc are not duplicated on the same block
		// and that nested properties have defined roots
		// (autofixable but may be confusing)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md
		'no-autofix/jsdoc/check-property-names': ['error', { enableFixer: true }],

		// Reports against syntax not encouraged for the mode
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md
		'jsdoc/check-syntax': 'error',

		// Reports invalid block tag names
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md
		'jsdoc/check-tag-names': ['error', {
			definedTags: ['TODO', 'DEPRECATED'],
		}],

		// Checks that any `@template` names are actually used in the connected `@typedef` or type alias.
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-template-names.md
		'jsdoc/check-template-names': 'error',

		// Reports invalid types
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md
		'jsdoc/check-types': 'error',

		// Reports invalid types
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md
		'jsdoc/check-values': 'error',

		// Converts line and block comments preceding or following specified nodes into JSDoc comments
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md
		// Note: developer knows better
		'jsdoc/convert-to-jsdoc-comments': 'off',

		// Expects the following tags to be empty of any content (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md
		'jsdoc/empty-tags': 'warn',

		// Reports use of JSDoc tags in non-tag positions (in the default "typescript" mode) (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/escape-inline-tags.md
		'jsdoc/escape-inline-tags': ['warn', {
			allowedInlineTags: [],
			enableFixer: true,
			fixType: 'backticks',
		}],

		// Reports an issue with any non-constructor function using `@implements`
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md
		'jsdoc/implements-on-classes': 'error',

		// This rule will report an issue if JSDoc `import()` statements point to
		// a package which is not listed in `dependencies` or `devDependencies`.
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md
		'jsdoc/imports-as-dependencies': 'error',

		// Reports on JSDoc texts that serve only to restart their attached name
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md
		'jsdoc/informative-docs': 'off',

		// Enforces minimum number of newlines before JSDoc comment blocks (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/lines-before-block.md
		// Note: I would like to enable with exception for the first property within a nested structure..
		'jsdoc/lines-before-block': ['off', {
			lines: 1,
			ignoreSameLine: false,
		}],

		// Enforces a regular expression pattern on descriptions
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md
		'jsdoc/match-description': 'off',

		// Reports the name portion of a JSDoc tag if matching
		// or not matching a given regular expression (partly autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md
		'jsdoc/match-name': 'off',

		// Controls how and whether jsdoc blocks can be expressed
		// as single or multiple line blocks (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md
		'jsdoc/multiline-blocks': ['warn', {
			noMultilineBlocks: false,
			noSingleLineBlocks: true,
		}],

		// Normalizes labeled links in `@see` tags to a canonical `{@link}` form (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/normalize-see-links.md
		'jsdoc/normalize-see-links': ['warn', {
			canonicalForm: 'pipe',
			enableFixer: true,
			wrapBareUrls: false,
		}],

		// Checks for multi-line-style comments which fail
		// to meet the criteria of a jsdoc block (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md
		'jsdoc/no-bad-blocks': ['error', {
			ignore: ['ts-check', 'ts-expect-error', 'ts-ignore', 'ts-nocheck', 'vite-ignore'],
		}],

		// If tags are present, this rule will prevent empty lines in the block description.
		// If no tags are present, this rule will prevent extra empty lines in the block description.
		// (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md
		'jsdoc/no-blank-block-descriptions': ['warn'],

		// Reports and optionally removes blocks with whitespace only (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md
		'jsdoc/no-blank-blocks': ['warn', { enableFixer: true }],

		// Reports defaults being used on the relevant portion
		// of `@param` or `@default` (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md
		'jsdoc/no-defaults': 'warn',

		// Report if certain always expected comment structures are missing
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md
		'jsdoc/no-missing-syntax': 'off',

		// Prevents use of multiple asterisks at the beginning of lines (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md
		'jsdoc/no-multi-asterisks': 'off',

		// Reports when certain comment structures are present
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md
		'jsdoc/no-restricted-syntax': 'off',

		// This rule reports types being used on `@param` or `@returns`
		// (autofixable but it isn't clear)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md
		'no-autofix/jsdoc/no-types': 'off',

		// Checks that types in jsdoc comments are defined
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md
		'jsdoc/no-undefined-types': 'error',

		// Prefer `@import` tags to inline `import()` statements (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/prefer-import-tag.md
		'jsdoc/prefer-import-tag': 'off',

		// Reports use of `any` or `*` type
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-any-type.md
		'jsdoc/reject-any-type': 'off',

		// Reports use of `Function` type
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-function-type.md
		'jsdoc/reject-function-type': 'off',

		// Requires that each JSDoc line starts with an `*` (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md
		'jsdoc/require-asterisk-prefix': ['warn', 'always'],

		// Requires that block description, explicit `@description`,
		// and `@param`/`@returns` tag descriptions are written
		// in complete sentences (autofixable but works incorrect)
		// Related issue: https://github.com/gajus/eslint-plugin-jsdoc/issues/779
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md
		'no-autofix/jsdoc/require-description-complete-sentence': 'off',

		// Requires that all functions have a description
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md
		'jsdoc/require-description': 'error',

		// Requires that all functions have examples (strangely autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md
		'no-autofix/jsdoc/require-example': 'off',

		// Require `@file`, `@fileoverview,` or `@overview`
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md
		'jsdoc/require-file-overview': 'off',

		// Requires (or disallows) a hyphen before the `@param` description
		// (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md
		'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],

		// Checks for presence of jsdoc comments
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md
		'jsdoc/require-jsdoc': 'off',

		// Requires a description for `@next` tags
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-description.md
		'jsdoc/require-next-description': 'off',

		// Requires a type for `@next` tags
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-type.md
		'jsdoc/require-next-type': 'off',

		// Requires that each `@param` tag has a description value
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md
		'jsdoc/require-param-description': 'off',

		// Requires that all function parameters have names
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md
		'jsdoc/require-param-name': 'error',

		// Requires that each `@param` tag has a `type` value
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md
		'jsdoc/require-param-type': 'error',

		// Requires that all function parameters are documented (autofixable?)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md
		// Note: document all or nothing!
		'jsdoc/require-param': ['error', {
			enableFixer: true,
		}],

		// Requires that all `@typedef` and `@namespace` tags have `@property`
		// when their type is a plain object, Object, or PlainObject
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md
		'jsdoc/require-property': 'off',

		// Requires that each `@property` tag has a `description` value
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md
		'jsdoc/require-property-description': 'off',

		// Requires that all function `@property` tags have names
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md
		'jsdoc/require-property-name': 'error',

		// Requires that each `@property` tag has a `type` value
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md
		'jsdoc/require-property-type': 'error',

		// Requires that each `@property` tag has a `type` value
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-rejects.md
		'jsdoc/require-rejects': 'off',

		// Requires a return statement (or non-undefined Promise resolve value)
		// in function bodies if a @returns tag (without a void or undefined type)
		// is specified in the function's jsdoc comment.
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md
		'jsdoc/require-returns-check': 'error',

		// Requires that the `@returns` tag has a `description` value
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md
		'jsdoc/require-returns-description': 'off',

		// Requires that `@returns` tag has `type` value
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md
		'jsdoc/require-returns-type': 'error',

		// Requires tags be present, optionally for specific contexts
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-tags.md
		'jsdoc/require-tags': 'off',

		// Requires `@template` tags be present when type parameters are used.
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md
		// Note: Do not think this is required in a TS environment
		'jsdoc/require-template': 'off',

		// Requires a description for `@template` tags
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template-description.md
		'jsdoc/require-template-description': 'off',

		// Requires that returns are documented
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md
		'jsdoc/require-returns': 'error',

		// Requires that throw statements are documented
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md
		'jsdoc/require-throws': 'error',

		// Requires a description for `@throws` tags
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws-description.md
		'jsdoc/require-throws-description': 'error',

		// Requires a type for `@throws` tags
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws-type.md
		'jsdoc/require-throws-type': 'off',

		// Requires that yields are documented
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md
		'jsdoc/require-yields': 'error',

		// Ensures that if a `@yields` is present that a yield
		// (or yield with a value) is present in the function body
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md
		'jsdoc/require-yields-check': 'error',

		// Requires a description for `@yields` tags
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-description.md
		'jsdoc/require-yields-description': 'error',

		// Requires a type for `@yields` tags
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-type.md
		'jsdoc/require-yields-type': 'error',

		// Sorts tags by a specified sequence according to tag name (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md
		// Note: let it be here with default order for a while
		'jsdoc/sort-tags': ['warn', {
			tagSequence: [
				{
					tags: [
						// Brief descriptions
						'summary',
						'typeSummary',
					],
				},
				{
					tags: [
						// Supplementary descriptions
						'see',
					],
				},
				{
					tags: [
						'example',
					],
				},
				{
					tags: [
						// Non-Closure metadata
						'ignore',
						'author',
						'version',
						'variation',
						'since',
						'deprecated',
						'todo',
					],
				}, {
					tags: [
						// Module/file-level
						'module',
						'exports',
						'file',
						'fileoverview',
						'overview',
						// Identifying (name, type)
						'typedef',
						'interface',
						'record',
						'template',
						'name',
						'kind',
						'type',
						'alias',
						'external',
						'host',
						'callback',
						'func',
						'function',
						'method',
						'class',
						'constructor',
						// Relationships
						'modifies',
						'mixes',
						'mixin',
						'mixinClass',
						'mixinFunction',
						'namespace',
						'borrows',
						'constructs',
						'lends',
						'implements',
						'requires',
					],
				},
				{
					tags: [
						// Long descriptions
						'desc',
						'description',
						'classdesc',
						'tutorial',
						'copyright',
						'license',
					],
				},
				{
					tags: [
						// Simple annotations
						'const',
						'constant',
						'final',
						'global',
						'readonly',
						'abstract',
						'virtual',
						'var',
						'member',
						'memberof',
						'memberof!',
						'inner',
						'instance',
						'inheritdoc',
						'inheritDoc',
						'override',
						'hideconstructor',
					],
				},
				{
					tags: [
						// Core function/object info
						'param',
						'arg',
						'argument',
						'prop',
						'property',
					],
				},
				{
					tags: [
						'return',
						'returns',
					],
				},
				{
					tags: [
						// Important behavior details
						'async',
						'generator',
						'default',
						'defaultvalue',
						'enum',
						'augments',
						'extends',
						'throws',
						'exception',
						'yield',
						'yields',
						'event',
						'fires',
						'emits',
						'listens',
						'this',
						// Access
						'static',
						'private',
						'protected',
						'public',
						'access',
						'package',
					],
				},
				{
					tags: [
						'-other',
					],
				},
				{
					tags: [
						// Other Closure (undocumented) metadata
						'closurePrimitive',
						'customElement',
						'expose',
						'hidden',
						'idGenerator',
						'meaning',
						'ngInject',
						'owner',
						'wizaction',

						// Other Closure (documented) metadata
						'define',
						'dict',
						'export',
						'externs',
						'implicitCast',
						'noalias',
						'nocollapse',
						'nocompile',
						'noinline',
						'nosideeffects',
						'polymer',
						'polymerBehavior',
						'preserve',
						'struct',
						'suppress',
						'unrestricted',

						// @homer0/prettier-plugin-jsdoc metadata
						'category',
					],
				},
			],
		}],

		// Enforces lines (or no lines) between tags (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md
		// Note: `any` because of previous `sort-tags` rule, which handles this much more granular
		// Related: https://github.com/gajus/eslint-plugin-jsdoc/issues/782
		'jsdoc/tag-lines': ['warn', 'any', {
			startLines: 1,
			endLines: 0,
		}],

		// Auto-escape certain characters that are input within block and tag descriptions (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md
		// Note: HTML tags should mostly be enclosed in backticks, and HTML tags display fine inside them.
		'jsdoc/text-escaping': ['off', {
			escapeHTML: true,
			escapeMarkdown: false, // For a while, seems nothing wrong with it
		}],

		// Prefers either function properties or method signatures (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-method-signature-style.md
		'jsdoc/ts-method-signature-style': ['warn', 'property', {
			enableFixer: true,
		}],

		// Warns against use of the empty object type
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-empty-object-type.md
		'jsdoc/ts-no-empty-object-type': 'warn',

		// Catches unnecessary template expressions such as string expressions within a template literal (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-unnecessary-template-expression.md
		'jsdoc/ts-no-unnecessary-template-expression': ['warn', {
			enableFixer: true,
		}],

		// Prefers function types over call signatures when there are no other properties. (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-prefer-function-type.md
		'jsdoc/ts-prefer-function-type': ['warn', {
			enableFixer: true,
		}],

		// Formats JSDoc type values (autofixable)
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/type-formatting.md
		'jsdoc/type-formatting': ['warn', {
			enableFixer: true,
			//
			arrayBrackets: 'square',
			arrowFunctionPostReturnMarkerSpacing: ' ',
			arrowFunctionPreReturnMarkerSpacing: ' ',
			functionOrClassParameterSpacing: ' ',
			functionOrClassPostGenericSpacing: '',
			functionOrClassPostReturnMarkerSpacing: ' ',
			functionOrClassPreReturnMarkerSpacing: '',
			functionOrClassTypeParameterSpacing: ' ',
			genericAndTupleElementSpacing: ' ',
			genericDot: false,
			keyValuePostColonSpacing: ' ',
			keyValuePostKeySpacing: '',
			keyValuePostOptionalSpacing: '',
			keyValuePostVariadicSpacing: '',
			methodQuotes: 'single',
			objectFieldIndent: '  ',
			objectFieldQuote: null,
			objectFieldSeparator: 'semicolon-and-linebreak',
			objectFieldSeparatorOptionalLinebreak: true,
			objectFieldSeparatorTrailingPunctuation: true,
			parameterDefaultValueSpacing: ' ',
			postMethodNameSpacing: '',
			postNewSpacing: ' ',
			separatorForSingleObjectField: false,
			stringQuotes: 'single',
			typeBracketSpacing: '',
			unionSpacing: ' ',
		}],

		// Requires all types to be valid JSDoc, Closure, or TypeScript compiler
		// types without syntax errors
		// https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md
		'jsdoc/valid-types': 'error',
	},
});
