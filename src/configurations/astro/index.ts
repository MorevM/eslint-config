import { parserAstro, parserTypescript } from '#parsers';
import type { AstroConfigurationOptions } from '#types';
import { GLOB_ASTRO } from '#globs';
import { mergeParts } from '#utils';
import astro from './rules/astro';
import { pluginAstro } from '#plugins';
import globals from 'globals';

export default function configurationAstro(options: Partial<AstroConfigurationOptions> = {}) {
	const {
		files = [GLOB_ASTRO],
		overrides = {},
		ignores = [],
	} = options;

	return [
		{
			name: 'morev/astro',
			languageOptions: {
				globals: {
					...pluginAstro.environments.astro.globals,
					...globals.node,
				},
				parser: parserAstro,
				sourceType: 'module',
				parserOptions: {
					parser: parserTypescript ?? undefined,
					extraFileExtensions: ['.astro'],
				},
			},
			processor: 'astro/client-side-ts',
			files,
			ignores,
			...mergeParts(
				astro,
				{
					rules: overrides,
				},
			),
		},
	];
}
