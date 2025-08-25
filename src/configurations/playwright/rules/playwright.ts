import { pluginPlaywright } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		playwright: pluginPlaywright,
	},
	rules: {
		// Enforce assertion to be made in a test body
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/expect-expect.md
		'playwright/expect-expect': 'error',

		// Enforces a maximum number assertion calls in a test body
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/max-expects.md
		'playwright/max-expects': 'off',

		// Enforces a maximum depth to nested `describe` calls
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/max-nested-describe.md
		'playwright/max-nested-describe': ['warn', { max: 4 }],

		// Enforce Playwright APIs to be awaited (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/missing-playwright-await.md
		'playwright/missing-playwright-await': 'error',

		// Disallow commented out tests
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-commented-out-tests.md
		'playwright/no-commented-out-tests': 'warn',

		// Disallow calling `expect` conditionally
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-conditional-expect.md
		'playwright/no-conditional-expect': 'error',

		// Disallow conditional logic in tests
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-conditional-in-test.md
		'playwright/no-conditional-in-test': 'error',

		// Disallow duplicate setup and teardown hooks
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-duplicate-hooks.md
		'playwright/no-duplicate-hooks': 'error',

		// Disallow usage of element handles
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-element-handle.md
		'playwright/no-element-handle': 'error',

		// Disallow usage of `page.$eval()` and `page.$$eval()`
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-eval.md
		'playwright/no-eval': 'error',

		// Disallow usage of `.only` annotation
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-focused-test.md
		'playwright/no-focused-test': 'error',

		// Disallow usage of the `{ force: true }` option
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-force-option.md
		'playwright/no-force-option': 'error',

		// Disallow using `getByTitle()` (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-get-by-title.md
		'playwright/no-get-by-title': 'error',

		// Disallow setup and teardown hooks
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-hooks.md
		'playwright/no-hooks': 'off',

		// Disallow nested `test.step()` methods
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-nested-step.md
		'playwright/no-nested-step': 'error',

		// Disallow usage of the `networkidle` option
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-networkidle.md
		'playwright/no-networkidle': 'error',

		// Disallow usage of `first()`, `last()`, and `nth()` methods
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-nth-methods.md
		'playwright/no-nth-methods': 'warn',

		// Disallow using `page.pause()`
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-page-pause.md
		'playwright/no-page-pause': 'error',

		// Disallow using raw locators
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-raw-locators.md
		'playwright/no-raw-locators': 'off',

		// Disallow specific matchers & modifiers
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-restricted-matchers.md
		'playwright/no-restricted-matchers': 'off',

		// Disallow usage of the `.skip` annotation
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-skipped-test.md
		'playwright/no-skipped-test': ['warn', {
			allowConditional: false,
		}],

		// Disallow usage of the `.slow` annotation
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-slowed-test.md
		'playwright/no-slowed-test': 'warn',

		// Disallow using expect outside of `test` blocks
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-standalone-expect.md
		'playwright/no-standalone-expect': 'error',

		// Prevent unsafe variable references in `page.evaluate()` (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-unsafe-references.md
		'playwright/no-unsafe-references': 'error',

		// Disallow unnecessary `await`s for Playwright methods (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-useless-await.md
		'playwright/no-useless-await': 'error',

		// Disallow usage of `not` matchers when a specific matcher exists (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-useless-not.md
		'playwright/no-useless-not': 'warn',

		// Disallow usage of `page.waitForNavigation()`
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-navigation.md
		'playwright/no-wait-for-navigation': 'warn',

		// 	Disallow usage of `page.waitForSelector()`
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-selector.md
		'playwright/no-wait-for-selector': 'error',

		// Disallow usage of `page.waitForTimeout()`
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-timeout.md
		'playwright/no-wait-for-timeout': 'error',

		// Suggest using the built-in comparison matchers (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-comparison-matcher.md
		'playwright/prefer-comparison-matcher': 'warn',

		// Suggest using the built-in equality matchers
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-equality-matcher.md
		'playwright/prefer-equality-matcher': 'warn',

		// Prefer having hooks in a consistent order
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-hooks-in-order.md
		'playwright/prefer-hooks-in-order': 'error',

		// Suggest having hooks before any test cases
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-hooks-on-top.md
		'playwright/prefer-hooks-on-top': 'error',

		// Enforce lowercase test names
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
		'playwright/prefer-lowercase-title': 'off',

		// Suggest built-in locators over `page.locator()` (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-native-locators.md
		'playwright/prefer-native-locators': 'off',

		// Suggest locators over page methods
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-locator.md
		'playwright/prefer-locator': 'error',

		// Suggest using `toStrictEqual()`
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-strict-equal.md
		'playwright/prefer-strict-equal': 'error',

		// Suggest using `toBe()` (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-be.md
		'playwright/prefer-to-be': 'warn',

		// Suggest using `toContain()` (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-contain.md
		'playwright/prefer-to-contain': 'warn',

		// 	Suggest using `toHaveCount()` (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-count.md
		'playwright/prefer-to-have-count': 'warn',

		// 	Suggest using `toHaveLength()` (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-length.md
		'playwright/prefer-to-have-length': 'warn',

		// Suggest using web first assertions (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-web-first-assertions.md
		'playwright/prefer-web-first-assertions': 'warn',

		// Require setup and teardown code to be within a hook
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-hook.md
		'playwright/require-hook': ['error', {
			allowedFunctionCalls: [],
		}],

		// Require assertions to use `expect.soft()` (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-soft-assertions.md
		'playwright/require-soft-assertions': 'off',

		// Require a message for `toThrow()`
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-to-throw-message.md
		'playwright/require-to-throw-message': 'off',

		// Require test cases and hooks to be inside a `test.describe` block
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-top-level-describe.md
		'playwright/require-top-level-describe': ['warn', {
			maxTopLevelDescribes: 1,
		}],

		// Enforce valid `describe()` callback
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-describe-callback.md
		'playwright/valid-describe-callback': 'error',

		// Require promises that have expectations in their chain to be valid
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-expect-in-promise.md
		'playwright/valid-expect-in-promise': 'error',

		// Enforce valid `expect()` usage
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-expect.md
		'playwright/valid-expect': 'error',

		// Enforce valid titles (autofixable)
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-title.md
		'playwright/valid-title': 'error',

		// Enforce valid tag format in test blocks
		// https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-test-tags.md
		'playwright/valid-test-tags': 'error',
	},
});
