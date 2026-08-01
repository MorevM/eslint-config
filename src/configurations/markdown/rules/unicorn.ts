import { pluginUnicorn } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		unicorn: pluginUnicorn,
	},
	rules: {
		// Disallow references to missing local resources (autofixable)
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-missing-local-resource.md
		// Reason: the rule does not support the `markdown-preferences/extended-syntax` language.
		'unicorn/no-missing-local-resource': 'off',
	},
});
