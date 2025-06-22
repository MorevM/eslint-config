import { isEmpty } from '@morev/utils';
import { GLOB_PLAYWRIGHT } from '#globs';
import { defineConfigurationPart, mergeParts } from '#utils';
import { universalRules } from '~configurations/universal-rules';

import playwright from './rules/playwright';

import type { PlaywrightConfigurationOptions } from '#types';

export default function configurationPlaywright(options: Partial<PlaywrightConfigurationOptions> = {}) {
	const {
		files = [...GLOB_PLAYWRIGHT],
		overrides = {},
		ignores = [],
	} = options;

	return [
		defineConfigurationPart({
			name: 'morev/playwright/universal',
			files,
			ignores,
			...universalRules,
		}),
		defineConfigurationPart({
			name: 'morev/playwright/core',
			files,
			ignores,
			...mergeParts(
				playwright,
			),
		}),
		defineConfigurationPart({
			name: 'morev/playwright/overrides',
			files,
			ignores,
			rules: {
				// It's better to be explicit in tests.
				'sonarjs/no-duplicate-string': 'off',
			},
		}),
		!isEmpty(overrides) && defineConfigurationPart({
			name: 'morev/playwright/user-overrides',
			files,
			ignores,
			rules: overrides,
		}),
	].filter(Boolean);
}
