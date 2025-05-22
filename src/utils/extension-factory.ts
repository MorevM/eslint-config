import { isArray, isEmpty, toArray } from '@morev/utils';
import { ESLINT_FORMATTING_RULES } from '#constants';
import type { Arrayable, PlainObject } from '@morev/utils';
import type { FlatConfig, RuleValue } from '#types';

type ExtensionFactoryOptions = {
	/**
	 * The configuration among whose rules to search for a base rule.
	 *
	 * @example configurationJavascript()
	 */
	baseConfig: Arrayable<FlatConfig>;

	/**
	 * The prefix of base rule to search. \
	 * If there is a need to extend not the ESLint core rule,
	 * the function will search for `${baseRulePrefix}/${rule}` to extend
	 *
	 * @example 'jsx-a11y'
	 */
	baseRulePrefix?: string;

	/**
	 * The prefix of the resulting extension rule name.
	 *
	 * @example 'vue'
	 */
	prefix: string;

	/**
	 * Whether to always disable the original ESLint rule. \
	 * Rules can be disabled selectively by adding `-` before the rule name.
	 *
	 * @example false
	 */
	alwaysDisableBaseRule?: boolean;
};

/**
 * Utility function to create extension rules.
 *
 * @param   options   Custom factory options.
 *
 * @returns           The function to define extension rule.
 */
export const extensionFactory = (options: ExtensionFactoryOptions) => {
	const { prefix, alwaysDisableBaseRule = false, baseConfig, baseRulePrefix = '' } = options;

	const baseRules = toArray(baseConfig).reduce<FlatConfig['rules']>((acc, item) => {
		return { ...acc, ...item.rules };
	}, {});

	/**
	 * Function to define extension rule based on the original ESLint rule value.
	 *
	 * @param   ruleOrRules   The name of the base rule (or array of its names) to use its name and options.
	 *                        If the rule name is prefixed with `-` character, then the base rule will be disabled.
	 * @param   extendWith    The options to merge with the base rule options.
	 *
	 * @returns               An object containing extension rule with configured `prefix` and,
	 *                        optionally, disabled base rule.
	 *
	 * @throws               Throws if the rule is not found in the base config.
	 */
	return (ruleOrRules: string | string[], extendWith?: PlainObject) => {
		return toArray(ruleOrRules).reduce<Record<string, RuleValue>>((result, rule) => {
			const shouldDisableBaseRule = alwaysDisableBaseRule || rule.startsWith('-');
			const cleanRule = [baseRulePrefix, rule.replace(/^-/, '')].filter(Boolean).join('/');

			const ruleName = ESLINT_FORMATTING_RULES.includes(cleanRule)
				? `@stylistic/${cleanRule}`
				: cleanRule;

			let shouldDisableAutofix = false;
			const ruleValue = (() => {
				if (baseRules?.[ruleName]) return baseRules?.[ruleName];
				if (baseRules?.[`no-autofix/${ruleName}`]) {
					shouldDisableAutofix = true;
					return baseRules?.[`no-autofix/${ruleName}`];
				}
				return null;
			})();
			if (!ruleValue) {
				throw new Error(`There is no rule '${ruleName}' to extend.`);
			}

			shouldDisableBaseRule && (result[ruleName] = 'off');

			const severity = isArray(ruleValue) ? ruleValue[0] : ruleValue;
			const baseOptions = isArray(ruleValue) ? ruleValue.slice(1)[0] : null;

			const newOptions = extendWith
				? { ...baseOptions as object, ...extendWith }
				: baseOptions;

			const autofixPrefix = shouldDisableAutofix ? 'no-autofix/' : '';
			result[`${autofixPrefix}${prefix}/${cleanRule}`] = isEmpty(newOptions)
				? severity
				: [severity, newOptions];

			return result;
		}, {});
	};
};
