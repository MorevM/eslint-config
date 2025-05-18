/**
 * Temporal workaround, will do a separate package next
 */
import { isEmpty, isObject, tsObject } from '@morev/utils';
import ruleComposer from 'eslint-rule-composer';
import riskyEslint from 'eslint/use-at-your-own-risk';
import type { FlatConfig } from '#types';

const createNonFixableRule = (rule: any) => {
	if (!rule) return null;
	return ruleComposer.mapReports(Object.create(rule), (problem: any) => {
		problem.fix = null;
		return problem;
	});
};

export const applyNoAutofix = (...configurations: FlatConfig[]) => {
	const flatConfigurations = configurations.flat(Infinity);

	const allPlugins = flatConfigurations.reduce<Record<string, any>>((acc, configuration) => {
		if (!isObject(configuration.plugins)) return acc;
		tsObject.entries(configuration.plugins).forEach(([pluginMappingName, pluginObject]) => {
			acc[pluginMappingName] ??= pluginObject;
		});
		return acc;
	}, {});

	const allNoAutofixRules = flatConfigurations.reduce<string[]>((acc, configuration) => {
		const noAutofixRules = tsObject.keys(configuration.rules ?? {})
			.filter((ruleName) => ruleName.startsWith('no-autofix'));
		acc.push(...noAutofixRules);
		return acc;
	}, []).map((ruleName) => ruleName.replace('no-autofix/', ''));

	if (isEmpty(allNoAutofixRules)) {
		return flatConfigurations;
	}

	const fixedRules = allNoAutofixRules.reduce<Record<string, any>>((acc, ruleName) => {
		const [scope, cleanRuleName] = (() => {
			const parts = ruleName.split('/');

			return parts.length === 1
				? [null, parts[0]]
				: [parts[0], parts.slice(1).join('')];
		})();

		if (scope && allPlugins[scope]?.rules?.[cleanRuleName]) {
			acc[`${scope}/${cleanRuleName}`] = createNonFixableRule(allPlugins[scope].rules[cleanRuleName]);
		} else {
			acc[cleanRuleName] = createNonFixableRule(riskyEslint.builtinRules.get(cleanRuleName));
		}

		return acc;
	}, {});

	flatConfigurations.unshift({
		plugins: {
			'no-autofix': {
				meta: {
					name: 'eslint-plugin-no-autofix',
					version: '0.0.0',
				},
				rules: fixedRules,
			},
		},
	});

	return flatConfigurations;
};
