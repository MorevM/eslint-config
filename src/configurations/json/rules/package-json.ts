import { pluginJson, pluginPackageJson } from '#plugins';
import { defineConfigurationPart } from '#utils';

export default defineConfigurationPart({
	plugins: {
		'jsonc': pluginJson,
		'package-json': pluginPackageJson,
	},
	rules: {
		// Enforce that names for bin properties are in kebab case
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/bin-name-casing.md
		'package-json/bin-name-casing': 'error',

		// Enforce consistent format for the exports field (implicit or explicit subpaths) (autofixable)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/exports-subpaths-style.md
		'package-json/exports-subpaths-style': ['warn', {
			prefer: 'explicit',
		}],

		// Reports on unnecessary empty arrays and objects
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/no-empty-fields.md
		'package-json/no-empty-fields': ['warn', {
			ignoreProperties: ['browserslist'],
		}],

		// Requires that dependencies do not use local file paths, which will likely result in errors when installing from a registry.
		// https://eslint-plugin-package-json.dev/rules/no-local-dependencies
		'package-json/no-local-dependencies': ['error', {
			ignorePrivate: true,
		}],

		// Prevents adding unnecessary / redundant files
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/no-redundant-files.md
		// Note: It's good to be informed that NPM includes some files by default,
		// but in general people are more comfortable with explicit instructions.
		'package-json/no-redundant-files': 'off',

		// Warns when `publishConfig.access` is used in unscoped packages
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/no-redundant-publishConfig.md
		// Note: It's good to be informed that NPM includes some files by default,
		// but in general people are more comfortable with explicit instructions.
		'package-json/no-redundant-publishConfig': 'off',

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

		// Ensures that proper attribution is included, requiring that either `author` or `contributors` is defined,
		// and that if `contributors` is present, it should include at least one contributor.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-attribution.md
		'package-json/require-attribution': 'off',

		// Requires the `author` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-author.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-author': 'off',

		// Requires the `bin` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-bin
		// Note: Most packages do not expose command-line binaries.
		'package-json/require-bin': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `browser` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-browser
		// Note: Most packages are not browser-specific entrypoint maps.
		'package-json/require-browser': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `bugs` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-bugs.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-bugs': 'off',

		// Requires the `bundleDependencies` property to be present.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-bundleDependencies.md
		// Note: Way too strict to require
		'package-json/require-bundleDependencies': 'off',

		// Requires the `config` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-config
		// Note: Most packages do not need package-managed configuration values.
		'package-json/require-config': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `contributors` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-contributors
		// Note: Most commercial projects are doing quite well without it.
		'package-json/require-contributors': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `cpu` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-cpu
		// Note: Most packages are not limited to specific CPU architectures.
		'package-json/require-cpu': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `dependencies` property to be present.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-dependencies.md
		// Note: Way too strict to require
		'package-json/require-dependencies': 'off',

		// Requires the `description` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-description.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-description': 'off',

		// Requires the `devDependencies` property to be present.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-devDependencies.md
		// Note: Way too strict to require
		'package-json/require-devDependencies': 'off',

		// Requires the `devEngines` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-devEngines
		// Note: Development tooling constraints are not universal package metadata.
		'package-json/require-devEngines': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `directories` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-directories
		// Note: Most packages do not use the legacy CommonJS directories metadata.
		'package-json/require-directories': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `engines` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-engines.md
		'package-json/require-engines': 'error',

		// Requires the `exports` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-exports.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-exports': 'off',

		// Requires the `files` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-files.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-files': 'off',

		// Requires the `funding` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-funding
		// Note: Funding metadata is useful for open-source packages, but not universal enough to require.
		'package-json/require-funding': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `gypfile` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-gypfile
		// Note: Most packages do not build native addons with node-gyp.
		'package-json/require-gypfile': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `homepage` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-homepage.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-homepage': 'off',

		// Requires the `keywords` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-keywords.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-keywords': 'off',

		// Requires the `libc` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-libc
		// Note: Most packages are not limited to specific libc implementations.
		'package-json/require-libc': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `license` property to be present.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-license.md
		'package-json/require-license': 'warn',

		// Requires the `main` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-main
		// Note: Packages may rely on `exports`, and apps often do not expose package entrypoints.
		'package-json/require-main': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `man` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-man
		// Note: Most packages do not ship man pages.
		'package-json/require-man': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `module` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-module
		// Note: The non-standard `module` field is not universal package metadata.
		'package-json/require-module': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `name` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-name.md
		'package-json/require-name': 'error',

		// Requires the `optionalDependencies` property to be present.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-optionalDependencies.md
		// Note: Way too strict to require
		'package-json/require-optionalDependencies': 'off',

		// Requires the `os` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-os
		// Note: Most packages are not limited to specific operating systems.
		'package-json/require-os': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `packageManager` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-packageManager
		// Note: Package manager pinning is useful, but too project-specific to require everywhere.
		'package-json/require-packageManager': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `peerDependencies` property to be present.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-peerDependencies.md
		// Note: Way too strict to require
		'package-json/require-peerDependencies': 'off',

		// Requires the `peerDependenciesMeta` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-peerDependenciesMeta
		// Note: Most packages do not need peer dependency metadata.
		'package-json/require-peerDependenciesMeta': ['off', {
			ignorePrivate: false,
		}],

		// Requires the `private` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-private
		// Note: Requiring `private` would force every package to declare publish intent explicitly.
		'package-json/require-private': 'off',

		// Requires the `publishConfig` property to be present.
		// https://eslint-plugin-package-json.dev/rules/require-properties/require-publishConfig
		// Note: Publish configuration is only meaningful for packages that are actually published.
		'package-json/require-publishConfig': ['off', {
			ignorePrivate: true,
		}],

		// Requires the `repository` property to be present.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-repository.md
		'package-json/require-repository': 'off',

		// Requires the `scripts` property to be present.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-scripts.md
		'package-json/require-scripts': 'off',

		// Requires the `sideEffects` property to be present.
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-sideEffects.md
		'package-json/require-sideEffects': 'off',

		// Requires the `type` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-type.md
		'package-json/require-type': 'error',

		// Requires the `types` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-types.md
		// Note: Most commercial projects are doing quite well without it
		'package-json/require-types': 'off',

		// Requires the `version` property to be present
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/require-version.md
		'package-json/require-version': 'error',

		// Restricts the range of dependencies to allow or disallow specific types of ranges
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/restrict-dependency-ranges.md
		'package-json/restrict-dependency-ranges': 'off',

		// Disallows unnecessary properties in private packages (autofixable)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/restrict-private-properties.md
		'package-json/restrict-private-properties': 'off',

		// Disallows specified top-level properties in package.json.
		// https://eslint-plugin-package-json.dev/rules/restrict-top-level-properties
		// Note: There is no shared policy for banning arbitrary package.json fields.
		'package-json/restrict-top-level-properties': ['off', {
			ban: [],
		}],

		// Enforce that names for `scripts` are in kebab case (optionally separated by colons)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/scripts-name-casing.md
		'package-json/scripts-name-casing': 'error',

		// Dependencies, scripts, and configuration values must be declared in alphabetical order (autofixable)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/sort-collections.md
		// Note: Configured in more detail in `jsonc/sort-keys` above
		'package-json/sort-collections': 'off',

		// Requires that all peer dependencies are also declared as dev dependencies
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/specify-peers-locally.md
		'package-json/specify-peers-locally': 'error',

		// Checks a dependency isn't specified more than once (i.e. in `dependencies` and `devDependencies`)
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/unique-dependencies.md
		'package-json/unique-dependencies': 'error',

		// Enforce that the author field is a valid npm author specification
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-author.md
		'package-json/valid-author': 'error',

		// Enforce that the bin property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-bin.md
		'package-json/valid-bin': 'error',

		// Enforce that the `browser` property is valid.
		// https://eslint-plugin-package-json.dev/rules/valid-properties/valid-browser
		'package-json/valid-browser': 'error',

		// Enforce that the `bugs` property is valid.
		// https://eslint-plugin-package-json.dev/rules/valid-properties/valid-bugs
		'package-json/valid-bugs': 'error',

		// Enforce that the `bundleDependencies` (also: `bundledDependencies`) property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-bundleDependencies.md
		'package-json/valid-bundleDependencies': 'error',

		// Enforce that the `config` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-config.md
		'package-json/valid-config': 'error',

		// Enforce that the `contributors` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-contributors.md
		'package-json/valid-contributors': 'error',

		// Enforce that the `cpu` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-cpu.md
		'package-json/valid-cpu': 'error',

		// Enforce that the `dependencies` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-dependencies.md
		'package-json/valid-dependencies': 'error',

		// Enforce that the `description` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-description.md
		'package-json/valid-description': 'error',

		// Enforce that the `devDependencies` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-devDependencies.md
		'package-json/valid-devDependencies': 'error',

		// Enforce that the `devEngines` property is valid.
		// https://eslint-plugin-package-json.dev/rules/valid-properties/valid-devEngines
		'package-json/valid-devEngines': 'error',

		// Enforce that the `directories` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-directories.md
		'package-json/valid-directories': 'error',

		// Enforce that the `engines` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-engines.md
		'package-json/valid-engines': 'error',

		// Enforce that the `exports` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-exports.md
		'package-json/valid-exports': 'error',

		// Enforce that the `files` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-files.md
		'package-json/valid-files': 'error',

		// Enforce that the `funding` property is valid.
		// https://eslint-plugin-package-json.dev/rules/valid-properties/valid-funding
		'package-json/valid-funding': 'error',

		// Enforce that the `gypfile` property is valid.
		// https://eslint-plugin-package-json.dev/rules/valid-properties/valid-gypfile
		'package-json/valid-gypfile': 'error',

		// Enforce that the `homepage` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-homepage.md
		'package-json/valid-homepage': 'error',

		// Enforce that the `keywords` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-keywords.md
		'package-json/valid-keywords': 'error',

		// Enforce that the `libc` property is valid.
		// https://eslint-plugin-package-json.dev/rules/valid-properties/valid-libc
		'package-json/valid-libc': 'error',

		// Enforce that the `license` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-license.md
		'package-json/valid-license': 'error',

		// Enforce that the `main` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-main.md
		'package-json/valid-main': 'error',

		// Enforce that the `man` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-man.md
		'package-json/valid-man': 'error',

		// Enforce that the `module` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-module.md
		'package-json/valid-module': 'error',

		// Enforce that package names are valid npm package names
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-name.md
		'package-json/valid-name': 'error',

		// Enforce that the `optionalDependencies` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-optionalDependencies.md
		'package-json/valid-optionalDependencies': 'error',

		// Enforce that the `os` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-os.md
		'package-json/valid-os': 'error',

		// Enforce that the `packageManager` property is valid.
		// https://eslint-plugin-package-json.dev/rules/valid-properties/valid-packageManager
		'package-json/valid-packageManager': 'error',

		// Enforce that the `peerDependencies` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-peerDependencies.md
		'package-json/valid-peerDependencies': 'error',

		// Enforce that the `peerDependenciesMeta` property is valid.
		// https://eslint-plugin-package-json.dev/rules/valid-properties/valid-peerDependenciesMeta
		'package-json/valid-peerDependenciesMeta': 'error',

		// Enforce that the `private` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-private.md
		'package-json/valid-private': 'error',

		// Enforce that the `publishConfig` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-publishConfig.md
		'package-json/valid-publishConfig': 'error',

		// Enforce that the `repository` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-repository.md
		'package-json/valid-repository': 'error',

		// Enforce that if repository directory is specified, it matches the path to the `package.json` file
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-repository-directory.md
		'package-json/valid-repository-directory': 'error',

		// Enforce that the `scripts` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-scripts.md
		'package-json/valid-scripts': 'error',

		// Enforce that the `sideEffects` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-sideEffects.md
		'package-json/valid-sideEffects': 'error',

		// Enforce that the `type` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-type.md
		'package-json/valid-type': 'error',

		// Enforce that package versions are valid semver specifiers
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-version.md
		'package-json/valid-version': 'error',

		// Enforce that the `workspaces` property is valid
		// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/main/docs/rules/valid-workspaces.md
		'package-json/valid-workspaces': 'error',

		// Enforces that any dependencies declared in `peerDependenciesMeta` are also defined in the package's `peerDependencies`.
		// https://eslint-plugin-package-json.dev/rules/valid-peerDependenciesMeta-relationship
		'package-json/valid-peerDependenciesMeta-relationship': 'error',
	},
});
