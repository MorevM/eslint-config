import { pluginMarkdown } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		markdown: pluginMarkdown,
	},
	language: 'markdown/commonmark',
	rules: {
		// Require languages for fenced code blocks
		// https://github.com/eslint/markdown/blob/main/docs/rules/fenced-code-language.md
		'markdown/fenced-code-language': 'warn',

		// Require languages for fenced code blocks
		// https://github.com/eslint/markdown/blob/main/docs/rules/heading-increment.md
		'markdown/heading-increment': 'warn',

		// Disallow bare URLs (autofixable)
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-bare-urls.md
		'markdown/no-bare-urls': 'error',
	},
});
