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

		// Enforce consistent casing in headings (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/heading-casing.html
		// TODO: Custom option to extend option arrays
		'markdown-preferences/heading-casing': ['warn', {
			style: 'Title Case',
			preserveWords: [
				...pluginMarkdownPreferences.resources.defaultPreserveWords,
			],
			ignorePatterns: [
				'/^v\\d+/u', // Version numbers starting with 'v' (e.g., v1, v2.0.1)
				'/\\w+\\.[a-z\\d]+$/u', // File extensions and names (e.g., config.json, package.json, index.html)
				'/\\w*(?:API|Api)$/u', // Words ending with API (e.g., webAPI, restAPI)
				'/\\w*(?:SDK|Sdk)$/u', // Words ending with SDK (e.g., nodeSDK, javaSDK)
				'/\\w*(?:CLI|Cli)$/u', // Words ending with CLI (e.g., nodeCLI, gitCLI)
				'/[а-яё]/u', // Any Cyrillic content
			],
			minorWords: [
				...pluginMarkdownPreferences.resources.defaultMinorWords,
				'via',
			],
		}],

		// Enforce that ordered list markers start with 1 or 0 (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/ordered-list-marker-start.html
		'markdown-preferences/ordered-list-marker-start': ['warn', {
			start: 1,
		}],
	},
});
