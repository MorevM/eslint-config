import { pluginMarkdownPreferences } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	language: 'markdown-preferences/extended-syntax',
	plugins: {
		'markdown-preferences': pluginMarkdownPreferences,
	},
	// language: 'markdown/gfm',
	rules: {
		// #region Preference Rules

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

		// Enforce the use of inline code for specific words (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/prefer-inline-code-words.html
		'markdown-preferences/prefer-inline-code-words': ['off', {
			words: [], // TODO: Think about
		}],

		// Enforce the use of inline code for specific words (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/prefer-linked-words.html
		'markdown-preferences/prefer-linked-words': ['off', {
			words: [], // TODO: Think about
		}],

		// Enforce consistent casing in table header cells (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/table-header-casing.html
		// TODO: Think about
		'markdown-preferences/table-header-casing': ['off', {
			ignorePatterns: [],
			minorWords: [],
			preserveWords: [],
			style: 'Title Case',
		}],

		// #endregion

		// #region Notation Rules

		// Enforce consistent bullet list (unordered list) marker style (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/bullet-list-marker-style.html
		'markdown-preferences/bullet-list-marker-style': ['warn', {
			primary: '-',
			secondary: '*',
		}],

		// Enforce a consistent code fence style (backtick or tilde) (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/code-fence-style.html
		'markdown-preferences/code-fence-style': ['warn', {
			style: 'backtick',
		}],

		// Require link definitions and footnote definitions to be placed at the end of the document (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/definitions-last.html
		'markdown-preferences/definitions-last': ['warn', {
			linkDefinitionPlacement: {
				referencedFromSingleSection: 'document-last', // TODO[2025-10-26]: Maybe 'section-last'
				referencedFromMultipleSections: 'document-last',
			},
			footnoteDefinitionPlacement: {
				referencedFromSingleSection: 'document-last',
				referencedFromMultipleSections: 'document-last',
			},
		}],

		// Enforce a consistent delimiter style for emphasis and strong emphasis (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/emphasis-delimiters-style.html
		'markdown-preferences/emphasis-delimiters-style': ['warn', {
			emphasis: '*',
			strong: '**',
			strongEmphasis: '***',
		}],

		// Enforce consistent hard linebreak style (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/hard-linebreak-style.html
		'markdown-preferences/hard-linebreak-style': ['warn', {
			style: 'backslash',
		}],

		// Enforce consistent style for level 1 headings (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/level1-heading-style.html
		'markdown-preferences/level1-heading-style': ['warn', {
			style: 'atx',
		}],

		// Enforce consistent style for level 2 headings (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/level2-heading-style.html
		'markdown-preferences/level2-heading-style': ['warn', {
			style: 'atx',
		}],

		// Enforce a consistent style for link destinations (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/link-destination-style.html
		'markdown-preferences/link-destination-style': ['warn', {
			style: 'bare', // TODO[2025-10-26]: Maybe change?
			avoidEscape: true,
		}],

		// Enforce a consistent style for link titles (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/link-title-style.html
		'markdown-preferences/link-title-style': ['warn', {
			style: 'single', // TODO[2025-10-26]: Maybe change?
			avoidEscape: true,
		}],

		// Disallow implicit block closing for fenced code blocks, math blocks, and custom containers (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/no-implicit-block-closing.html
		'markdown-preferences/no-implicit-block-closing': 'error',

		// Disallow text backslash at the end of a line
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/no-text-backslash-linebreak.html
		'markdown-preferences/no-text-backslash-linebreak': 'warn',

		// Enforce consistent ordered list marker style (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/ordered-list-marker-style.html
		'markdown-preferences/ordered-list-marker-style': ['warn', {
			prefer: 'n.',
			overrides: [], // TODO[2025-10-26]: Maybe add option to specify different styles for different levels
		}],

		// Enforce the use of autolinks for URLs (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/prefer-autolinks.html
		'markdown-preferences/prefer-autolinks': 'warn',

		// Enforce the use of fenced code blocks over indented code blocks (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/prefer-fenced-code-blocks.html
		'markdown-preferences/prefer-fenced-code-blocks': 'error',

		// Enforce using link reference definitions instead of inline links (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/prefer-link-reference-definitions.html
		'markdown-preferences/prefer-link-reference-definitions': ['warn', {
			minLinks: 2,
		}],

		// Enforce a consistent delimiter style for strikethrough (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/strikethrough-delimiters-style.html
		'markdown-preferences/strikethrough-delimiters-style': ['warn', {
			delimiter: '~~',
		}],

		// Enforce consistent character style for thematic breaks (horizontal rules) (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/thematic-break-character-style.html
		'markdown-preferences/thematic-break-character-style': ['warn', {
			style: '-',
		}],

		// #endregion

		// #region Whitespace Rules

		// Enforce consistent alignment of blockquote markers (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/blockquote-marker-alignment.html
		'markdown-preferences/blockquote-marker-alignment': 'warn',

		// Require or disallow spacing between opening code fence and language identifier (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/code-fence-spacing.html
		'markdown-preferences/code-fence-spacing': ['warn', {
			space: 'never',
		}],

		// Require or disallow spacing between opening custom container marker and info (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/custom-container-marker-spacing.html
		'markdown-preferences/custom-container-marker-spacing': ['warn', {
			space: 'always',
		}],

		// #endregion

		// #region Decorative Rules

		// Enforce consistent use of closing sequence in ATX headings (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/atx-heading-closing-sequence.html
		'markdown-preferences/atx-heading-closing-sequence': ['warn', {
			closingSequence: 'never',
		}],

		// #endregion
	},
});
