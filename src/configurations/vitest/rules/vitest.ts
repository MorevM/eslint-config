import { pluginVitest } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		vitest: pluginVitest,
	},
	rules: {
		// Enforce using .each or .for consistently
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-each-for.md
		'vitest/consistent-each-for': ['off', {
			test: 'for',
			it: 'for',
			describe: 'each',
			suite: 'each',
		}],

		// Forbidden `.spec` test file pattern
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
		'vitest/consistent-test-filename': ['error', {
			pattern: '.*\\.test\\.[tj]sx?$',
			allTestPattern: '.*\\.(test|spec)\\.[tj]sx?$',
		}],

		// Prefer `test` or `it` but not both (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
		'vitest/consistent-test-it': ['warn', {
			fn: 'test',
			withinDescribe: 'it',
		}],

		// Enforce using `vitest` or `vi` but not both (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-vitest-vi.md
		'vitest/consistent-vitest-vi': ['warn', {
			fn: 'vi', // to be consistent with Vitest documentation
		}],

		// Enforce having expectation in test body
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
		'vitest/expect-expect': ['error', {
			assertFunctionNames: ['expect'],
			additionalTestBlockFunctions: [],
		}],

		// Enforce hoisted APIs to be on top of the file
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/hoisted-apis-on-top.md
		'vitest/hoisted-apis-on-top': 'error',

		// Enforce a maximum number of `expect` per test
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
		'vitest/max-expects': ['off', { max: 99 }],

		// Nested describe block should be less than set max value or default value
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
		'vitest/max-nested-describe': ['warn', { max: 4 }],

		// Disallow alias methods (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
		'vitest/no-alias-methods': 'warn',

		// Disallow commented out tests
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
		'vitest/no-commented-out-tests': 'warn',

		// Disallow conditional `expect`s
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
		'vitest/no-conditional-expect': 'warn',

		// Disallow conditional tests
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
		'vitest/no-conditional-in-test': 'warn',

		// Disallow conditional tests
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
		'vitest/no-conditional-tests': 'error',

		// Disallow disabled tests
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
		'vitest/no-disabled-tests': 'warn',

		// Disallow duplicate hooks and teardown hooks
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
		'vitest/no-duplicate-hooks': 'error',

		// Disallow focused tests
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
		'vitest/no-focused-tests': ['error', { fixable: false }],

		// Disallow setup and teardown hooks
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
		'vitest/no-hooks': 'off',

		// Disallow identical titles
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
		'vitest/no-identical-title': 'error',

		// Disallow importing `node:test` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
		'vitest/no-import-node-test': 'error',

		// Disallow importing Vitest globals (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-importing-vitest-globals.md
		'vitest/no-importing-vitest-globals': 'off',

		// Disallow string interpolation in snapshots (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
		'vitest/no-interpolation-in-snapshots': 'warn',

		// Disallow large snapshots
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
		'vitest/no-large-snapshots': 'off',

		// Disallow importing from `__mocks__` directory
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
		'vitest/no-mocks-import': 'error',

		// Disallow specific matchers & modifiers
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
		'vitest/no-restricted-matchers': 'off',

		// Disallow specific `vi.` methods
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
		'vitest/no-restricted-vi-methods': 'off',

		// Disallow using `expect` outside of `it` or `test` blocks
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
		'vitest/no-standalone-expect': 'error',

		// Use `.only` and `.skip` over `f` and `x` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
		'vitest/no-test-prefixes': 'warn',

		// Disallow return statements in tests
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
		'vitest/no-test-return-statement': 'error',

		// Disallow unnecessary async function wrapper for expected promises (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-unneeded-async-expect-function.md
		'vitest/no-unneeded-async-expect-function': 'error',

		// Enforce using `toBeCalledOnce()` or `toHaveBeenCalledOnce()`	(autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-once.md
		'vitest/prefer-called-once': 'off',

		// Prefer `toHaveBeenCalledExactlyOnceWith` over `toHaveBeenCalledOnce` and `toHaveBeenCalledWith` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-exactly-once-with.md
		'vitest/prefer-called-exactly-once-with': 'warn',

		// Enforce using `toBeCalledTimes(1)` or `toHaveBeenCalledTimes(1)`	(autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-times.md
		'vitest/prefer-called-times': 'off',

		// Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
		'vitest/prefer-called-with': 'off',

		// Suggest using the built-in comparison matchers (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
		'vitest/prefer-comparison-matcher': 'warn',

		// Prefer using a function as a describe name over an equivalent string (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-describe-function-title.md
		'vitest/prefer-describe-function-title': 'warn',

		// Prefer `.each` rather than manual loops
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
		'vitest/prefer-each': 'error',

		// Suggest using the built-in equality matchers
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
		'vitest/prefer-equality-matcher': 'warn',

		// Suggest using expect assertions instead of callbacks
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
		'vitest/prefer-expect-assertions': ['off', {
			onlyFunctionsWithAsyncKeyword: true,
		}],

		// Prefer `await expect(...).resolves` over `expect(await ...)` syntax (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
		'vitest/prefer-expect-resolves': 'warn',

		// Enforce using `expectTypeOf` instead of `expect(typeof ...)` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-type-of.md
		'vitest/prefer-expect-type-of': 'warn',

		// Prefer having hooks in a consistent order
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
		'vitest/prefer-hooks-in-order': 'warn',

		// Suggest having hooks before any test cases
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
		'vitest/prefer-hooks-on-top': 'error',

		// Enforce importing Vitest globals	(autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-importing-vitest-globals.md
		'vitest/prefer-importing-vitest-globals': 'off',

		// Enforce lowercase titles (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
		'vitest/prefer-lowercase-title': 'off',

		// Prefer mock resolved/rejected shorthands for promises (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
		'vitest/prefer-mock-promise-shorthand': 'warn',

		// Prefer mock return shorthands (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-return-shorthand.md
		'vitest/prefer-mock-return-shorthand': 'off',

		// Prefer including a hint with external snapshots
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
		'vitest/prefer-snapshot-hint': ['warn', 'always'],

		// Suggest using `vi.spyOn()` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
		'vitest/prefer-spy-on': 'error',

		// Enforce using `toBe(true)` and `toBe(false)` over matchers that coerce types to boolean (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-boolean-matchers.md
		// Note: I just can't imagine the developer writing `toBeTruthy` instead of `toBe(true)` if he didn't want to write EXACTLY that...
		'vitest/prefer-strict-boolean-matchers': 'off',

		// Suggest using `toStrictEqual()`
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
		'vitest/prefer-strict-equal': 'warn',

		// Suggest using `toBe()` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
		'vitest/prefer-to-be': 'warn',

		// Suggest using `toBeFalsy()` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
		'vitest/prefer-to-be-falsy': 'off',

		// Suggest using `toBeObject()` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
		'vitest/prefer-to-be-object': 'off',

		// Suggest using `toBeTruthy()` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
		'vitest/prefer-to-be-truthy': 'off',

		// Suggest using `toContain()` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
		'vitest/prefer-to-contain': 'warn',

		// Suggest using `toHaveBeenCalledTimes()` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-been-called-times.md
		'vitest/prefer-to-have-been-called-times': 'warn',

		// Suggest using `toHaveLength()` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
		'vitest/prefer-to-have-length': 'warn',

		// Suggest using `test.todo` (autofixable but may be confusing)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
		'no-autofix/vitest/prefer-todo': 'off',

		// Prefer `vi.mocked()` over `fn as Mock` (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-vi-mocked.md
		'vitest/prefer-vi-mocked': 'warn',

		// Ensure that every `expect.poll` call is awaited (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-awaited-expect-poll.md
		'vitest/require-awaited-expect-poll': 'error',

		// Require setup and teardown code to be within a hook
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
		'vitest/require-hook': ['error', {
			allowedFunctionCalls: [],
		}],

		// Require local Test Context for concurrent snapshot tests
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
		'vitest/require-local-test-context-for-concurrent-snapshots': 'error',

		// Enforce using type parameters with vitest mock functions
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-mock-type-parameters.md
		// Note: way too restrictive I believe
		'vitest/require-mock-type-parameters': 'off',

		// Require `toThrow()` to be called with an error message
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
		'vitest/require-to-throw-message': 'off',

		// Enforce that all tests are in a top-level `describe`
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
		'vitest/require-top-level-describe': ['error', {
			maxNumberOfTopLevelDescribes: 2,
		}],

		// Enforce valid `describe()` callback
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
		'vitest/valid-describe-callback': 'error',

		// Require promises that have expectations in their chain to be valid
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect-in-promise.md
		'vitest/valid-expect-in-promise': 'error',

		// Enforce valid `expect()` usage
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
		'vitest/valid-expect': 'error',

		// Enforce valid titles (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
		'vitest/valid-title': ['warn', {
			allowArguments: true,
		}],

		// Disallow `.todo` usage
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/warn-todo.md
		'vitest/warn-todo': 'warn',

		// Enforce dynamic import in mock (autofixable)
		// https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-import-in-mock.md
		'vitest/prefer-import-in-mock': 'warn',

		// Enable all `padding-around-*` rules of `jest`, all are autofixable (nothing `jest`-special inside)
		// https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-all.md
		'vitest/padding-around-all': 'warn',
	},
});
