import { parserYaml } from '#parsers';

import type { YamlConfigurationOptions } from '#types';
import { GLOB_YAML } from '#globs';
import { mergeParts } from '#utils';
import yaml from './rules/yaml';

export default function configurationYaml(options: Partial<YamlConfigurationOptions> = {}) {
	const {
		files = [GLOB_YAML],
		overrides = {},
		ignores = [],
	} = options;

	return [
		{
			name: 'morev/yaml',
			languageOptions: {
				parser: parserYaml,
			},
			files,
			ignores,
			...mergeParts(
				yaml,
				{
					rules: overrides,
				},
			),
		},
		{
			name: 'morev/yaml/exceptions',
			files: ['**/dependabot.yml', '**/.gitlab-ci.yml'],
			rules: {
				'yml/file-extension': 'off',
			},
		},
	];
}
