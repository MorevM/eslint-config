import { pluginMarkdownlint } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		markdownlint: pluginMarkdownlint,
	},
	rules: {
		// First heading should be a top-level heading (deprecated)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md002
		// 'markdownlint/md002': null,

		// Reports inconsistent indentation for list items at the same level (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md005
		'markdownlint/md005': 'warn',

		// Consider starting bulleted lists at the beginning of the line (autofixable; deprecated)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md006
		// 'markdownlint/md006': true,

		// Enforce unordered list indentation (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md007
		// Note: Doesn't work well with lists nested it HTML such as `details`
		'no-autofix/markdownlint/md007': ['error', {
			indent: 2,
			start_indented: false,
		}],

		// Where is 'markdownlint/md008'? :)

		// Disallow trailing spaces (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md009
		'markdownlint/md009': ['warn', {
			br_spaces: 0, // use `\` for hard break
			list_item_empty_lines: false,
			strict: true,
		}],

		// Disallow hard tab characters (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md010
		'markdownlint/md010': ['warn', {
			code_blocks: true,
			spaces_per_tab: 2,
		}],

		// Enforce multiple consecutive blank lines (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md012
		// TODO: Turned off due to wrong implementation, replaced with `@stylistic/no-multiple-empty-lines`
		// Related issue: https://gitlab.com/pawelbbdrozd/eslint-plugin-markdownlint/-/issues/6
		// 'markdownlint/md012': ['warn', {
		// 	maximum: 2,
		// }],

		// Enforce line length
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md013
		'markdownlint/md013': ['warn', {
			line_length: 150,
			heading_line_length: 150, // ??
			code_block_line_length: 150,
			code_blocks: false,
			tables: false,
			headings: false,
			strict: false,
			stern: true,
		}],

		// Dollar signs used before commands without showing output (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md014
		'markdownlint/md014': 'warn',

		// Where is 'markdownlint/md015' - 'markdownlint/md017'? :)

		// Disallow multiple spaces after hash on ATX style heading (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md019
		'markdownlint/md019': 'warn',

		// Disallow multiple spaces after hash on closed ATX style heading (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md021
		'markdownlint/md021': 'warn',

		// Headings should be surrounded by blank lines (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md022
		'markdownlint/md022': ['warn', {
			lines_above: 1,
			lines_below: 1,
		}],

		// Headings must start at the beginning of the line (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md023
		'markdownlint/md023': 'warn',

		// Trailing punctuation in heading (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md026
		'markdownlint/md026': ['warn', {
			punctuation: '.,;',
		}],

		// Multiple spaces after blockquote symbol (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md027
		'markdownlint/md027': 'warn',

		// Blank line inside blockquote
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md028
		'markdownlint/md028': 'error',

		// Ordered list item prefix
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md029
		'markdownlint/md029': ['warn', {
			style: 'one',
		}],

		// Spaces after list markers (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md030
		'markdownlint/md030': ['warn', {
			ul_single: 1,
			ol_single: 1,
			ul_multi: 1,
			ol_multi: 1,
		}],

		// Fenced code blocks should be surrounded by blank lines (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md031
		'markdownlint/md031': ['warn', {
			list_items: true,
		}],

		// Lists should be surrounded by blank lines (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md032
		'markdownlint/md032': 'warn',

		// Horizontal rule style
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md035
		'markdownlint/md035': ['warn', {
			style: '---',
		}],

		// Emphasis used instead of a heading
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md036
		'markdownlint/md036': 'error',

		// Spaces inside code span elements (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md038
		'markdownlint/md038': 'warn',

		// Spaces inside link text (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md039
		'markdownlint/md039': 'warn',

		// First line in a file should be a top-level heading
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md041
		// Note: It's pretty annoying to disable it all the time considering assistive role of most MD files.
		'markdownlint/md041': ['off', {
			level: 1,
			front_matter_title: '^\s*"?title"?\s*[:=]',
		}],

		// Required heading structure
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md043
		'markdownlint/md043': 'off',

		// Proper names should have the correct capitalization (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md044
		'markdownlint/md044': ['warn', {
			names: [], // string[]
			code_blocks: false,
		}],

		// Files should end with a single newline character (autofixable)
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md047
		'markdownlint/md047': 'warn',
	},
});
