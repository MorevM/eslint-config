import type { Linter } from 'eslint';

export type FlatConfig = Omit<Linter.Config, 'plugins'> & {
	/**
	 * An object containing a name-value mapping of plugin names to plugin objects.
	 * When files is specified, these plugins are only available to the matching files.
	 */
	plugins?: Record<string, any>;
};

export type RuleValue = Linter.RuleSeverity
	| [Linter.RuleSeverity, any]
	| [Linter.RuleSeverity, ...unknown[]]
	// Actually `undefined` is not valid,
	// but presented in some configuration types ¯\_(ツ)_/¯
	| undefined;
