import { pluginMarkdownPreferences } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'markdown-preferences': pluginMarkdownPreferences,
	},
	// language: 'markdown/gfm',
	rules: {
		// Enforce canonical language names in code blocks (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/canonical-code-block-language.html
		'markdown-preferences/canonical-code-block-language': 'warn',

		// Enforce consistent emoji notation style (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/emoji-notation.html
		'markdown-preferences/emoji-notation': ['warn', {
			prefer: 'unicode',
			ignoreUnknown: true,
			ignoreList: [],
		}],
	},
});
