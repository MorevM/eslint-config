import { arrayUnique  } from '@morev/utils';
import type { Explicit, NonEmptyArray } from '@morev/utils';
import type { FlatConfig } from '#types';

type Part = Explicit<{
	plugins: FlatConfig['plugins'];
	rules: FlatConfig['rules'];
	language?: FlatConfig['language'];
}>;

/**
 * Utility function to merge configuration parts defined in the `configurations` folder.
 *
 * @param   objects   FlatConfig-compatible configurations parts.
 *
 * @returns           Type-safe configuration parts merged into a single object.
 */
export const mergeParts = (...objects: NonEmptyArray<FlatConfig>) => {
	const uniqueKeys = arrayUnique(objects.flatMap((object) => Object.keys(object)));

	const part: Part = {
		plugins: objects.reduce<FlatConfig['plugins']>((acc, config) => ({ ...acc, ...config.plugins }), {}),
		rules: objects.reduce<FlatConfig['rules']>((acc, config) => ({ ...acc, ...config.rules }), {}),
	};

	if (uniqueKeys.includes('language')) {
		const language = objects.reduce<FlatConfig['language']>((acc, config) => {
			return config.language ?? acc;
		}, undefined);

		if (language) {
			part.language = language;
		}
	}

	return part;
};
