import type { NonEmptyArray } from '@morev/utils';
import type { FlatConfig } from '#types';

/**
 * Utility function to merge configuration parts defined in the `configurations` folder.
 *
 * @param   objects   FlatConfig-compatible configurations parts.
 *
 * @returns           Type-safe configuration parts merged into a single object.
 */
export const mergeParts = (...objects: NonEmptyArray<FlatConfig>) => {
	return {
		plugins: objects.reduce<FlatConfig['plugins']>((acc, config) => ({ ...acc, ...config.plugins }), {}),
		rules: objects.reduce<FlatConfig['rules']>((acc, config) => ({ ...acc, ...config.rules }), {}),
	};
};
