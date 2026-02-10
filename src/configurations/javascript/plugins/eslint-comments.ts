import { pluginEslintComments } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'eslint-comments': pluginEslintComments,
	},
	rules: {
		// Require a `eslint-enable` comment for every `eslint-disable` comment
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
		'eslint-comments/disable-enable-pair': ['error', {
			allowWholeFile: true,
		}],

		// Disallow a `eslint-enable` comment for multiple `eslint-disable` comments
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
		'eslint-comments/no-aggregating-enable': 'error',

		// Disallow duplicate `eslint-disable` comments
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
		'eslint-comments/no-duplicate-disable': 'error',

		// Disallow `eslint-disable` comments without rule names
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
		// Note: It's usually obvious what's wrong here
		'eslint-comments/no-unlimited-disable': 'off',

		// Disallow unused `eslint-disable` comments (autofixable but confusing)
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
		'no-autofix/eslint-comments/no-unused-disable': 'warn',

		// Disallow unused `eslint-enable` comments
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
		'eslint-comments/no-unused-enable': 'error',

		// Disallow `eslint-disable` comments about specific rules
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
		'eslint-comments/no-restricted-disable': 'off',

		// Disallow ESLint directive-comments
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-use.html
		'eslint-comments/no-use': ['warn', {
			allow: [
				'eslint-disable',
				'eslint-disable-line',
				'eslint-disable-next-line',
				'eslint-enable',
				'global',
				'globals',
			],
		}],

		// Require include descriptions in ESLint directive-comments
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
		// Note: Usually it's obvious
		'eslint-comments/require-description': 'off',
	},
});
