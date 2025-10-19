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
	},
});
