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

		// Require configured YAML frontmatter fields
		// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-frontmatter-fields.md
		// Reason: the rule does not support the configured Markdown language and required fields are project-specific.
		'unicorn/require-frontmatter-fields': ['off', {
			fields: [],
		}],
	},
});
