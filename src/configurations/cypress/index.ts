import { isEmpty } from '@morev/utils';
import { GLOB_CYPRESS } from '#globs';
import { pluginCypress } from '#plugins';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import cypress from './rules/cypress';

import type { CypressConfigurationOptions } from '#types';

export default function configurationCypress(options: Partial<CypressConfigurationOptions> = {}) {
	const {
		files = [...GLOB_CYPRESS],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/cypress/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/cypress/core',
			languageOptions: {
				globals: {
					// @ts-expect-error -- Trust me it exists
					...pluginCypress.configs.globals.languageOptions.globals,
				},
			},
			files,
			ignores,
			...mergeParts(
				cypress,
			),
		}),
		defineConfigurationPart({
			name: 'morev/cypress/overrides',
			files,
			ignores,
			rules: {
				// It's better to be explicit in tests.
				'sonarjs/no-duplicate-string': 'off',
			},
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/cypress/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
