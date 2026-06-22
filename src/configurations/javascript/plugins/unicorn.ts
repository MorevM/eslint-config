import { pluginUnicorn } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		unicorn: pluginUnicorn,
	},
	rules: {
		// Enforce a specific parameter name in catch clauses (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
		// Note: developer knows better
		'unicorn/catch-error-name': ['off', {
			name: 'error',
			ignore: [],
		}],

		// Enforce consistent class references in static methods
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/class-reference-in-static-methods.md
		'unicorn/class-reference-in-static-methods': ['warn', {
			preferThis: true,
			preferSuper: true,
		}],

		// Enforce better comment content (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/comment-content.md
		// TODO [2026-06-27]: Discuss whether the default replacement dictionary fits shared prose.
		'unicorn/comment-content': ['off', {
			extendDefaultReplacements: true,
			replacements: {},
		}],

		// Enforce consistent assertion style with `node:assert` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-assert.md
		'unicorn/consistent-assert': 'warn',

		// Enforce consistent class member order
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-class-member-order.md
		'unicorn/consistent-class-member-order': ['warn', {
			order: [
				'static-field',
				'static-block',
				'private-field',
				'public-field',
				'constructor',
				'static-method',
				'private-method',
				'public-method',
			],
		}],

		// Enforce consistent spelling of compound words in identifiers
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-compound-words.md
		'unicorn/consistent-compound-words': ['off', {
			extendDefaultReplacements: true,
			// Reason: these forms can be ambiguous domain or API terms, not just misspellings.
			replacements: {
				metaData: false,
				subClass: false,
				subDirectory: false,
				subDomain: false,
				subMenu: false,
				subProcess: false,
				subString: false,
				subTree: false,
				subType: false,
				subTitle: false,
				weekEnd: false,
			},
			allowList: {},
			checkVariables: true,
			checkProperties: false,
			checkDefaultAndNamespaceImports: 'internal',
			checkShorthandImports: 'internal',
			checkShorthandProperties: false,
		}],

		// Prefer passing `Date` directly to the constructor when cloning (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-date-clone.md
		'unicorn/consistent-date-clone': 'warn',

		// Use destructured variables over properties (partly autofixable, but might be confusing)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
		// Reason for `off`: too much false-positive errors
		'no-autofix/unicorn/consistent-destructuring': 'off',

		// Prefer consistent types when spreading a ternary in an array literal (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-empty-array-spread.md
		'unicorn/consistent-empty-array-spread': 'warn',

		// Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-existence-index-check.md
		'unicorn/consistent-existence-index-check': 'warn',

		// Enforce consistent decorator position on exported classes (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-export-decorator-position.md
		'unicorn/consistent-export-decorator-position': ['warn', 'above'],

		// Move function definitions to the highest possible scope
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
		// Note: really not sure about that, let it be in warn for a while @todo:
		'unicorn/consistent-function-scoping': 'warn',

		// Enforce function syntax by role
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-style.md
		// Reason: function style is already covered by `func-style` and `prefer-arrow-callback`
		'unicorn/consistent-function-style': ['off', {
			default: 'ignore',
			namedFunctions: 'ignore',
			namedExports: 'ignore',
			callbacks: 'ignore',
			objectProperties: 'ignore',
			reassignedVariables: 'ignore',
			typedVariables: 'ignore',
		}],

		// Enforce consistent optional chaining for same-base member access
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-optional-chaining.md
		'unicorn/consistent-optional-chaining': 'warn',

		// Enforce consistent style for escaping `${` in template literals (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-template-literal-escape.md
		'unicorn/consistent-template-literal-escape': 'warn',

		// Enforce correct `Error` subclassing (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
		'unicorn/custom-error-definition': 'error',

		// Enforce no spaces between braces (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md
		'unicorn/empty-brace-spaces': 'warn',

		// Enforce passing a `message` value when creating a built-in error
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
		'unicorn/error-message': 'error',

		// Require escape sequences to use uppercase values (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
		'unicorn/escape-case': 'warn',

		// Add expiration conditions to TODO comments
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
		'unicorn/expiring-todo-comments': 'error',

		// Enforce explicitly comparing the length or size property of a value
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
		'unicorn/explicit-length-check': 'off',

		// Enforce or disallow explicit `delay` argument for `setTimeout()` and `setInterval()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-timer-delay.md
		'unicorn/explicit-timer-delay': ['warn', 'always'],

		// Enforce a case style for filenames
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
		'unicorn/filename-case': ['error', {
			case: 'kebabCase',
			ignore: [],
		}],

		// Require identifiers to match a specified regular expression
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/id-match.md
		// Reason: naming style is already covered by `camelcase` and TypeScript naming rules
		'unicorn/id-match': ['off', '^.+$', {
			classFields: false,
			ignoreDestructuring: false,
			onlyDeclarations: false,
			properties: false,
			checkNamedSpecifiers: true,
		}],

		// Enforce specific import styles per module
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
		// Note: it depends, developer knows better
		'unicorn/import-style': 'off',

		// Prevent usage of variables from outside the scope of isolated functions
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/isolated-functions.md
		'unicorn/isolated-functions': 'error',

		// Limit the depth of nested calls
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/max-nested-calls.md
		// Reason: a good developer knows when to stop.
		'unicorn/max-nested-calls': ['off', {
			max: 3,
		}],

		// Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`
		// (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
		'unicorn/new-for-builtins': 'warn',

		// Enforce specifying rules to disable in `eslint-disable` comments
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
		// Note: it depends, i would like to enable it for all cases except `eslint-disable(-*)?-line`, but there is no option, so off
		'unicorn/no-abusive-eslint-disable': 'off',

		// Disallow recursive access to this within getters and setters.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-accessor-recursion.md
		'unicorn/no-accessor-recursion': 'error',

		// Disallow anonymous functions and classes as the default export
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-anonymous-default-export.md
		'unicorn/no-anonymous-default-export': 'off',

		// Prevent passing a function reference directly to iterator methods
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
		// Note: not sure, but let this thing be `error` for a while
		'unicorn/no-array-callback-reference': 'error',

		// Disallow using reference values as `Array#fill()` values
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-fill-with-reference-type.md
		// Note: reports as `error` because every filled array element receives the same reference
		'unicorn/no-array-fill-with-reference-type': 'error',

		// Disallow `.fill()` after `Array.from({length: …})`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-from-fill.md
		// Reason: reference values are covered by `no-array-fill-with-reference-type`, and primitive fills are just another style
		'unicorn/no-array-from-fill': 'off',

		// Prefer `for…of` over the `forEach` method (partially autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-each.md
		// Reason: `forEach` is acceptable when callback boundaries are intentional
		'unicorn/no-for-each': 'off',

		// Disallow using the this argument in array methods (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
		'unicorn/no-array-method-this-argument': 'warn',

		// Disallow `Array#reduce()` and `Array#reduceRight()`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
		// Note: if you can't read reduce calls - just practice more
		'unicorn/no-array-reduce': 'off',

		// Prefer `Array#toReversed()` over `Array#reverse()`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reverse.md
		// Note: mutating `reverse()` is ok when in-place operation is intended
		'unicorn/no-array-reverse': ['warn', {
			allowExpressionStatement: true,
		}],

		// Prefer `Array#toSorted()` over `Array#sort()`.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-sort.md
		// Note: mutating `sort()` is ok when in-place operation is intended
		'unicorn/no-array-sort': ['off', {
			allowExpressionStatement: true,
		}],

		// Disallow asterisk prefixes in documentation comments (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-asterisk-prefix-in-documentation-comments.md
		// Reason: JSDoc formatting is already handled by `jsdoc/require-asterisk-prefix`
		'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',

		// Forbid member access from await expression (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
		'unicorn/no-await-expression-member': 'warn',

		// Disallow using `await` in `Promise` method parameters
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-in-promise-methods.md
		'unicorn/no-await-in-promise-methods': 'warn',

		// Disallow `break` and `continue` in nested loops and switches inside loops
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-break-in-nested-loop.md
		'unicorn/no-break-in-nested-loop': 'warn',

		// Do not use leading/trailing space between `console.log` parameters (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md
		'unicorn/no-console-spaces': 'warn',

		// Disallow dynamic object property existence checks
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-computed-property-existence-check.md
		// Reason: dynamic property checks are usually intentional
		'unicorn/no-computed-property-existence-check': 'off',

		// Disallow confusing uses of `Array#{splice,toSpliced}()`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-splice.md
		// Note: reports as `warn` because the alternatives can differ around return values and indexes
		'unicorn/no-confusing-array-splice': 'warn',

		// Disallow confusing uses of `Array#with()`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-with.md
		// Reason: `.length` would be useful, but negative indexes are valid and too broadly forbidden
		'unicorn/no-confusing-array-with': 'off',

		// Disallow declarations before conditional early exits when they are only used after the exit (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-declarations-before-early-exit.md
		// Reason: Triggers for constants declared at the beginning of the file.
		'unicorn/no-declarations-before-early-exit': 'off',

		// Do not use `document.cookie` directly
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
		// `js-cookie` just 1.5kb and no worries
		'unicorn/no-document-cookie': 'error',

		// Disallow duplicate values in `Set` constructor array literals
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-set-values.md
		// Note: reports as `warn` because duplicates are usually accidental, but removal can be a behavioral decision
		'unicorn/no-duplicate-set-values': 'warn',

		// Disallow `.map()` and `.filter()` in `for…of` and `for await…of` loop headers
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-loops.md
		'unicorn/no-duplicate-loops': 'warn',

		// Disallow empty files
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
		// Note: some files may be intentionally empty, but it's good to have a rule that will show them
		'unicorn/no-empty-file': 'warn',

		// Disallow assigning to built-in error properties
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-error-property-assignment.md
		'unicorn/no-error-property-assignment': 'error',

		// Disallow exports in scripts
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-exports-in-scripts.md
		// Note: does not break execution, but mixing CLI and module roles may be a design mistake
		'unicorn/no-exports-in-scripts': 'warn',

		// Do not use a for loop that can be replaced with a for-of loop (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
		// Note: too radical to be an error or exists at all, but let it be `warn` for a while
		'unicorn/no-for-loop': 'warn',

		// Disallow assigning properties on the global object
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-global-object-property-assignment.md
		// Reason: global patches are common and often outside shared config control
		'unicorn/no-global-object-property-assignment': 'off',

		// Disallow incorrect template literal interpolation syntax
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-incorrect-template-string-interpolation.md
		'unicorn/no-incorrect-template-string-interpolation': 'warn',

		// Disallow immediate mutation after variable assignment (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-immediate-mutation.md
		'unicorn/no-immediate-mutation': 'error',

		// Disallow `instanceof` with built-in objects (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-builtins.md
		'unicorn/no-instanceof-builtins': 'error',

		// Disallow calling functions with an invalid number of arguments.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-argument-count.md
		'unicorn/no-invalid-argument-count': 'error',

		// Disallow invalid options in `fetch()` and `new Request()`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-fetch-options.md
		'unicorn/no-invalid-fetch-options': 'error',

		// Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
		'unicorn/no-invalid-remove-event-listener': 'error',

		// Disallow identifiers starting with new or class
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
		// Note: developer knows better
		'unicorn/no-keyword-prefix': 'off',

		// Disallow `if` statements as the only statement in `if` blocks without `else` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
		'no-autofix/unicorn/no-lonely-if': 'warn',

		// Disallow a magic number as the `depth` argument in `Array#flat(…)`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-magic-array-flat-depth.md
		'unicorn/no-magic-array-flat-depth': 'warn',

		// Disallow manually wrapped comments (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-manually-wrapped-comments.md
		// Reason: comment prose heuristics can be noisy
		'unicorn/no-manually-wrapped-comments': 'off',

		// Disallow checking a Map key before accessing a different key.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-mismatched-map-key.md
		'unicorn/no-mismatched-map-key': 'error',

		// Disallow named usage of default import and export (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-named-default.md
		'unicorn/no-named-default': 'warn',

		// Disallow negated array predicate calls (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-array-predicate.md
		// Reason: negating the whole predicate call can be clearer.
		'unicorn/no-negated-array-predicate': 'off',

		// Disallow negated conditions (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
		// Note: this is `no-negated-condition` with autofix capacity.
		'no-negated-condition': 'off',
		'unicorn/no-negated-condition': 'off',

		// Disallow negated expression in equality check
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negation-in-equality-check.md
		'unicorn/no-negation-in-equality-check': 'warn',

		// Disallow nested ternary expressions (partly autofixable).
		// It allows nested, but they should be wrapped in parentheses (thats correct).
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
		'no-nested-ternary': 'off',
		'unicorn/no-nested-ternary': 'off',

		// Disallow `new Array()` (partly autofixable)
		// Note: no need, it's clear if only one parameter as defined in base `no-array-constructor`
		'unicorn/no-new-array': 'off',

		// Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`
		// (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md
		'unicorn/no-new-buffer': 'error',

		// Disallow the use of the `null` literal
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
		// Note: `null` is used to show variable exists and "not set"; `undefined` means... nothing?
		'unicorn/no-null': 'off',

		// Disallow the use of objects as default parameters
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
		'unicorn/no-object-as-default-parameter': 'error',

		// Disallow `Object` methods with `Map` or `Set`.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-methods-with-collections.md
		'unicorn/no-object-methods-with-collections': 'error',

		// Disallow optional chaining on undeclared variables.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-optional-chaining-on-undeclared-variable.md
		// Reason: covered by `no-undef` in JavaScript and TypeScript itself in TypeScript.
		'unicorn/no-optional-chaining-on-undeclared-variable': 'off',

		// Disallow `process.exit()`
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md
		// Note: dunno whats wrong with `process.exit()`
		'unicorn/no-process-exit': 'off',

		// Disallow passing single-element arrays to Promise methods (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-single-promise-in-promise-methods.md
		'no-autofix/unicorn/no-single-promise-in-promise-methods': 'off',

		// Forbid classes that only have static members
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
		'unicorn/no-static-only-class': 'error',

		// Disallow `then` property
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md
		'unicorn/no-thenable': 'error',

		// Disallow assigning `this` to a variable
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
		// Note: too radical to be a strict rule
		'unicorn/no-this-assignment': 'off',

		// Disallow `this` outside of classes
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-outside-of-class.md
		// Reason: object methods, Vue options, and SDK callbacks may intentionally bind `this`
		'unicorn/no-this-outside-of-class': 'off',

		// Disallow comparing `undefined` using `typeof` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md
		'unicorn/no-typeof-undefined': ['warn', {
			checkGlobalVariables: false,
		}],

		// Disallow using `1` as the `depth` argument of `Array#flat()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-flat-depth.md
		'unicorn/no-unnecessary-array-flat-depth': 'warn',

		// Disallow using `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#{splice,toSpliced}()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-splice-count.md
		'unicorn/no-unnecessary-array-splice-count': 'warn',

		// Disallow awaiting non-promise values (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md
		'unicorn/no-unnecessary-await': 'warn',

		// Disallow unnecessary nested ternary expressions (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-nested-ternary.md
		// Note: reports as `warn` because it only combines duplicated ternary branches
		'unicorn/no-unnecessary-nested-ternary': 'warn',

		// Enforce the use of built-in methods instead of unnecessary polyfills
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-polyfills.md
		'unicorn/no-unnecessary-polyfills': 'warn',

		// Disallow using `.length` or `Infinity` as the end argument of `{Array,String,TypedArray}#slice()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-slice-end.md
		'unicorn/no-unnecessary-slice-end': 'warn',

		// Disallow unreadable array destructuring (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md
		// Note: developer knows better
		'unicorn/no-unreadable-array-destructuring': 'off',

		// Disallow unreadable IIFEs
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md
		// Note: developer knows better
		'unicorn/no-unreadable-iife': 'off',

		// Disallow ignoring the return value of selected array methods
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-array-method-return.md
		// Note: reports as `warn` because it is syntax-only and may see non-array methods with array-like names
		'unicorn/no-unused-array-method-return': 'warn',

		// Disallow unused object properties
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md
		'unicorn/no-unused-properties': 'warn',

		// Disallow unnecessary `.toArray()` on iterators (partially autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-iterator-to-array.md
		'unicorn/no-useless-iterator-to-array': 'warn',

		// Disallow useless values or fallbacks in `Set`, `Map`, `WeakSet`, or `WeakMap` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-collection-argument.md
		'unicorn/no-useless-collection-argument': 'warn',

		// Disallow unnecessary `Error.captureStackTrace(…)` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-error-capture-stack-trace.md
		'unicorn/no-useless-error-capture-stack-trace': 'error',

		// Forbid useless fallback when spreading in object literals (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
		'unicorn/no-useless-fallback-in-spread': 'warn',

		// Disallow useless array length check (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
		'unicorn/no-useless-length-check': 'off',

		// Disallow returning/yielding P`romise.resolve/reject()` in async functions or promise callbacks (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
		'unicorn/no-useless-promise-resolve-reject': 'warn',

		// Disallow useless spread (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
		'unicorn/no-useless-spread': 'error',

		// Disallow useless case in switch statements
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
		'unicorn/no-useless-switch-case': 'error',

		// Disallow useless undefined (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
		// Note: as for `null`, developer should know better
		'unicorn/no-useless-undefined': 'off',

		// Disallow number literals with zero fractions or dangling dots (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
		// Note: developer knows better, maybe we want to indicate number which `used as` double next
		'unicorn/no-zero-fractions': 'off',

		// Enforce proper case for numeric literals (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
		'unicorn/number-literal-case': 'warn',

		// Enforce the style of numeric separators by correctly grouping digits (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
		// Note: all default
		'unicorn/numeric-separators-style': ['error', {
			onlyIfContainsSeparator: true,
			hexadecimal: {
				minimumDigits: 0,
				groupLength: 2,
			},
			binary: {
				minimumDigits: 0,
				groupLength: 4,
			},
			octal: {
				minimumDigits: 0,
				groupLength: 4,
			},
			number: {
				minimumDigits: 5,
				groupLength: 3,
			},
		}],

		// Prefer `.find(…)` over the first element from `.filter(…)` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
		'unicorn/prefer-array-find': 'warn',

		// Prefer `Array#flat()` over legacy techniques to flatten arrays (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
		'unicorn/prefer-array-flat': 'warn',

		// Prefer `.flatMap(…)` over `.map(…).flat()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
		'unicorn/prefer-array-flat-map': 'warn',

		// Prefer `Array#indexOf()` over `Array#findIndex()` when looking for the index of an item (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md
		'unicorn/prefer-array-index-of': 'warn',

		// Prefer last-oriented array methods over `Array#reverse()` or `Array#toReversed()` followed by a method
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-last-methods.md
		// Note: reports as `warn` because replacements can differ for mutation, sparse arrays, and index callbacks
		'unicorn/prefer-array-last-methods': 'warn',

		// Prefer `.some(…)` over `.filter(…).length` check and `.find(…)` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md
		'unicorn/prefer-array-some': 'warn',

		// Prefer `.at()` method for index access and `String#charAt()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
		'unicorn/prefer-at': 'warn',

		// Prefer `BigInt` literals over the constructor (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-bigint-literals.md
		'unicorn/prefer-bigint-literals': 'warn',

		// Prefer `Blob#arrayBuffer()` over F`ileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-blob-reading-methods.md
		'unicorn/prefer-blob-reading-methods': 'error',

		// Prefer class field declarations over `this` assignments in constructors (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-class-fields.md
		'unicorn/prefer-class-fields': 'error',

		// Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
		'unicorn/prefer-code-point': 'error',

		// Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
		'unicorn/prefer-date-now': 'warn',

		// Prefer default parameters over reassignment (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md
		'unicorn/prefer-default-parameters': 'error',

		// Prefer `export…from` when re-exporting (autofixable but might be confusing during development flow)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
		'no-autofix/unicorn/prefer-export-from': ['warn', {
			checkUsedVariables: false,
		}],

		// Prefer `.getOrInsertComputed()` when the default value has side effects (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-get-or-insert-computed.md
		// Note: reports as `error` because `getOrInsert()` evaluates side-effectful defaults even when the key exists
		'unicorn/prefer-get-or-insert-computed': 'error',

		// Prefer `globalThis` over `window`, `self`, and `global` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-this.md
		// Note: I think it's better to be explicit, especially when working with mixed environments (Vue/React + SSR for example)
		'unicorn/prefer-global-this': 'off',

		// Prefer HTTPS over HTTP (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-https.md
		// Reason: protocol is often outside of a shared config consumer's control
		'unicorn/prefer-https': 'off',

		// Prefer `import.meta.{dirname,filename}` over legacy techniques for getting file paths (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-import-meta-properties.md
		'unicorn/prefer-import-meta-properties': 'warn',

		// Prefer `.includes()` over repeated equality comparisons
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes-over-repeated-comparisons.md
		// Note: reports as `warn` because accessors and proxies can make repeated reads observable
		'unicorn/prefer-includes-over-repeated-comparisons': ['warn', {
			minimumComparisons: 3,
		}],

		// Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence
		// (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md
		'unicorn/prefer-includes': 'error',

		// Prefer `Iterator.concat(…)` over temporary spread arrays (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-concat.md
		// Reason: `Iterator.concat()` is too new for a shared config
		// TODO [2028-12-24]: Enable after expected Baseline Widely Available.
		'unicorn/prefer-iterator-concat': 'off',

		// Prefer moving `.toArray()` to the end of iterator helper chains.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-to-array-at-end.md
		// Note: reports as `warn` because it is suggestion-only and applies only when iterator helpers are already used
		'unicorn/prefer-iterator-to-array-at-end': 'warn',

		// Enforce consistent JSON file reads before `JSON.parse()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-json-file-read.md
		// Note: `string` is more explicit and compatible with TypeScript's `JSON.parse()` typing
		'unicorn/consistent-json-file-read': ['warn', 'string'],

		// Prefer using a logical operator over a ternary (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md
		'unicorn/prefer-logical-operator-over-ternary': 'warn',

		// Prefer `Math.abs()` over manual absolute value expressions and symmetric range checks (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-abs.md
		// Note: reports as `warn` because the transformation is stylistic, not a correctness issue
		'unicorn/prefer-math-abs': 'warn',

		// Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-min-max.md
		'unicorn/prefer-math-min-max': 'warn',

		// Enforce the use of `Math.trunc` instead of bitwise operators (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md
		'unicorn/prefer-math-trunc': 'warn',

		// Prefer modern `Math` APIs over legacy patterns (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
		'unicorn/prefer-modern-math-apis': 'warn',

		// Prefer JavaScript modules (ESM) over CommonJS
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
		// Note: todo: a bit later
		'unicorn/prefer-module': 'off',

		// Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md
		'unicorn/prefer-native-coercion-functions': 'warn',

		// Prefer negative index over `.length - index` for `{String,Array,TypedArray}#slice()`,
		// `Array#splice()` and `Array#at()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
		'unicorn/prefer-negative-index': 'error',

		// Prefer `Number` static properties over global ones (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
		// Note: what's the problem with global functions? I'm serious.
		'unicorn/prefer-number-properties': 'off',

		// Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object
		// (autofixable for simple cases)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
		// Reason: too many false-positive errors
		'no-autofix/unicorn/prefer-object-from-entries': 'off',

		// Prefer omitting the catch binding parameter. (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
		'unicorn/prefer-optional-catch-binding': 'warn',

		// Prefer borrowing methods from the prototype instead of methods from an instance (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
		// Reason for `off`: Too verbose, would anyone seriously overwrite methods of global objects?
		'unicorn/prefer-prototype-methods': 'off',

		// Prefer `.querySelector()` over `.getElementById()`,
		// `.querySelectorAll()` over `.getElementsByClassName()` and .`getElementsByTagName()`. (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md
		'unicorn/prefer-query-selector': 'warn',

		// Prefer `queueMicrotask()` over `process.nextTick()`, `setImmediate()` and `setTimeout(…, 0)` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-queue-microtask.md
		// Note: only `process.nextTick()` is checked, without autofix, because task scheduling is observable
		'no-autofix/unicorn/prefer-queue-microtask': ['warn', {
			checkSetImmediate: false,
			checkSetTimeout: false,
		}],

		// Prefer `Reflect.apply()` over `Function#apply()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md
		'no-autofix/unicorn/prefer-reflect-apply': 'error',

		// Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md
		// Note: just why?
		'no-autofix/unicorn/prefer-regexp-test': 'off',

		// Prefer `Response.json()` over `new Response(JSON.stringify())` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-response-static-json.md
		'unicorn/prefer-response-static-json': 'warn',

		// Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
		// Note: Set needed when Set needed, Array needed when Array needed...
		'no-autofix/unicorn/prefer-set-has': 'off',

		// Prefer using `Set#size` instead of `Array#length` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md
		'unicorn/prefer-set-size': 'warn',

		// Prefer simple conditions first in logical expressions (partially autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simple-condition-first.md
		// Reason: condition order should follow algorithm importance and readability, not static simplicity
		'unicorn/prefer-simple-condition-first': 'off',

		// Enforce combining multiple `Array#push()`, `Element#classList.{add,remove}()`, and `importScripts()` into one call
		// Autofixable but doesn't care about comments, might be confusing.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-call.md
		'no-autofix/unicorn/prefer-single-call': 'warn',

		// Prefer `String#split()` with a limit (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-split-limit.md
		'unicorn/prefer-split-limit': 'warn',

		// Prefer the spread operator over `Array.from(…)`, `Array#concat(…)` and `Array#slice()` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
		'unicorn/prefer-spread': 'error',

		// Prefer `String#matchAll()` over `RegExp#exec()` loops (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-match-all.md
		'unicorn/prefer-string-match-all': 'warn',

		// Prefer `String#padStart()` and `String#padEnd()` over manual string padding (partially autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-pad-start-end.md
		'unicorn/prefer-string-pad-start-end': 'warn',

		// Prefer using the `String.raw` tag to avoid escaping `\` (autofixable but confusing)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-raw.md
		// Note: pretty rarely used thing that raises more questions than it does any benefit
		'no-autofix/unicorn/prefer-string-raw': 'off',

		// Prefer `String#repeat()` for repeated whitespace (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-repeat.md
		'unicorn/prefer-string-repeat': ['warn', {
			minimumRepetitions: 3,
		}],

		// Prefer `String#replaceAll()` over regex searches with the global flag (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
		'unicorn/prefer-string-replace-all': 'warn',

		// Prefer `String#slice()` over `String#substr()` and `String#substring()` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
		// Note: Autofix works strange replacing `s.substring(0, start)` to `s.slice(0, Math.max(0, start))` that impairs readability
		'no-autofix/unicorn/prefer-string-slice': 'error',

		// Prefer `String#startsWith()` && `String#endsWith()` over `RegExp#test()` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
		'unicorn/prefer-string-starts-ends-with': 'error',

		// Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
		'unicorn/prefer-string-trim-start-end': 'warn',

		// Prefer using `structuredClone` to create a deep clone (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-structured-clone.md
		// Note: https://github.com/eslint/eslint/issues/18354
		'unicorn/prefer-structured-clone': ['off', {
			functions: ['deepClone', 'cloneDeep'],
		}],

		// Prefer `switch` over multiple `else-if` (partly autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
		// Note: opinions about that in community too different, so let this thing be `off`
		'no-autofix/unicorn/prefer-switch': 'off',

		// Prefer ternary expressions over simple if-else statements (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
		'unicorn/prefer-ternary': ['error', 'only-single-line'],

		// Prefer top-level await over top-level promises and async function calls
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
		'unicorn/prefer-top-level-await': 'error',

		// Enforce throwing `TypeError` in type checking conditions (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md
		'unicorn/prefer-type-error': 'warn',

		// Prefer Unicode code point escapes over legacy escape sequences (partially autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-unicode-code-point-escapes.md
		'unicorn/prefer-unicode-code-point-escapes': 'warn',

		// Prevent abbreviations (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
		// Note: it mostly personal preferences, I'm absolutely fine with any common abbreviations
		//       which makes code less verbose, but some of them are just annoying to read.
		'unicorn/prevent-abbreviations': ['warn', {
			extendDefaultReplacements: false,
			// @keep-sorted
			replacements: {
				btn: {
					button: true,
				},
				cb: {
					callback: true,
				},
				cnt: {
					count: true,
				},
				conf: {
					config: true,
				},
				ctx: {
					context: true,
				},
				cur: {
					current: true,
				},
				curr: {
					current: true,
				},
				descr: {
					description: true,
				},
				dir: {
					direction: true,
					directory: true,
				},
				dirs: {
					directories: true,
				},
				dst: {
					dest: true,
					dist: true,
					destination: true,
					distribution: true,
				},
				e: {
					error: true,
					event: true,
				},
				elem: {
					element: true,
				},
				elems: {
					elements: true,
				},
				err: {
					error: true,
				},
				ev: {
					event: true,
				},
				evt: {
					event: true,
				},
				func: {
					fn: true,
					function: true,
				},
				idx: {
					index: true,
				},
				len: {
					length: true,
				},
				msg: {
					message: true,
				},
				opts: {
					options: true,
				},
				rel: {
					related: true,
					relationship: true,
					relative: true,
				},
				req: {
					request: true,
				},
				res: {
					resource: true,
					response: true,
					result: true,
				},
				sep: {
					separator: true,
				},
				tbl: {
					table: true,
				},
				tmp: {
					temp: true,
				},
				tmpl: {
					template: true,
				},
				val: {
					value: true,
				},
				ver: {
					version: true,
				},
			},
			allowList: {
				eCommerce: true,
			},
		}],

		// Enforce consistent relative URL style (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
		// Note: explicit indication more clear than implicit
		'unicorn/relative-url-style': ['warn', 'always'],

		// Enforce using the separator argument with `Array#join()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
		'unicorn/require-array-join-separator': 'error',

		// Require non-empty module attributes for imports and exports (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-attributes.md
		'no-autofix/unicorn/require-module-attributes': 'warn',

		// Require non-empty specifier list in import and export statements (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-specifiers.md
		'unicorn/require-module-specifiers': 'error',

		// Enforce using the digits argument with `Number#toFixed()` (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
		'unicorn/require-number-to-fixed-digits-argument': 'error',

		// Enforce using the targetOrigin argument with window.postMessage()
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md
		'unicorn/require-post-message-target-origin': 'error',

		// Enforce better string content
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md
		'unicorn/string-content': 'off',

		// Enforce consistent brace style for `case` clauses (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
		'unicorn/switch-case-braces': ['warn', 'avoid'],

		// Enforce consistent `break`/`return`/`continue`/`throw` position in `case` clauses (partially autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-break-position.md
		'unicorn/switch-case-break-position': 'warn',

		// Fix whitespace-insensitive template indentation (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
		// Note: this is default configuration but I have a feeling that changes will be needed, so the options are explicit
		'unicorn/template-indent': ['warn', {
			tags: [
				'outdent',
				'dedent',
				'gql',
				'sql',
				'html',
				'styled',
			],
			functions: [
				'dedent',
				'stripIndent',
			],
			selectors: [],
			comments: [
				'HTML',
				'indent',
			],
		}],

		// Enforce consistent case for text encoding identifiers (autofixable but implementation is dumb simple)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
		// Note: All that this rule does - replaces `utf-8` strings to `utf8`, no matter where it placed
		'no-autofix/unicorn/text-encoding-identifier-case': 'off',

		// Require new when throwing an error (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
		'unicorn/throw-new-error': 'warn',

		// Limit the complexity of `try` blocks.
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/try-complexity.md
		// Reason: too noisy for ordinary `try` blocks
		'unicorn/try-complexity': ['off', {
			max: 1,
		}],
	},
});
