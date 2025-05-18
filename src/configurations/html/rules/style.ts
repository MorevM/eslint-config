import { pluginHtml } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'@html-eslint': pluginHtml,
	},
	rules: {
		// Require newline between attributes (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/attrs-newline
		'@html-eslint/attrs-newline': ['warn', {
			closeStyle: 'newline',
			ifAttrsMoreThan: 5,
		}],

		// Require newline between elements (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/element-newline
		'@html-eslint/element-newline': 'error',

		// Enforce naming conventions for `id` attributes
		// https://yeonjuan.github.io/html-eslint/docs/rules/id-naming-convention
		// Note: should be configured individually
		// P.S. Don't use `ID`s
		'@html-eslint/id-naming-convention': 'off',

		// Enforce consistent indentation (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/indent
		'@html-eslint/indent': ['warn', 'tab'],

		// Enforce to use lowercase for tag and attribute names (autofixable)
		// https://html-eslint.org/docs/rules/lowercase
		'@html-eslint/lowercase': 'warn',

		// Enforces element maximum depth
		// https://html-eslint.org/docs/rules/max-element-depth
		'@html-eslint/max-element-depth': 'off',

		// Disallow extra spaces around attributes (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-extra-spacing-attrs
		'@html-eslint/no-extra-spacing-attrs': ['warn', {
			enforceBeforeSelfClose: true,
		}],

		// Disallow multiple consecutive spaces or tabs in text and comments (autofixable)
		// https://github.com/yeonjuan/html-eslint/blob/main/docs/rules/no-extra-spacing-text.md
		// Note: as they are ignored, the developer must make a decision about readability
		'@html-eslint/no-extra-spacing-text': ['off', {
			skip: ['pre'],
		}],

		// Disallows the use of multiple empty lines (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-multiple-empty-lines
		'@html-eslint/no-multiple-empty-lines': ['warn', { max: 2 }],

		// Disallow trailing whitespaces at the end of lines (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/no-trailing-spaces
		'@html-eslint/no-trailing-spaces': ['error'],

		// Enforce consistent quoting attributes with double or single (autofixable)
		// https://yeonjuan.github.io/html-eslint/docs/rules/quotes
		'@html-eslint/quotes': ['warn', 'double'],

		// Enforce attributes alphabetical sorting (autofixable)
		// https://html-eslint.org/docs/rules/sort-attrs
		'@html-eslint/sort-attrs': 'off',
	},
});
