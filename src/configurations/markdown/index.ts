import { isEmpty } from '@morev/utils';
import { GLOB_MARKDOWN } from '#globs';
import { parserMarkdown } from '#parsers';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import markdown from './rules/markdown';
import markdownPreferences from './rules/markdown-preferences';
import markdownlint from './rules/markdownlint';

import type { MarkdownConfigurationOptions } from '#types';

export default function configurationMarkdown(options: Partial<MarkdownConfigurationOptions> = {}) {
	const {
		files = [GLOB_MARKDOWN],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/markdown/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/markdown/core',
			files,
			ignores,
			...mergeParts(
				markdown,
				markdownPreferences,
			),
		}),
		defineConfigurationPart({
			name: 'morev/markdown/markdownlint',
			languageOptions: {
				parser: parserMarkdown,
			},
			files,
			ignores,
			...mergeParts(
				markdownlint,
			),
		}),
		defineConfigurationPart({
			name: 'morev/markdown/disables',
			files,
			ignores,
			rules: {
				'@stylistic/no-trailing-spaces': 'off',
				'@stylistic/max-len': 'off',
				'unicorn/filename-case': 'off',
			},
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/markdown/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
