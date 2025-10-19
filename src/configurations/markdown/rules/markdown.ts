import { pluginMarkdown } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		markdown: pluginMarkdown,
	},
	language: 'markdown/gfm',
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

		// Disallow duplicate definitions
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-definitions.md
		'markdown/no-duplicate-definitions': 'error',

		// Disallow duplicate headings in the same document
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-headings.md
		'markdown/no-duplicate-headings': ['error', {
			checkSiblingsOnly: true,
		}],

		// Disallow empty definitions
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-definitions.md
		'markdown/no-empty-definitions': 'error',

		// Disallow empty images
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-images.md
		'markdown/no-empty-images': 'error',

		// Disallow empty links
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-links.md
		'markdown/no-empty-links': 'error',

		// Disallow HTML tags
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-html.md
		'markdown/no-html': ['error', {
			allowed: ['table', 'details', 'summary', 'br', 'code', 'img', 'div', 'span'],
		}],

		// Disallow invalid label references
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-invalid-label-refs.md
		'markdown/no-invalid-label-refs': 'error',

		// Disallow headings without a space after the hash characters (autofixable)
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-atx-heading-space.md
		'markdown/no-missing-atx-heading-space': ['error', {
			checkClosedHeadings: true,
		}],

		// Disallow missing label references
		// https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-label-refs.md
		'markdown/no-missing-label-refs': ['warn', {
			// TODO: This is temporal until https://github.com/eslint/markdown/issues/294 is resolved.
			allowLabels: ['!NOTE', '!TIP', '!IMPORTANT', '!WARNING', '!CAUTION'],
		}],
	},
});
