import { pluginJson, pluginPackageJson } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'jsonc': pluginJson,
		'package-json': pluginPackageJson,
	},
	rules: {
		// Reports on unnecessary empty arrays and objects
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/no-empty-fields.md
		'package-json/no-empty-fields': 'warn',

		// Prevents adding unnecessary / redundant files
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/no-redundant-files.md
		// Note: It's good to be informed that NPM includes some files by default,
		// but in general people are more comfortable with explicit instructions.
		'package-json/no-redundant-files': 'off',

		// Require object keys to be sorted (autofixable)
		// https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
		'jsonc/sort-keys': [
			'warn',
			{
				pathPattern: '^$',
				order: [
					'$schema',
					'name',
					'displayName',
					'description',
					'type',
					'private',
					'sideEffects',
					'version',
					'packageManager',
					'workspaces',
					'engines',
					'os',
					'cpu',
					'license',
					'publishConfig',
					'author',
					'contributors',
					'funding',
					'homepage',
					'repository',
					'bugs',
					'keywords',
					'files',
					'directories',
					'bin',
					'exports',
					'main',
					'module',
					'browser',
					'unpkg',
					'types',
					'man',
					'config',
					'scripts',
					'husky',
					'lint-staged',
					'peerDependencies',
					'peerDependenciesMeta',
					'bundledDependencies',
					'overrides',
					'resolutions',
					'dependencies',
					'devDependencies',
					'optionalDependencies',
					'eslintConfig',
				],
			},
			{
				pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
				order: { type: 'asc' },
			},
			{
				pathPattern: '^(?:resolutions|overrides)$',
				order: { type: 'asc' },
			},
			{
				pathPattern: '^author$',
				order: ['name', 'email', 'url'],
			},
			{
				pathPattern: '^contributors\\[\\d+\\]',
				order: ['name', 'email', 'url'],
			},
			{
				pathPattern: '^maintainers\\[\\d+\\]',
				order: ['name', 'email', 'url'],
			},
			{
				pathPattern: '^(?:repository|funding|license)$',
				order: ['type', 'url'],
			},
			{
				pathPattern: '^(?:config|exports)$',
				order: { type: 'asc' },
			},
			{
				pathPattern: '^exports(?:\\[[^\\]]+\\]|\\.[^.]+)$',
				order: [
					'types',
					'import',
					'require',
				],
			},
		],

		// Package properties must be declared in standard order (autofixable)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/order-properties.md
		// Note: Already configured in `jsonc/sort-keys` above
		'package-json/order-properties': 'off',

		// Enforce either object or shorthand declaration for repository (autofixable)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/repository-shorthand.md
		'package-json/repository-shorthand': ['warn', {
			form: 'object',
		}],

		// Requires the `author` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-author.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-author': 'off',

		// Requires the `description` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-description.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-description': 'off',

		// Requires the `engines` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-engines.md
		'package-json/require-engines': 'error',

		// Requires the `files` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-files.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-files': 'off',

		// Requires the `keywords` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-keywords.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-keywords': 'off',

		// Requires the `name` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-name.md
		'package-json/require-name': 'error',

		// Requires the `types` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-types.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-types': 'off',

		// Requires the `version` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-version.md
		'package-json/require-version': 'error',

		// Dependencies, scripts, and configuration values must be declared in alphabetical order (autofixable)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/sort-collections.md
		// Note: Configured in more detail in `jsonc/sort-keys` above
		'package-json/sort-collections': 'off',

		// Checks a dependency isn't specified more than once (i.e. in `dependencies` and `devDependencies`)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/unique-dependencies.md
		'package-json/unique-dependencies': 'error',

		// Checks existence of local dependencies in the package.json
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-local-dependency.md
		'package-json/valid-local-dependency': 'error',

		// Enforce that package names are valid npm package names
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-name.md
		'package-json/valid-name': 'error',

		// Enforce that package.json has all properties required by the npm spec
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-package-def.md
		'package-json/valid-package-definition': 'error',

		// Enforce that if repository directory is specified, it matches the path to the `package.json` file
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-repository-directory.md
		'package-json/valid-repository-directory': 'error',

		// Enforce that package versions are valid semver specifiers
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-version.md
		'package-json/valid-version': 'error',
	},
});
