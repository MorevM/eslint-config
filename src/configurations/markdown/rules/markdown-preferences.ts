import { pluginMarkdownPreferences } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	language: 'markdown-preferences/extended-syntax',
	plugins: {
		'markdown-preferences': pluginMarkdownPreferences,
	},
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
		'markdown-preferences/heading-casing': ['off', {
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

		// Disallow trailing punctuation in headings
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/no-heading-trailing-punctuation.html
		'markdown-preferences/no-heading-trailing-punctuation': ['warn', {
			punctuation: '.,;:!。、，；：！｡､',
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
			words: [],
		}],

		// Enforce consistent casing in table header cells (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/table-header-casing.html
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
				referencedFromSingleSection: 'document-last',
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
			style: 'bare',
			avoidEscape: true,
		}],

		// Enforce a consistent style for link titles (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/link-title-style.html
		'markdown-preferences/link-title-style': ['warn', {
			style: 'single',
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
			overrides: [],
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

		// Enforce consistent indentation in Markdown files (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/indent.html
		'markdown-preferences/indent': ['warn', {
			listItems: {
				first: 1,
				other: 'minimum',
				relativeTo: 'taskListMarkerEnd',
			},
		}],

		// Enforce linebreaks after opening and before closing link brackets (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/link-bracket-newline.html
		'markdown-preferences/link-bracket-newline': ['warn', {
			newline: 'never',
			multiline: false,
		}],

		// Enforce consistent spacing inside link brackets (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/link-bracket-spacing.html
		'markdown-preferences/link-bracket-spacing': ['warn', {
			space: 'never',
			imagesInLinks: false,
		}],

		// Enforce linebreaks after opening and before closing link parentheses (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/link-paren-newline.html
		'markdown-preferences/link-paren-newline': ['warn', {
			newline: 'never',
			multiline: false,
		}],

		// Enforce consistent spacing inside link parentheses (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/link-paren-spacing.html
		'markdown-preferences/link-paren-spacing': ['warn', {
			space: 'never',
		}],

		// Enforce consistent alignment of list markers (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/list-marker-alignment.html
		'markdown-preferences/list-marker-alignment': ['warn', {
			align: 'left',
		}],

		// Disallow multiple spaces (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/no-multi-spaces.html
		'markdown-preferences/no-multi-spaces': 'warn',

		// Disallow multiple empty lines (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/no-multiple-empty-lines.html
		'markdown-preferences/no-multiple-empty-lines': ['warn', {
			max: 2,
			maxEOF: 0,
			maxBOF: 0,
		}],

		// Disallow tab characters in Markdown files (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/no-multiple-empty-lines.html
		'markdown-preferences/no-tabs': ['warn', {
			checkTarget: 'all',
			ignoreCodeBlocks: [],
			codeBlockTabWidth: 2,
		}],

		// Disallow trailing whitespace at the end of lines (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/no-trailing-spaces.html
		'markdown-preferences/no-trailing-spaces': ['warn', {
			ignoreComments: false,
			skipBlankLines: false,
		}],

		// Disallow or require padding inside custom containers (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/padded-custom-containers.html
		'markdown-preferences/padded-custom-containers': ['warn', {
			padding: 'never',
			overrides: [
				{
					info: '/^code-group\\b/u',
					padding: 'always',
				},
				{
					info: '/^details\\b/u',
					padding: 'always',
				},
			],
		}],

		// Require or disallow padding lines between blocks (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/padding-line-between-blocks.html
		'markdown-preferences/padding-line-between-blocks': ['warn', {
			prev: '*',
			next: '*',
			blankLine: 'always',
		},
		{
			prev: 'link-definition',
			next: 'link-definition',
			blankLine: 'never',
		},
		{
			prev: 'footnote-definition',
			next: 'footnote-definition',
			blankLine: 'never',
		},
		{
			prev: 'paragraph',
			next: { type: 'list', in: 'list' },
			blankLine: 'never',
		}],

		// Enforce consistent spacing around table pipes (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/table-pipe-spacing.html
		'markdown-preferences/table-pipe-spacing': ['warn', {
			space: 'always',
			cellAlign: {
				defaultDelimiter: 'left',
				leftAlignmentDelimiter: 'left',
				centerAlignmentDelimiter: 'center',
				rightAlignmentDelimiter: 'right',
			},
		}],

		// #endregion

		// #region Decorative Rules

		// Enforce consistent length for the closing sequence (trailing #s) in ATX headings (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/atx-heading-closing-sequence-length.html
		// Note: ATX closing sequence is disallowed by `atx-heading-closing-sequence`
		'markdown-preferences/atx-heading-closing-sequence-length': ['off', {
			mode: 'match-opening',
			length: undefined,
		}],

		// Enforce consistent use of closing sequence in ATX headings (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/atx-heading-closing-sequence.html
		'markdown-preferences/atx-heading-closing-sequence': ['warn', {
			closingSequence: 'never',
		}],

		// Enforce consistent code fence length in fenced code blocks (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/code-fence-length.html
		'markdown-preferences/code-fence-length': ['warn', {
			length: 3,
			fallbackLength: 'minimum',
		}],

		// Enforce maximum length for various Markdown entities
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/max-len.html
		'markdown-preferences/max-len': ['warn', {
			heading: 100,
			paragraph: 140,
			list: 140,
			blockquote: 140,
			table: 'ignore',
			footnoteDefinition: 140,
			html: 'ignore',
			code: 'ignore',
			frontmatter: 'ignore',
			math: 'ignore',
			ignoreUrls: true,
		}],

		// Disallow laziness in blockquotes
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/no-laziness-blockquotes.html
		'markdown-preferences/no-laziness-blockquotes': 'error',

		// Enforce that ordered list markers use sequential numbers (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/ordered-list-marker-sequence.html
		'markdown-preferences/ordered-list-marker-sequence': ['warn', {
			increment: 'never',
		}],

		// Enforce setext heading underline length (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/ordered-list-marker-sequence.html
		'markdown-preferences/setext-heading-underline-length': ['warn', {
			mode: 'exact',
			align: undefined,
		}],

		// Enforce a specific order for link definitions and footnote definitions (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/sort-definitions.html
		'markdown-preferences/sort-definitions': ['warn', {
			order: [
				{ match: '!/^\\[\\^/u', sort: 'alphabetical' },
				{ match: '/./u', sort: 'alphabetical' },
			],
		}],

		// Enforce consistent use of leading and trailing pipes in tables (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/table-leading-trailing-pipes.html
		'markdown-preferences/table-leading-trailing-pipes': ['warn', 'always'],

		// Enforce consistent alignment of table pipes (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/table-pipe-alignment.html
		'markdown-preferences/table-pipe-alignment': ['warn', {
			column: 'minimum',
			delimiterMinLength: {
				defaultDelimiter: 1,
				leftAlignmentDelimiter: 2,
				centerAlignmentDelimiter: 3,
				rightAlignmentDelimiter: 2,
			},
		}],

		// Enforce consistent length for thematic breaks (horizontal rules) (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/thematic-break-length.html
		'markdown-preferences/thematic-break-length': ['warn', {
			length: 3,
		}],

		// Enforce consistent repeating patterns for thematic breaks (horizontal rules) (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-markdown-preferences/rules/thematic-break-sequence-pattern.html
		'markdown-preferences/thematic-break-sequence-pattern': ['warn', {
			pattern: '-',
		}],

		// #endregion
	},
});
