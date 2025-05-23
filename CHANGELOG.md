

## [38.1.1](https://github.com/MorevM/eslint-config/compare/v38.1.0...v38.1.1) (2025-05-23)

### Bug fixes

* **javascript:** Enforce a linebreak after `=`  character in case of multiline expression ([129cab8](https://github.com/MorevM/eslint-config/commit/129cab871d9bc048f543d787fdb2550208476550))
* **markdownlint:** Extend allowed elements list with `img`, `div` and `span` ([cbd0f73](https://github.com/MorevM/eslint-config/commit/cbd0f73a24b1d00493c899e63e61aedf98ac0bad))

### Chores

* Replace local `no-autofix` with shared library ([c28d146](https://github.com/MorevM/eslint-config/commit/c28d1466284f482a5f037dd49909e6ea3d585574))


## [38.1.0](https://github.com/MorevM/eslint-config/compare/v38.0.0...v38.1.0) (2025-05-18)


### Features

* **javascript:** Add `unicorn/consistent-assert` rule ([844ac7f](https://github.com/MorevM/eslint-config/commit/844ac7fe46d0079e55c08db3ea3ef60c95aa0b54))
* **javascript:** Add `unicorn/consistent-date-clone` rule ([c479e87](https://github.com/MorevM/eslint-config/commit/c479e879dc65cffbc81815facf9b4cccd6a3b2b9))
* **javascript:** Add `unicorn/no-accessor-recursion` rule ([b4279cf](https://github.com/MorevM/eslint-config/commit/b4279cfb2028cccebef1b2fa81dfc4e7119cdd0f))
* **javascript:** Add `unicorn/no-named-default` rule ([c61ac5d](https://github.com/MorevM/eslint-config/commit/c61ac5d6bd0578cebd3288a62c909d0bc2adba0e))
* **javascript:** Add `unicorn/no-unnecessary-array-flat-depth` rule ([b4228ca](https://github.com/MorevM/eslint-config/commit/b4228caba95201e327fcfffa1d98c9a95fb52a2b))
* **javascript:** Add `unicorn/no-unnecessary-array-splice-count` rule ([3f6a529](https://github.com/MorevM/eslint-config/commit/3f6a5293ffc2114dcbe0c64761114cad11dbdadb))
* **javascript:** Add `unicorn/prefer-import-meta-properties` rule ([fc87326](https://github.com/MorevM/eslint-config/commit/fc873261fdd627da4970b1294048b637952996d4))

### Refactoring

* Replace `eslint-plugin-no-autofix` with a custom realization ([601c520](https://github.com/MorevM/eslint-config/commit/601c520f8bc9205c28a1ad5fcb645ae69878a5f4))
* **javascript:** Replace deprecated `unicorn/no-array-push-push` with `unicorn/prefer-single-call` ([3e54c7e](https://github.com/MorevM/eslint-config/commit/3e54c7ef554e0ce5360c86ad3dc6971a9a479d4e))
* **javascript:** Replace deprecated `unicorn/no-instanceof-array` with `unicorn/no-instanceof-builtins` ([f56cf54](https://github.com/MorevM/eslint-config/commit/f56cf547f66359b63e596b1af0bdb6c4ae7723d7))
* **javascript:** Replace deprecated `unicorn/no-length-as-slice-end` with `unicorn/no-unnecessary-slice-end` ([69b7f94](https://github.com/MorevM/eslint-config/commit/69b7f9497212ef17c0ba6f71513ad762e88993f3))

### Chores

* Bump `eslint-plugin-unicorn` from 56.0.1 to 59.0.1 ([ab0d88d](https://github.com/MorevM/eslint-config/commit/ab0d88d1a79d8c7db28f900d966d28b40fc009d6))

## [38.0.0](https://github.com/MorevM/eslint-config/compare/v37.0.0...v38.0.0) (2025-05-18)


### ⚠ BREAKING CHANGES

* Since many modules are moving towards to ESM-only format, the minimum Node version is set to 22 to be able to `require`` these modules in `eslint-plugin-no-autofix`.
* Minimal supported ESLint version is 9.27.0
* **package-json:** With new rule `package-json/require-engines` `package.json` files without `engines` property will throw an error
* **html:** New rule `@html-eslint/no-duplicate-class` will report on duplicated class names in HTML markup
* **cypress:** With new rule `cypress/no-chained-get` cypress configuration become more strict and may produce new errors
* **vue2:** Vue2 components that have comments in the template root now will produce errors
* **vue:** With new rule `vue/no-import-compiler-macros` vue files may produce some new errors
* **typescript:** With new rule `@typescript-eslint/no-unnecessary-type-conversion` TypeScript-related configurations become more strict.
* **javascript:** With new rule `no-unassigned-vars` JS-related configurations become more strict

### Features

* **cypress:** Add `cypress/no-chained-get` rule ([75f9d9c](https://github.com/MorevM/eslint-config/commit/75f9d9c99d90c27838c195a2ee450e3a8e6f3100))
* **cypress:** Add `cypress/no-xpath` rule ([9f3b286](https://github.com/MorevM/eslint-config/commit/9f3b286a60cb6f1b5f4bea2039e06651f05b6959))
* **html:** Add `@html-eslint/no-duplicate-class` rule ([0e13d8c](https://github.com/MorevM/eslint-config/commit/0e13d8c879df8a30a5b379aa915035d11d1d83ec))
* **html:** Enable `@html-eslint/attrs-newline` again as I fixed the behavior :) ([1f20a01](https://github.com/MorevM/eslint-config/commit/1f20a012455b12450b9293594ce1f42818acaff9))
* **html:** Take account of `@html-eslint/use-baseline` rule ([8b27c10](https://github.com/MorevM/eslint-config/commit/8b27c1012901405ccab7c3d14819a30647ca4a4b))
* **javascript:** Add `no-unassigned-vars` rule ([6fc479d](https://github.com/MorevM/eslint-config/commit/6fc479d6dc95fe417dae2ac6200f22f2ed2287ec))
* **javascript:** Add fallback alphabetical sorting option in`perfectionist/sort-imports` rule ([0e23e76](https://github.com/MorevM/eslint-config/commit/0e23e765fad49216793fc8f55fcaa5a612650570))
* **node:** Enable `n/no-extraneous-import` rule again ([f9acbdc](https://github.com/MorevM/eslint-config/commit/f9acbdc9a737fb05707d752599ed3eee7023007b))
* **package-json:** Add `package-json/require-engines` rule ([79c66c5](https://github.com/MorevM/eslint-config/commit/79c66c56c4105ba71d53f844ee4dfbeb4879437e))
* **package-json:** Take account of `package-json/require-description` rule ([d72ecf2](https://github.com/MorevM/eslint-config/commit/d72ecf2102eab1d4f5bebb7d86fc694d131678a2))
* **package-json:** Take account of `package-json/require-types` rule ([65f3097](https://github.com/MorevM/eslint-config/commit/65f30971942f80c9e22dc819c9e358cde17954d2))
* **package-json:** Take account of `package-json/restrict-dependency-ranges` rule ([0758fac](https://github.com/MorevM/eslint-config/commit/0758fac8488eb3b5d778772d991ac8d2dff0d850))
* **typescript:** Add `@typescript-eslint/no-unnecessary-type-conversion` rule ([f9791ee](https://github.com/MorevM/eslint-config/commit/f9791eee0059a297efc46b5cf2fdfc8b74479935))
* **vitest:** Add `vitest/prefer-describe-function-title` rule ([edda58d](https://github.com/MorevM/eslint-config/commit/edda58d3e1d77376eee4dc8c9e440c8d2a8c5ade))
* **vue2:** Disallow comments in Vue2 template root for better migration to v3 ([7d67cb5](https://github.com/MorevM/eslint-config/commit/7d67cb57e6c95b8b267a1e9c0f589c42679667a7))
* **vue:** Add `vue/no-implicit-coercion` extension rule ([3e92adb](https://github.com/MorevM/eslint-config/commit/3e92adb672bb608b6b741ad7f2c41885f9db1fc4))
* **vue:** Add `vue/no-import-compiler-macros` rule ([12239ed](https://github.com/MorevM/eslint-config/commit/12239edf70b93f715ce396ea15cf7d565f7d149d))
* **vue:** Set `compilerOptions` field to `vue/order-in-components` rule ([6d22060](https://github.com/MorevM/eslint-config/commit/6d220603a7ca25b7ab29b31f7deac7d1b05b9549))
* **vue:** Set `slots` and `expose` fields to `vue/order-in-components` rule ([32a8cbf](https://github.com/MorevM/eslint-config/commit/32a8cbfdfbb8eb7041eef75a3328e79c40db65cd))
* **vue:** Take account of `vue/define-props-destructuring` rule ([867dd2f](https://github.com/MorevM/eslint-config/commit/867dd2f74a7911c31e0b3d8dad7e0f85886e61e8))
* **yaml:** Add `alignMultilineFlowScalars` option to `yml/indent` rule ([da59e0c](https://github.com/MorevM/eslint-config/commit/da59e0cbab478892bd3f2c9b9f8563e0f905d1a1))


### Refactoring

* **javascript:** Migrate to new syntax in `perfectionist/sort-imports` customGroups ([a5fede5](https://github.com/MorevM/eslint-config/commit/a5fede5587080685d4cee04f34056ce89e11d0b8))


### Bug fixes

* **vitest:** Allow arguments in `vitest/valid-title` ([a30e578](https://github.com/MorevM/eslint-config/commit/a30e578500c62ca2df9b7ecf12130063e19d7ff0))


### Tests

* Let vue2-only rules marked as deprecated be in the list for a while ([c0eaf72](https://github.com/MorevM/eslint-config/commit/c0eaf721cf8aa2cc40a61ce31c9aad9ee4634255))


## [37.0.0](https://github.com/MorevM/eslint-config/compare/v36.3.2...v37.0.0) (2025-03-19)


### ⚠ BREAKING CHANGES

* **typescript:** With new rule `@typescript-eslint/no-misused-spread` Typescript configuration becomes more strict and may produce new errors.
* **html:** With new rule `@html-eslint/require-input-label` HTML-related configurations become more strict and may produce new errors.
* **html:** With new rule `@html-eslint/prefer-https` HTML-related configurations become more strict and may produce new errors.
* **html:** With new rule `@html-eslint/require-form-method` HTML-related configurations become more strict and may produce new errors.
* **html:** With new rule `@html-eslint/no-nested-interactive` HTML-related configurations become more strict and may produce new errors.
* **html:** With new rule `@html-eslint/no-invalid-role` HTML-related configurations become more strict and may produce new errors.
* **html:** With new rule `@html-eslint/no-heading-inside-button` HTML-related configurations become more strict and may produce new errors.

### Features

* **html:** Add `@html-eslint/no-heading-inside-button` rule ([d4829c2](https://github.com/MorevM/eslint-config/commit/d4829c27fa8a70bb69f3c317974be9845c56efef))
* **html:** Add `@html-eslint/no-invalid-role` rule ([4dc6639](https://github.com/MorevM/eslint-config/commit/4dc6639d9be4d769ead18455640be708b5e4dc62))
* **html:** Add `@html-eslint/no-nested-interactive` rule ([dd61660](https://github.com/MorevM/eslint-config/commit/dd6166043f24c7a5733134a4857bbf24ef43bd72))
* **html:** Add `@html-eslint/prefer-https` rule ([e52077e](https://github.com/MorevM/eslint-config/commit/e52077e0e8863d5696e78a8055562fb8ffe9fd4c))
* **html:** Add `@html-eslint/require-form-method` rule ([87e7cd2](https://github.com/MorevM/eslint-config/commit/87e7cd2ace3a827ff5d43c915ff57b85482d9c00))
* **html:** Add `@html-eslint/require-input-label` rule ([06a56df](https://github.com/MorevM/eslint-config/commit/06a56df789fbb7eaeacc250cac837c84239b74eb))
* **html:** Take account of `@html-eslint/max-element-depth` rule ([4a93e63](https://github.com/MorevM/eslint-config/commit/4a93e63c82352672b2ba72850279ef09d869d534))
* **html:** Take account of `@html-eslint/require-explicit-size` rule ([f3489bb](https://github.com/MorevM/eslint-config/commit/f3489bb4f1a18f3302ae8b876bf3a97a5b5e710c))
* **javascript:** Increase the number of banned abbreviations ([576b79d](https://github.com/MorevM/eslint-config/commit/576b79ddcc7d81b941d9dfc466496be2b6d3f112))
* **json:** Add `package-json/no-empty-fields` rule ([fca4a21](https://github.com/MorevM/eslint-config/commit/fca4a218d711744ee97600cad3848effa28a9eeb))
* **json:** Add some of `package-json/require-*` rules ([27ed71c](https://github.com/MorevM/eslint-config/commit/27ed71c82cd7414c8d60e1ad3a5a2a917e48a477))
* **json:** Take account of `package-json/no-redundant-files` rule ([c29c17a](https://github.com/MorevM/eslint-config/commit/c29c17a29558ca5f1622a01d04a5f63239cbd7f8))
* **typescript:** Add `@typescript-eslint/no-misused-spread` rule ([cc0acc4](https://github.com/MorevM/eslint-config/commit/cc0acc41fdb0296404a2f6ec7f444356221749fd))
* **vitest:** Take account of `vitest/prefer-strict-boolean-matchers` rule ([b4705f0](https://github.com/MorevM/eslint-config/commit/b4705f01a086eee372c74ce979787d1341c70b7a))
* **vitest:** Take account of `vitest/require-mock-type-parameters` rule ([c3da3b3](https://github.com/MorevM/eslint-config/commit/c3da3b3f11641e4e423e53a73bb302096d819c5b))

### Bug fixes

* **html:** Temporarily disable `@html-eslint/attrs-newline` rule due to its overly strict implementation ([0ad583d](https://github.com/MorevM/eslint-config/commit/0ad583d54f4f13ae94bd7137c64d0c4e46288911))
* **json:** Replace deprecated `package-json/valid-package-def` with `package-json/valid-package-definition` ([a1a3923](https://github.com/MorevM/eslint-config/commit/a1a39231e92d7b2fed14a20431ac442af90de4b5))

## [36.3.2](https://github.com/MorevM/eslint-config/compare/v36.3.1...v36.3.2) (2024-12-28)

No notable changes in this release, just dependencies update.

## [36.3.1](https://github.com/MorevM/eslint-config/compare/v36.3.0...v36.3.1) (2024-12-16)


### Bug fixes

* **javascript:** Disable `no-useless-assignment` rule ([1d08c77](https://github.com/MorevM/eslint-config/commit/1d08c77fcf871e84dd32394c1ad03883aa583ce0))
* **typescript:** Correct `extraFileExtensions` paths within TS config ([7f03e51](https://github.com/MorevM/eslint-config/commit/7f03e51b4e89052cd41c06a13e54f1f53cf3c551))


## [36.3.0](https://github.com/MorevM/eslint-config/compare/v36.2.0...v36.3.0) (2024-12-14)


### Features

* **javascript:** Set up `no-secrets/no-secrets` rule properly ([1399298](https://github.com/MorevM/eslint-config/commit/1399298a786323c13960a3f740ebab6530eb281e))


## [36.2.0](https://github.com/MorevM/eslint-config/compare/v36.1.1...v36.2.0) (2024-11-30)


### Features

* **json:** Sort `resolutions` and `overrides` alphabetically as well as dependencies ([c8e3f12](https://github.com/MorevM/eslint-config/commit/c8e3f12e33a015284f828ec9f185d77b1ba91c3e))
* **vue:** Add `vue/slot-name-casing` rule ([6a7dab4](https://github.com/MorevM/eslint-config/commit/6a7dab494135ddc599591c6471a5fd250eb24109))
* **vue:** Take account of `vue/restricted-component-names` rule ([1c609c1](https://github.com/MorevM/eslint-config/commit/1c609c156b6b56837105b7475a375e05658f533b))


### Bug fixes

* **javascript:** Turn off `unicorn/no-anonymous-default-export` rule ([43656dc](https://github.com/MorevM/eslint-config/commit/43656dce973d9036fd69a6cc51cbfd8da59f8068))


## [36.1.1](https://github.com/MorevM/eslint-config/compare/v36.1.0...v36.1.1) (2024-11-28)


### Bug fixes

* **javascript:** Remove misconfigured `considerComments` option of `import-x/newline-after-import` rule ([95843a0](https://github.com/MorevM/eslint-config/commit/95843a0a3194c129fea6984512bfa12f30d5350f))

## [36.1.0](https://github.com/MorevM/eslint-config/compare/v36.0.0...v36.1.0) (2024-11-26)

### Refactoring

* Fix `GLOB_ANY_JS` to include jsx/tsx files ([a3e7431](https://github.com/MorevM/eslint-config/commit/a3e7431ec549e7c5944b553103f9415b266f9f55))

### Bug fixes

* **vitest:** Do not require `.js` files to be included in `tsconfig.json` using Vitest `js` files ([2a2a1f1](https://github.com/MorevM/eslint-config/commit/2a2a1f13223443c344d4b821c82dd8c2a82ee906))


## [36.0.0](https://github.com/MorevM/eslint-config/compare/v35.2.3...v36.0.0) (2024-11-22)


### ⚠ BREAKING CHANGES

* **json:** With new rules that comes with `eslint-plugin-package-json` configuration for `package.json` become more strict. \
Should actually be backwards compatible, as the things being validated are mostly things that will prevent normal workflow if used incorrectly. \
But just in case, check your `package.json` after the upgrade.

### Features

* **json:** Add new keys ordering rules: `$schema`, `displayName`, `sideEffects` ([5422839](https://github.com/MorevM/eslint-config/commit/5422839ee0803a404733a29c00af949e2de2467f))
* **json:** Consistent order of `author`, `contributors` and `maintainers` keys of `package.json` ([cc368c5](https://github.com/MorevM/eslint-config/commit/cc368c5228a690ce6aa875711481d0f8ecab05d7))
* **json:** Consistent order of `exports` and `config` keys of `package.json` ([4b2bb49](https://github.com/MorevM/eslint-config/commit/4b2bb4939be7e58d7f5a3e2c3675173ea925dfe5))
* **json:** Consistent order of `repository`, `funding` and `license` keys of `package.json` ([4bfed7a](https://github.com/MorevM/eslint-config/commit/4bfed7a7ecb3547205bf54053409cfa34f499a8b))
* **json:** Setup `eslint-plugin-package-json` ([375810f](https://github.com/MorevM/eslint-config/commit/375810f9fea21d42cbbe3055d5e1bd93c4b2c3f0))


## [35.2.3](https://github.com/MorevM/eslint-config/compare/v35.2.2...v35.2.3) (2024-11-20)


No notable changes, attempt to fix CI.

## [35.2.2](https://github.com/MorevM/eslint-config/compare/v35.2.1...v35.2.2) (2024-11-20)

No notable changes, just CI fix.

### CI improvements

* Rename publish command ([4ac792a](https://github.com/MorevM/eslint-config/commit/4ac792a7b72b7f7afeb99811881ec8665b014c6a))

## [35.2.1](https://github.com/MorevM/eslint-config/compare/v35.2.0...v35.2.1) (2024-11-20)


### Documentation

* Use natural sorting order in docs ([e3fba0b](https://github.com/MorevM/eslint-config/commit/e3fba0b291711547ae930c69b685bc4baf348a31))


### Bug fixes

* **cli:** Use natural import sorting order in generated `eslint.config.js` ([4653dcd](https://github.com/MorevM/eslint-config/commit/4653dcd4bfce9c3439066d25d6ae6582929ed88e))
* **json:** Add `packageManager` to the list of sorted `package.json` keys ([29b90de](https://github.com/MorevM/eslint-config/commit/29b90de0d654f6b739c9fb9b79ff76a3217e3ca4))
* **yaml:** Add `.yarnrc.yml` to the exceptions of `yml/file-extension` rule ([fb826c4](https://github.com/MorevM/eslint-config/commit/fb826c496063522e7318b51087573bb3b83eda6a))


## [35.2.0](https://github.com/MorevM/eslint-config/compare/v35.1.0...v35.2.0) (2024-11-17)


### Features

* Apply universal rules individually to each configuration ([e887b1a](https://github.com/MorevM/eslint-config/commit/e887b1a74bab47e096d2565014ac88cca37a173d))
* **javascript:** Add `eslint-plugin-perfectionist`, replace `import-x/order` rule with it ([dbcbbee](https://github.com/MorevM/eslint-config/commit/dbcbbee7d18c41bc72d407afdb1d986b23abd5c2))
* **json:** Enforce trailing commas in JSON5 and JSONC files ([0bd7c7f](https://github.com/MorevM/eslint-config/commit/0bd7c7fcdedee7968ee8884d508dabca0d287dbc))


### Bug fixes

* **base:** Disable `unicorn/better-regex` if favor of using only `eslint-plugin-regexp` for such purposes ([e35cfc5](https://github.com/MorevM/eslint-config/commit/e35cfc5c04bdb42f126ed88b0b340a50537b213c))
* **cli:** Append trailing commas in generated VSCode settings ([a0cfc82](https://github.com/MorevM/eslint-config/commit/a0cfc82a07e4f7f584b90f06fc6c8cce0105f3fe))


### Tests

* Add a repository typo-safety test ([3171f50](https://github.com/MorevM/eslint-config/commit/3171f503a87b1652f3065d9e406e4e10afaa8f0c))


## [35.1.0](https://github.com/MorevM/eslint-config/compare/v35.0.3...v35.1.0) (2024-11-16)


### Features

* **vitest:** Allow to disable declaring testing functions as ESLint globals ([bc2301b](https://github.com/MorevM/eslint-config/commit/bc2301bb3b5bb8e212c8a9aa88fa85b43dfdde1d))


### Bug fixes

* **cli:** Validate `json5` files in VSCode, update corresponding CLI ([57c827f](https://github.com/MorevM/eslint-config/commit/57c827f5a1bd96f03b2a05261c16d71fe532c2c6))
* **vitest:** Do not use `parserTypescript` if there is no `tsconfig.json` ([b9d1da3](https://github.com/MorevM/eslint-config/commit/b9d1da3e6117776c7454a5e5949d15b1939808d0))


## [35.0.3](https://github.com/MorevM/eslint-config/compare/v35.0.2...v35.0.3) (2024-11-16)


### Bug fixes

* **node:** Do not crash if `tsconfig.json` is missing ([98d3ae9](https://github.com/MorevM/eslint-config/commit/98d3ae99aa5ae4261d2c0a1e396fb2dcc94220e5))

## [35.0.2](https://github.com/MorevM/eslint-config/compare/v35.0.1...v35.0.2) (2024-11-15)


### Bug fixes

* **javascript, vue:** Use proper `@stylistic/max-len` interface for proper extension ([d15c5a0](https://github.com/MorevM/eslint-config/commit/d15c5a0d95f42500fd248b7cfe14191313b5216b))
* **typescript:** Setup `@stylistic/comma-dangle` rule to work with TS entities ([4271cb3](https://github.com/MorevM/eslint-config/commit/4271cb3aba2b49704be31e1c276917d50c9d8e87))
* **typescript:** Turn off `@typescript-eslint/no-unsafe-function-type` rule ([05760a8](https://github.com/MorevM/eslint-config/commit/05760a8364889c7f1c67787e2535e2af6744122a))
* **vue:** Pass `sourceType: module` to the parser options as well ([ea39461](https://github.com/MorevM/eslint-config/commit/ea394611cb836ea6c7d8ed6082e32cd36a016417))



## [35.0.1](https://github.com/MorevM/eslint-config/compare/v35.0.0...v35.0.1)

### Fixes

* fix: Make `defineIgnores` argument optional ([35dbbfc](https://github.com/MorevM/eslint-config/commit/35dbbfc))
* Minor CLI improvements


## 35.0.0 (2024-11-13)

The package has been completely rewritten to fit new flat ESLint config format. \
Check out README.md for further setup instructions.

### ⚠ BREAKING CHANGES

* The config only works with Node 20+ and ESLint >=9.14.0
* Added some new rules, changed some stylistic rules. Run the fixer in `--fix-dry-run` mode first.


## [34.0.0](https://github.com/MorevM/eslint-config/compare/v33.0.0...v34.0.0) (2024-08-05)


### ⚠ BREAKING CHANGES

* **jsdoc:** With the new rule `jsdoc/check-template-names` some of the existing JSDoc comments using `@template` declarations may produce an error.
* As a part of the migration to ESLint 9 and making things more explicit, we decided to drop the special syntax from the configurations.
  Some rules that previously had a severity of “warning” now have a severity of “error”. \
  Although most of them were fixed automatically, something unexpected can happen. \
  Autofix of such rules is still working.

### Features

* **base:** Add `unicorn/no-length-as-slice-end` rule ([e3bb7a2](https://github.com/MorevM/eslint-config/commit/e3bb7a250fd0bfdcf7b86af47fac732aeea6d4b4))
* **base:** Add `unicorn/no-negation-in-equality-check` rule ([7d4081f](https://github.com/MorevM/eslint-config/commit/7d4081fc5fee645ddd87d0ee21969fe3f31b1d0c))
* **base:** Take account of ported stylistic `line-comment-position` and `multiline-comment-style` rules ([dae9626](https://github.com/MorevM/eslint-config/commit/dae962699a4171427104bd3d18f4c4fc3d9ce89c))
* **html:** Add `@html-eslint/attrs-newline` rule ([ac3de36](https://github.com/MorevM/eslint-config/commit/ac3de36996c5710f6e696a1b46ab03452770f16c))
* **jest:** Add `jest/prefer-jest-mocked` rule ([ec187be](https://github.com/MorevM/eslint-config/commit/ec187bec692a7ebbae056b846bac0366e538bbb0))
* **jsdoc:** Add `jsdoc/check-template-names` rule ([acfe4ec](https://github.com/MorevM/eslint-config/commit/acfe4ec2402b59cca881df29bbaab4fe5f8a5527))
* **jsdoc:** Take account of `jsdoc/convert-to-jsdoc-comments` rule ([9a841f6](https://github.com/MorevM/eslint-config/commit/9a841f6ef1348dee0f3d5d556a0fbdaaea233e20))
* **jsdoc:** Take account of `jsdoc/require-template` rule ([a3e9455](https://github.com/MorevM/eslint-config/commit/a3e9455fb36dc4b30ef8d74fbe81aabc066b939a))


### CI improvements

* Extract latest changelog entry as GH release description ([08b2caa](https://github.com/MorevM/eslint-config/commit/08b2caaf646eb96e18e1efb9cc7938c4ffdef14a))


### Refactoring

* Completely remove special syntax from the repo ([8259681](https://github.com/MorevM/eslint-config/commit/8259681e361b14fca1e3571c77aff7cd9e6b46a4))
* Remove special syntax for a rules that should not be autofixed ([50fb12b](https://github.com/MorevM/eslint-config/commit/50fb12bdae79e285cbd1596e8adec60d8de5bcf3))
* Remove special syntax for a rules turned off ([b4af41d](https://github.com/MorevM/eslint-config/commit/b4af41db702142a391f9444f964958da44d21bfc))
* Remove special syntax for a rules with `error` severity ([f2d356b](https://github.com/MorevM/eslint-config/commit/f2d356b33f1844b29cac1ec8bb93eddaaa56afb6))
* Remove special syntax for a rules with `warn` severity ([15d6025](https://github.com/MorevM/eslint-config/commit/15d6025247a679115099fa7fe4703a8a172c48a0))


### Tests

* Remove tests for removed autofixable mechanic ([c0fa73f](https://github.com/MorevM/eslint-config/commit/c0fa73f13a106a0f6bf75e04f47b4ef230f4ad9c))


### Bug fixes

* **html:** Fit new configuration object for `@html-eslint/require-closing-tags` rule ([b9b407c](https://github.com/MorevM/eslint-config/commit/b9b407cda74fa9b59391fb22314862d65ba18687))
* **vitest:** Disable autofix for `vitest/no-focused-tests` rule ([5cb450b](https://github.com/MorevM/eslint-config/commit/5cb450b082caf5a6cf85f07d350c74709cdc725c))
* **yaml:** Disable the base `no-irregular-whitespace` rule for `yaml` files ([b50dfc3](https://github.com/MorevM/eslint-config/commit/b50dfc3b9a15ff0731978bcc1d32a454cabd63e6))


## [33.0.0](https://github.com/MorevM/eslint-config/compare/v32.0.0...v33.0.0) (2024-05-15)


### ⚠ BREAKING CHANGES

* **base:** With new rule `unicorn/no-invalid-fetch-options` preset `common` and `base` configuration become more strict.
* **astro:** With new rule `astro/no-exports-from-components` configuration `astro` and `common` preset become more strict.

### Features

* **astro:** Add `astro/no-exports-from-components` rule ([5c968b6](https://github.com/MorevM/eslint-config/commit/5c968b663a3602152125aa58f0537c7c49517b28))
* **base:** Add `unicorn/consistent-empty-array-spread` rule ([c57d901](https://github.com/MorevM/eslint-config/commit/c57d90166c68b3c004f04a203c85e0b138eb679e))
* **base:** Add `unicorn/no-invalid-fetch-options` rule ([ac23cf3](https://github.com/MorevM/eslint-config/commit/ac23cf38f27d117b6a918451447466f6e3964972))
* **base:** Add `unicorn/no-magic-array-flat-depth` rule ([3d84d08](https://github.com/MorevM/eslint-config/commit/3d84d08442c305a65d06abad67c629105a8418c4))
* **base:** Enable `unicorn/no-typeof-undefined` rule ([5c6ce25](https://github.com/MorevM/eslint-config/commit/5c6ce257ed0c11229939aa0de0fc333fc2c0662a))
* **base:** Take account of `unicorn/prefer-string-raw` rule ([4ab0d3c](https://github.com/MorevM/eslint-config/commit/4ab0d3cad4f0ec209cc639308fd005093d742eda))
* **base:** Take account of `unicorn/prefer-structured-clone` rule ([7594017](https://github.com/MorevM/eslint-config/commit/7594017100e24616cf55512a47241b0d67888768))

## [32.0.0](https://github.com/MorevM/eslint-config/compare/v31.1.0...v32.0.0) (2024-04-27)


### ⚠ BREAKING CHANGES

* **cypress:** With new rule `cypress/no-async-before` preset for `cypress` becomes more strict.
* Since the new `astro` configuration is included in the `common` preset, it becomes more strict.
* Since the new `jsx-a11y` configuration is included in the `common` preset, it becomes more strict.

### Features

* Add `astro` configuration and preset ([8877b5f](https://github.com/MorevM/eslint-config/commit/8877b5f35f38d0416a6598e9e795c4eb3b2edf05))
* Add `jsx-a11y` configuration and preset ([c938d7a](https://github.com/MorevM/eslint-config/commit/c938d7a3985b0b73f159835b95d891abc10e0fc3))
* **cypress:** Add `cypress/no-async-before` rule ([67b44b5](https://github.com/MorevM/eslint-config/commit/67b44b511d8934ee0c81d2474fb03808d4ac8ea0))


## [31.1.0](https://github.com/MorevM/eslint-config/compare/v31.0.2...v31.1.0) (2024-04-13)


### Features

* **base:** Add `regexp/unicode-property` rule ([a9a28d9](https://github.com/MorevM/eslint-config/commit/a9a28d9140f6f3e1c27e507eaf35fde078996dda))
* **base:** Add `unicorn/no-anonymous-default-export` rule ([62eb987](https://github.com/MorevM/eslint-config/commit/62eb9874d352dbe5dae6d3c1e7e48211b7369494))
* **base:** Add `unicorn/no-await-in-promise-methods` rule ([0648171](https://github.com/MorevM/eslint-config/commit/064817163f8881c3719283dac440e480fd4c55bc))
* **base:** Take account of `unicorn/no-single-promise-in-promise-methods` rule ([c1bbfe7](https://github.com/MorevM/eslint-config/commit/c1bbfe757a75a9e755a85d573ab02a6bc2b41d94))
* **jest:** Take account of `jest/prefer-importing-jest-globals` rule ([9e956ff](https://github.com/MorevM/eslint-config/commit/9e956ff887da535eb89893a247667c5ebaa4d4e6))


## [31.0.2](https://github.com/MorevM/eslint-config/compare/v31.0.1...v31.0.2) (2024-03-30)


### Bug fixes

* **base:** Proper resolving of `pathGroups` within `import/order` rule ([13b255d](https://github.com/MorevM/eslint-config/commit/13b255d3ae687ef7863b0c3fdee28c1b3b84ec75)), closes [/github.com/import-js/eslint-plugin-import/issues/2892#issuecomment-1742987549](https://github.com/MorevM//github.com/import-js/eslint-plugin-import/issues/2892/issues/issuecomment-1742987549)

## [31.0.1](https://github.com/MorevM/eslint-config/compare/v31.0.0...v31.0.1) (2024-03-30)


### Bug fixes

* Correct name of the disabled rule within testing presets ([026cd0b](https://github.com/MorevM/eslint-config/commit/026cd0bc765bac1ba0cb3e191e3c7b9e87551297))


### Chores

* bump eslint-plugin-jsdoc from 48.2.1 to 48.2.2 ([#814](https://github.com/MorevM/eslint-config/issues/814)) ([b81b69e](https://github.com/MorevM/eslint-config/commit/b81b69e19a298c1649be58ce776e4a0b3952f371))
* bump eslint-plugin-regexp from 2.3.0 to 2.4.0 ([#815](https://github.com/MorevM/eslint-config/issues/815)) ([1f84e21](https://github.com/MorevM/eslint-config/commit/1f84e21d557d13f32a8cb98a60624584a4f62eb4))
* bump eslint-plugin-sonarjs from 0.24.0 to 0.25.0 ([#813](https://github.com/MorevM/eslint-config/issues/813)) ([0588d25](https://github.com/MorevM/eslint-config/commit/0588d25b8f57987db5e15468c87141018e6b4f7e))
* bump eslint-plugin-vitest from 0.3.26 to 0.4.0 ([#809](https://github.com/MorevM/eslint-config/issues/809)) ([4c0748a](https://github.com/MorevM/eslint-config/commit/4c0748ac873d43f32cc7660e17ad1885b96ab6ef))
* bump eslint-plugin-vue from 9.23.0 to 9.24.0 ([#812](https://github.com/MorevM/eslint-config/issues/812)) ([fa2aa75](https://github.com/MorevM/eslint-config/commit/fa2aa752d20a1ff9471490c201981880d1d838d1))

## [31.0.0](https://github.com/MorevM/eslint-config/compare/v30.0.0...v31.0.0) (2024-03-22)


### ⚠ BREAKING CHANGES

* As part of the intention to make the config more granular configurations `jest`, `cypress`, `browser` and `node` has been removed from the `common` preset.
All projects using it must reconfigure the configuration file.

### Features

* **vitest:** Add `vitest` configuration and preset ([7587586](https://github.com/MorevM/eslint-config/commit/7587586d9cf6a3d9181d8a8c0936a24ce4b9b059))


### Refactoring

* Remove `jest`, `cypress`, `browser` and `node` configs from `common` preset ([76904b7](https://github.com/MorevM/eslint-config/commit/76904b7a4e0b40ed4ac5c5792d824cdbdf98487a))


### Documentation

* Correct typescript and HTML files pattern ([dce8fe9](https://github.com/MorevM/eslint-config/commit/dce8fe948ef1cbbf0af11539fce680c737536e1f))


### Chores

* Bump `@html-eslint` packages from 0.23.1 to 0.24.0 ([9df0849](https://github.com/MorevM/eslint-config/commit/9df08492481ab334cd58e1f73ab693b7f456a3c0))
* Bump `eslint-plugin-jsonc` from 2.13.0 to 2.14.1 ([3892cf3](https://github.com/MorevM/eslint-config/commit/3892cf3afb386a523c5947fc70bf647414d4c58d))
* Bump `eslint-plugin-yml` from 1.12.2 to 1.13.2 ([ba0478b](https://github.com/MorevM/eslint-config/commit/ba0478bfd903bac040b000b012ca88cdb314f140))

## [30.0.0](https://github.com/MorevM/eslint-config/compare/v29.0.0...v30.0.0) (2024-03-16)


### ⚠ BREAKING CHANGES

* The configurations and presets with postfix `/quite` and `/strict` are no longer exists.

Practice has shown that there are almost no use cases, so now every configuration and preset has the only export mapping.

### Features

* More `overrides.files` entries for presets ([6baf030](https://github.com/MorevM/eslint-config/commit/6baf0307322468019590510b5f0393ef159b702e))

### Refactoring

* Get rid of `quite / strict` configurations and presets ([0979814](https://github.com/MorevM/eslint-config/commit/0979814fc277f00f9112faa1d9c02ab80ef99c27))

### Bug fixes

* **vue:** Allow digits and more special characters within i18n ([9a5fb8a](https://github.com/MorevM/eslint-config/commit/9a5fb8ac188050488b6ec64893c12fc3bb260766))
* **yaml:** Fix array spacings inside flow entry ([d140e09](https://github.com/MorevM/eslint-config/commit/d140e0989f38e4e22f05260f2c3ecfc95e1bce61))

## [29.0.0](https://github.com/MorevM/eslint-config/compare/v28.1.0...v29.0.0) (2024-02-18)


### ⚠ BREAKING CHANGES

* Minimal Node version now is 18.18.0

### Chores

* bump @stylistic/eslint-plugin-js from 1.6.1 to 1.6.2 ([#785](https://github.com/MorevM/eslint-config/issues/785)) ([9b2adf3](https://github.com/MorevM/eslint-config/commit/9b2adf39db73039ee95fb95b93bb142e792e28f8))
* bump @stylistic/eslint-plugin-ts from 1.6.1 to 1.6.2 ([#790](https://github.com/MorevM/eslint-config/issues/790)) ([6c75335](https://github.com/MorevM/eslint-config/commit/6c75335121a7934d6a2f128eb549697ba687a858))
* bump @typescript-eslint/eslint-plugin from 6.21.0 to 7.0.0 ([#783](https://github.com/MorevM/eslint-config/issues/783)) ([52c6866](https://github.com/MorevM/eslint-config/commit/52c68661ce1b2efb5130437a181303fdb78caf81))
* bump eslint-plugin-jest from 27.6.3 to 27.9.0 ([#787](https://github.com/MorevM/eslint-config/issues/787)) ([8e247b1](https://github.com/MorevM/eslint-config/commit/8e247b17007345ad8cc0e5d64cf21480800b7bba))
* bump eslint-plugin-jsdoc from 48.0.6 to 48.1.0 ([#784](https://github.com/MorevM/eslint-config/issues/784)) ([2b650c6](https://github.com/MorevM/eslint-config/commit/2b650c6512cd684565cc7ad55a8ceb939733db98))
* bump eslint-plugin-sonarjs from 0.23.0 to 0.24.0 ([#786](https://github.com/MorevM/eslint-config/issues/786)) ([67526b4](https://github.com/MorevM/eslint-config/commit/67526b4aaf64599a73de9b05912fd1b4bdf9c85f))
* Set minimal Node version to `18.18.0` to adjust with `[@typescript-eslint](https://github.com/typescript-eslint)` requirements ([6f1842d](https://github.com/MorevM/eslint-config/commit/6f1842df3f294913b1eaa7960a93eab3975e9dc5))


### Bug fixes

* **base, yaml:** Decrease severity for rules that handle irregular whitespaces ([90cfb42](https://github.com/MorevM/eslint-config/commit/90cfb429e75ce2a7dcb204ae79ca056331c42adc))
* **base:** Extend `import/order` path groups ([67b84e1](https://github.com/MorevM/eslint-config/commit/67b84e14fb7176d01310a87a946248169e0cfaee))
* **typescript:** Allow double leading underscore in variable names ([9a86a93](https://github.com/MorevM/eslint-config/commit/9a86a9331d18dc6d8d951f8a1e32fcc24707ad8b))

## [28.1.0](https://github.com/MorevM/eslint-config/compare/v28.0.0...v28.1.0) (2024-02-10)


### Features

* **typescript:** Add `@stylistic/ts/quote-props` rule ([903b385](https://github.com/MorevM/eslint-config/commit/903b38525c76fd28ccbe672f099239d1764880bd))
* **typescript:** Take account of `@typescript-eslint/prefer-find` rule ([b28a631](https://github.com/MorevM/eslint-config/commit/b28a63111306748d18fc13bdbd2716b2c0baf9ac))


### Chores

* Bump `[@typescript-eslint](https://github.com/typescript-eslint)` packages from 6.20.0 to 6.21.0 ([33cc9f1](https://github.com/MorevM/eslint-config/commit/33cc9f1b0b9900a195ae2fa1bfcdd9e169410548))
* Bump `@stylistic/eslint-plugin` from 1.5.4 to 1.6.1 ([2f77cff](https://github.com/MorevM/eslint-config/commit/2f77cff565333e1d223073c655b927094eedf495))
* bump eslint-plugin-jsdoc from 48.0.4 to 48.0.6 ([#779](https://github.com/MorevM/eslint-config/issues/779)) ([93f03ef](https://github.com/MorevM/eslint-config/commit/93f03efec494b55e380c93a307230ba17a997fdd))
* bump eslint-plugin-unicorn from 50.0.1 to 51.0.1 ([#782](https://github.com/MorevM/eslint-config/issues/782)) ([7c34237](https://github.com/MorevM/eslint-config/commit/7c34237efcb957fb3abdf06370f9be8e7ef4fc04))

## [28.0.0](https://github.com/MorevM/eslint-config/compare/v27.0.1...v28.0.0) (2024-02-04)


### ⚠ BREAKING CHANGES

* **typescript:** With new rule `@typescript-eslint/no-array-delete` TS-related configurations and presets become more strict by default.

### Features

* **typescript:** Add `@typescript-eslint/no-array-delete` rule ([06cf611](https://github.com/MorevM/eslint-config/commit/06cf611b4a78567a23fc15ad115275a4ffb02d15))
* **typescript:** Add `@typescript-eslint/prefer-promise-reject-errors` rule extending from the base one ([997f198](https://github.com/MorevM/eslint-config/commit/997f1989dff689ed4c6ba21ba0207c157b09d01c))
* **typescript:** Enable autofix for `@typescript-eslint/no-useless-template-literals` rule ([e2d6220](https://github.com/MorevM/eslint-config/commit/e2d62200839bd6ee91db34249a31173f0256f962))
* **vue:** Take account of `vue/no-restricted-v-on` rule ([05c3b7f](https://github.com/MorevM/eslint-config/commit/05c3b7f969305f60a6c8f883bae3962098b37cf4))
* **vue:** Take account of `vue/require-explicit-slots` rule ([2de18c9](https://github.com/MorevM/eslint-config/commit/2de18c976a81fac8cbab69ac2d720ca53e6e2da6))


### Bug fixes

* **base:** Disable `jsdoc/no-multi-asterisks` rule ([904722c](https://github.com/MorevM/eslint-config/commit/904722c8d4a3deb557757bd08427a657f6e9fc65))


## [27.0.1](https://github.com/MorevM/eslint-config/compare/v27.0.0...v27.0.1) (2024-01-21)

Rollback of `@typescript-eslint` update due to internal package error \
https://github.com/typescript-eslint/typescript-eslint/issues/8261

## [27.0.0](https://github.com/MorevM/eslint-config/compare/v26.4.0...v27.0.0) (2024-01-20)


### ⚠ BREAKING CHANGES

* **typescript:** With new rule `@typescript-eslint/no-array-delete` TS-related configurations and presets become more strict by default.

### Features

* **typescript:** Add `@typescript-eslint/no-array-delete` rule ([2131534](https://github.com/MorevM/eslint-config/commit/2131534758c1d9664fc0643d57cf70fcc2cdef75))
* **typescript:** Add `@typescript-eslint/prefer-promise-reject-errors` rule extending from the base one ([dc407d5](https://github.com/MorevM/eslint-config/commit/dc407d524a12835874eaf4c274149c39b98ca121))
* **typescript:** Enable autofix for `@typescript-eslint/no-useless-template-literals` rule ([fc2ef35](https://github.com/MorevM/eslint-config/commit/fc2ef3506096ddb818120b11530c8d55719d3409))

### Bug fixes

* **base:** Add empty line between `see` and `example` tags within JSDocs ([29cbf1e](https://github.com/MorevM/eslint-config/commit/29cbf1e7e7f337bf8c636be31a525a575b462036))
* **jest:** Disable `sonarjs/no-duplicated-string` for Jest config and related presets ([a821a30](https://github.com/MorevM/eslint-config/commit/a821a30e8bc14fe89b034d2ac9d4e9d3ce78fa0a))
* **jest:** Increase maximum nested `describe` blocks count from 3 to 4 ([be6a5c7](https://github.com/MorevM/eslint-config/commit/be6a5c773aaa38c3c880f90b084b580d3132e460))

### Chores

* bump @stylistic/eslint-plugin-ts from 1.5.3 to 1.5.4 ([#758](https://github.com/MorevM/eslint-config/issues/758)) ([6d55a1a](https://github.com/MorevM/eslint-config/commit/6d55a1aee7e574f981add2a390c7d90cf3d69101))
* Bump `[@typescript-eslint](https://github.com/typescript-eslint)` packages from 6.18.1 to 6.19.0 ([efee41e](https://github.com/MorevM/eslint-config/commit/efee41e29760771ecb080be33ea8938a25e8a6af))
* bump eslint-plugin-jsonc from 2.11.2 to 2.12.2 ([#751](https://github.com/MorevM/eslint-config/issues/751)) ([7159ff5](https://github.com/MorevM/eslint-config/commit/7159ff557a78c77bc06e09a41878155dc381c0e9))
* bump eslint-plugin-yml from 1.11.0 to 1.12.2 ([#757](https://github.com/MorevM/eslint-config/issues/757)) ([f3fd7a0](https://github.com/MorevM/eslint-config/commit/f3fd7a0a2d72b82544207e311a7fdeee28d9e771))

## [26.4.0](https://github.com/MorevM/eslint-config/compare/v26.3.1...v26.4.0) (2024-01-13)


### Features

* **vue:** Add `vue/enforce-style-attribute` rule ([0f0ee02](https://github.com/MorevM/eslint-config/commit/0f0ee028553adeebd3df1064daf26b356f0dd6ba))
* **vue:** Force `defineExpose` to be a last macro within script block via `vue/define-macros-order` ([46eaf54](https://github.com/MorevM/eslint-config/commit/46eaf54adebb0f48ca6becd880f88ce7c7d41407))


### Chores

* bump @typescript-eslint/eslint-plugin from 6.18.0 to 6.18.1 ([#744](https://github.com/MorevM/eslint-config/issues/744)) ([06b8767](https://github.com/MorevM/eslint-config/commit/06b87672e4771d2c86fb2d8b85cf57caf880eb96))
* bump @typescript-eslint/parser from 6.18.0 to 6.18.1 ([#747](https://github.com/MorevM/eslint-config/issues/747)) ([a167f4e](https://github.com/MorevM/eslint-config/commit/a167f4e5f5e3672970cca6a4e489da018abb0db6))
* Bump `eslint-plugin-vue` from 9.19.2 to 9.20.1 ([f6d20ce](https://github.com/MorevM/eslint-config/commit/f6d20ce6fbcd219208855390aaa7a6d6c55b159a))
* bump eslint-plugin-chai-friendly from 0.7.2 to 0.7.4 ([#742](https://github.com/MorevM/eslint-config/issues/742)) ([1e816ef](https://github.com/MorevM/eslint-config/commit/1e816efa1011e56562294910ec94f1e85b5c8b51))
* bump eslint-plugin-jest from 27.6.1 to 27.6.3 ([#749](https://github.com/MorevM/eslint-config/issues/749)) ([2e23ee4](https://github.com/MorevM/eslint-config/commit/2e23ee404d386cb814fb446bd80732ad88f0ac57))
* bump eslint-plugin-regexp from 2.1.2 to 2.2.0 ([#745](https://github.com/MorevM/eslint-config/issues/745)) ([0201075](https://github.com/MorevM/eslint-config/commit/02010759c429a4f6d0285a48e310d164de79f18c))
* bump vue-eslint-parser from 9.3.2 to 9.4.0 ([#750](https://github.com/MorevM/eslint-config/issues/750)) ([7887c25](https://github.com/MorevM/eslint-config/commit/7887c25c0dedce4efc40a18e1672976d9483d139))

## [26.3.1](https://github.com/MorevM/eslint-config/compare/v26.3.0...v26.3.1) (2024-01-08)


### Bug fixes

* **base:** Use uppercase characters for unicode escape sequence in `regexp/letter-case` ([8b5b94b](https://github.com/MorevM/eslint-config/commit/8b5b94bd92fe8a9abe4f772b8256a2d746cf4269))


### Chores

* bump @stylistic/eslint-plugin-js from 1.5.1 to 1.5.3 ([#738](https://github.com/MorevM/eslint-config/issues/738)) ([343b48d](https://github.com/MorevM/eslint-config/commit/343b48d144212c23eb00af05bc5fecbb131188ed))
* bump @stylistic/eslint-plugin-ts from 1.5.1 to 1.5.3 ([#737](https://github.com/MorevM/eslint-config/issues/737)) ([038ca88](https://github.com/MorevM/eslint-config/commit/038ca885a539bf78dbe18c4bc8897ab47dd6875b))
* bump @typescript-eslint/eslint-plugin from 6.16.0 to 6.18.0 ([#740](https://github.com/MorevM/eslint-config/issues/740)) ([86a7334](https://github.com/MorevM/eslint-config/commit/86a7334552a49325de55d2cf8a5df62603bcb820))
* bump @typescript-eslint/parser from 6.16.0 to 6.17.0 ([#733](https://github.com/MorevM/eslint-config/issues/733)) ([0633300](https://github.com/MorevM/eslint-config/commit/0633300929333ea72c7e91d00d3b2f2ca4fa537b))
* bump @typescript-eslint/parser from 6.16.0 to 6.18.0 ([#741](https://github.com/MorevM/eslint-config/issues/741)) ([4c759fd](https://github.com/MorevM/eslint-config/commit/4c759fdce4f1ea549c4b19f88280c24fc3e43d71))
* bump eslint-plugin-jest from 27.6.0 to 27.6.1 ([#735](https://github.com/MorevM/eslint-config/issues/735)) ([4095f69](https://github.com/MorevM/eslint-config/commit/4095f691e6a176ad23651993a1b7df0b941a5d57))
* bump eslint-plugin-jsdoc from 46.9.1 to 48.0.2 ([#739](https://github.com/MorevM/eslint-config/issues/739)) ([1f165ff](https://github.com/MorevM/eslint-config/commit/1f165fffaf45a18e137538a4dd73a8ed13d914bc))
* bump vue from 3.4.1 to 3.4.5 ([#734](https://github.com/MorevM/eslint-config/issues/734)) ([a5e590d](https://github.com/MorevM/eslint-config/commit/a5e590d06afad95082361c21e80c8ec52bcd9966))

## [26.3.0](https://github.com/MorevM/eslint-config/compare/v26.2.1...v26.3.0) (2024-01-04)


### Features

* **base:** Enable `unicorn/prefer-at` rule ([fef6fa7](https://github.com/MorevM/eslint-config/commit/fef6fa7eec5da74d331264e2ae0ed70b48cb32e7))
* **base:** Enable `unicorn/prefer-string-replace-all` rule ([d093a49](https://github.com/MorevM/eslint-config/commit/d093a49081c29fec53c6feb85fc27826867d7d84))


### Bug fixes

* **typescript:** Disable `@typescript-eslint/unbound-method` ([18346fb](https://github.com/MorevM/eslint-config/commit/18346fb0984ad3b038459c4fdfcb806b0e900c41))


## [26.2.1](https://github.com/MorevM/eslint-config/compare/v26.2.0...v26.2.1) (2024-01-01)


### Chores
* bump @typescript-eslint/eslint-plugin from 6.15.0 to 6.16.0 ([#728](https://github.com/MorevM/eslint-config/issues/728)) ([614929e](https://github.com/MorevM/eslint-config/commit/614929e02a9d460da104c21f012d721b7bc92e8f))
* bump @typescript-eslint/parser from 6.15.0 to 6.16.0 ([#731](https://github.com/MorevM/eslint-config/issues/731)) ([b2f7eb1](https://github.com/MorevM/eslint-config/commit/b2f7eb13f0db4b2efeac9d58388a973607a436c6))

### Bug fixes

* **base:** Disable `regexp/require-unicode-sets-regexp` and `regexp/require-unicode-regexp` for a while ([4ca4575](https://github.com/MorevM/eslint-config/commit/4ca4575245449c0513be79dc74a0b7ccf936d8d1))

## [26.2.0](https://github.com/MorevM/eslint-config/compare/v26.1.1...v26.2.0) (2023-12-23)


### Features

* **base:** Add `unicorn/no-unnecessary-polyfills` rule ([c6a7ba3](https://github.com/MorevM/eslint-config/commit/c6a7ba3ecd4dd5d1f83d6f3daec6cf6ee50d6079))
* **typescript:** Add `@typescript-eslint/no-useless-template-literals` rule ([931ea47](https://github.com/MorevM/eslint-config/commit/931ea47ba61e165b781226bc062acb2e5b6d48b4))


### Chores

* Bump `@typescript-eslint` packages from 6.14.0 to 6.15.0 ([ac0d78c](https://github.com/MorevM/eslint-config/commit/ac0d78c3a773ab29d00741c76ef0795cbb0e21f7))
* Bump `eslint-plugin-unicorn` from 49.0.0 to 50.0.1 ([03b41e2](https://github.com/MorevM/eslint-config/commit/03b41e20944188c2a2842f2ff339b2c5995d99ac))
* Bump eslint-plugin-jsonc from 2.11.1 to 2.11.2 ([#724](https://github.com/MorevM/eslint-config/issues/724)) ([3a8c8b9](https://github.com/MorevM/eslint-config/commit/3a8c8b9ab83a54430271b2c7d314af4af5f5c5b6))

## [26.1.1](https://github.com/MorevM/eslint-config/compare/v26.1.0...v26.1.1) (2023-12-16)


### Chores

* bump @stylistic/eslint-plugin-js from 1.5.0 to 1.5.1 ([#718](https://github.com/MorevM/eslint-config/issues/718)) ([b7da3b1](https://github.com/MorevM/eslint-config/commit/b7da3b1653d80011b45e78f3dc0a3595267c1107))
* bump @stylistic/eslint-plugin-ts from 1.5.0 to 1.5.1 ([#715](https://github.com/MorevM/eslint-config/issues/715)) ([73208ab](https://github.com/MorevM/eslint-config/commit/73208ab63715690586f911ff1cef747c6290e24d))
* bump @typescript-eslint/eslint-plugin from 6.10.0 to 6.14.0 ([#719](https://github.com/MorevM/eslint-config/issues/719)) ([074e1da](https://github.com/MorevM/eslint-config/commit/074e1da0ee640b89d7aa9906af3adc17cc95c659))
* bump @typescript-eslint/parser from 6.13.2 to 6.14.0 ([#713](https://github.com/MorevM/eslint-config/issues/713)) ([9c03e9f](https://github.com/MorevM/eslint-config/commit/9c03e9f63b133c361e5eeabafff4e544c43b6ba0))
* bump eslint from 8.55.0 to 8.56.0 ([#714](https://github.com/MorevM/eslint-config/issues/714)) ([ae16506](https://github.com/MorevM/eslint-config/commit/ae16506e91e8d9c0ccd6b3bd4c41af0b482db0e5))
* bump eslint-plugin-import from 2.29.0 to 2.29.1 ([#720](https://github.com/MorevM/eslint-config/issues/720)) ([09edee5](https://github.com/MorevM/eslint-config/commit/09edee5d79466fc45eb2d0e439f850c70a54c05f))
* bump eslint-plugin-jsdoc from 46.9.0 to 46.9.1 ([#716](https://github.com/MorevM/eslint-config/issues/716)) ([e046828](https://github.com/MorevM/eslint-config/commit/e04682823b93d53f01812a25604eaecc626794c9))
* bump eslint-plugin-jsonc from 2.10.0 to 2.11.1 ([#712](https://github.com/MorevM/eslint-config/issues/712)) ([fb78551](https://github.com/MorevM/eslint-config/commit/fb78551df0fd83156702a79143e5c5325b56b9ee))
* bump eslint-plugin-yml from 1.10.0 to 1.11.0 ([#717](https://github.com/MorevM/eslint-config/issues/717)) ([ea55ca7](https://github.com/MorevM/eslint-config/commit/ea55ca7a621be9fca603c604053444aa381e51a3))

## [26.1.0](https://github.com/MorevM/eslint-config/compare/v26.0.0...v26.1.0) (2023-12-16)


### Features

* **typescript:** Add @typescript-eslint/no-unsafe-unary-minus` rule ([d7ee7ba](https://github.com/MorevM/eslint-config/commit/d7ee7ba6b86c0cdc6f4d117971c7b5c9566faf7a))


### Bug fixes

* **typescript:** Disable autofix for `@typescript-eslint/prefer-readonly` ([f02fb0b](https://github.com/MorevM/eslint-config/commit/f02fb0b0835fee919b7bb32fff3f6e7c25c97135))


### Chores

* bump @html-eslint/eslint-plugin from 0.21.0 to 0.22.0 ([#707](https://github.com/MorevM/eslint-config/issues/707)) ([0cedec9](https://github.com/MorevM/eslint-config/commit/0cedec93ac6e6a2336fef8ef17450007a079d90e))
* bump @html-eslint/parser from 0.21.0 to 0.22.0 ([#710](https://github.com/MorevM/eslint-config/issues/710)) ([c494923](https://github.com/MorevM/eslint-config/commit/c494923c783801d25871eabea5e7388c8426e2b9))
* bump @stylistic/eslint-plugin-ts from 1.4.1 to 1.5.0 ([#711](https://github.com/MorevM/eslint-config/issues/711)) ([140ff72](https://github.com/MorevM/eslint-config/commit/140ff7272807bd819b9155f203c7a2959e1215ab))
* bump @typescript-eslint/parser from 6.10.0 to 6.13.2 ([#703](https://github.com/MorevM/eslint-config/issues/703)) ([272873d](https://github.com/MorevM/eslint-config/commit/272873d8b8c47f52ba596bc156df863cd08dcb13))
* Bump `@typescript-eslint/eslint-plugin` from 6.10.0 to 6.13.2 ([21764e7](https://github.com/MorevM/eslint-config/commit/21764e7af70bd1541aade28abbc5bfcd80987976))
* bump eslint-plugin-regexp from 2.1.1 to 2.1.2 ([#702](https://github.com/MorevM/eslint-config/issues/702)) ([110abc5](https://github.com/MorevM/eslint-config/commit/110abc5bb60e0a1b05cd36850889adc6468ca8c3))

## [26.0.0](https://github.com/MorevM/eslint-config/compare/v25.0.0...v26.0.0) (2023-12-02)


### ⚠ BREAKING CHANGES

* **vue:** WIth new rule `vue/no-unused-emit-declarations` all configurations and presets related to `vue` become more strict.
* **vue2:** With new rule `vue/v-if-else-key` all configurations and presets related to `vue2` become more strict.

### Features

* **base, typescript:** Add a `function-call-spacing` rule instead of `func-call-spacing` ([6484a08](https://github.com/MorevM/eslint-config/commit/6484a08b9ccfc8665cafd6e6f5194569275b6bc0))
* **html:** Add `@html-eslint/lowercase` rule ([a0393c1](https://github.com/MorevM/eslint-config/commit/a0393c143782e0f372cdc694f6f6943eee781c32))
* **html:** Add `@html-eslint/no-script-style-type` rule ([e4cd737](https://github.com/MorevM/eslint-config/commit/e4cd737427cbcddb7dcc20eeb517a430f0b5b8df))
* **html:** Take account of `@html-eslint/require-open-graph-protocol` rule ([8145a66](https://github.com/MorevM/eslint-config/commit/8145a662a40b9f6816c9b3f9645d9118c67aebcc))
* **html:** Take account of `@html-eslint/sort-attrs` rule ([9eb80f0](https://github.com/MorevM/eslint-config/commit/9eb80f0bbec830290a2e64138c03b1cca8eb7973))
* **vue2:** Add `vue/v-if-else-key` rule ([097b890](https://github.com/MorevM/eslint-config/commit/097b8903e104e2195a0d3d9dccf5e9b03047318b))
* **vue:** Add `vue/no-unused-emit-declarations` rule ([794daaa](https://github.com/MorevM/eslint-config/commit/794daaabbe36cfb332f7896843764fb227c09552))


### Bug fixes

* **base, typescript:** Disable stylistic rule `func-call-spacing` since it has been renamed to `function-call-spacing` ([9e15fc3](https://github.com/MorevM/eslint-config/commit/9e15fc3f2c48fa16980f9a729543119570106d3d))
* **vue:** Enforce new type-literal variant of emits declaration for `vue/define-emits-declaration` ([84323d4](https://github.com/MorevM/eslint-config/commit/84323d41ad30d7793638b87ead9a34cd62c87152))


### Chores

* Bump `[@html-eslint](https://github.com/html-eslint)`-related packages from 0.20.0 to 0.21.0 ([8a4430c](https://github.com/MorevM/eslint-config/commit/8a4430c44672a97ccdd69582caff70ef160f04ac))
* Bump `@stylistic/eslint-plugin` from 1.3.3 to 1.4.1 ([5e13cad](https://github.com/MorevM/eslint-config/commit/5e13cadaee0dc56b5f1b369f5d646e1d7b009e09))
* Bump `eslint-plugin-vue` from 9.18.1 to 9.19.2 ([0a3e4f5](https://github.com/MorevM/eslint-config/commit/0a3e4f55f03d09dcd0a3b49af6239bcce1f4275d))
* Bump `eslint` from 8.53.0 to 8.55.0 ([26948c6](https://github.com/MorevM/eslint-config/commit/26948c6052c6f875480ceeb48d521f3e01766d02))
* Run Github actions using Node 20 ([cdb6e74](https://github.com/MorevM/eslint-config/commit/cdb6e74add64b16532c1e801c5de573364236d97))


### Refactoring

* **html:** Sort rules within categories alphabetically to align with the website ([7bc980e](https://github.com/MorevM/eslint-config/commit/7bc980ef8864605df87e2f23a9d03acd224a8214))

## [25.0.0](https://github.com/MorevM/eslint-config/compare/v24.5.0...v25.0.0) (2023-11-12)


### ⚠ BREAKING CHANGES

* **base:** With new `eslint-plugin-regex` rules base configs and presets become more strict.
* Migration to the `@stylistic/eslint-plugin` is not a breaking change per se, it seriously alters the package contents and can have unexpected consequences.
* Drop Node 16 support

### Features

* Switching to `eslint-plugin-stylistic` due of deprecation of `ESlint` formatting rules ([9044a37](https://github.com/MorevM/eslint-config/commit/9044a37c8bb98171a2618de27938bce742655dd9))
* **base:** Add `regexp/no-useless-set-operand` rule ([70d09e5](https://github.com/MorevM/eslint-config/commit/70d09e532bd25786ee76577ecd3361e5574c1a9d))
* **base:** Add `regexp/no-useless-string-literal` rule ([100d3a0](https://github.com/MorevM/eslint-config/commit/100d3a086186226576288feab7e37a7d95440e23))
* **base:** Add `regexp/prefer-set-operation` rule ([34ff310](https://github.com/MorevM/eslint-config/commit/34ff310192fb850e7ac410b77af8417ec767a3c9))
* **base:** Add `regexp/require-unicode-sets-regexp` rule ([1827b79](https://github.com/MorevM/eslint-config/commit/1827b79a70edc79410bbbc1b7d56b6939c7453b5))
* **base:** Add `regexp/simplify-set-operations` rule ([4aafdb4](https://github.com/MorevM/eslint-config/commit/4aafdb44e408a02849388f81371a1d622b3d1074))
* **base:** Enable `regexp/require-unicode-regexp` rule ([4034585](https://github.com/MorevM/eslint-config/commit/4034585267b2e29e33459d14966274f660e259f9))
* **base:** Enable `unicorn/prefer-top-level-await` rule ([6dc45c4](https://github.com/MorevM/eslint-config/commit/6dc45c4c755cedf5a20a2eab3a00a13bb3d6ea9d))
* **base:** Take account of `regexp/grapheme-string-literal` rule ([513e416](https://github.com/MorevM/eslint-config/commit/513e4165a8915909f4697e50dc65319c66fa6e34))
* **base:** Take account of `regexp/no-empty-string-literal` rule ([4cb1f3c](https://github.com/MorevM/eslint-config/commit/4cb1f3cc85564599e8d2a0284228196cfe2af7a6))
* **html:** Take account of `@html-eslint/no-restricted-attr-values` rule ([4cc986a](https://github.com/MorevM/eslint-config/commit/4cc986ab2392388cda65a8a6f35feabf571e223d))
* **typescript:** Add `@typescript-eslint/max-params` rule ([180fedb](https://github.com/MorevM/eslint-config/commit/180fedbac6c7654293eb23ae684948d3d7ccd5be))
* **typescript:** Add `@typescript-eslint/prefer-destructuring` rule ([053c01c](https://github.com/MorevM/eslint-config/commit/053c01c788b40fadf84c3d144b935d259d584925))


### Refactoring

* **typescript:** Move `member-delimiter-style` and `type-annotation-spacing` to the stylistic scope ([ee81533](https://github.com/MorevM/eslint-config/commit/ee81533509cd3e2083037fd7bf1399a4da5ec63a))


### Tests

* Add known TS unused rules that mugrated to the stylistic scope ([f76ba03](https://github.com/MorevM/eslint-config/commit/f76ba03db7e16f82b70f1325ed8fc5e6c4fc7efd))
* Take account of deprecated ESLint formatting rules ([d57c732](https://github.com/MorevM/eslint-config/commit/d57c732b777952b59749e2aba1de5e60fa9eeca5))

## [24.5.0](https://github.com/MorevM/eslint-config/compare/v24.4.1...v24.5.0) (2023-09-23)


### Features

* **base:** Add new `no-object-constructor` rule (as a replacement for `no-new-object`) ([5c22306](https://github.com/MorevM/eslint-config/commit/5c223063d1394182e9b1f4bc05bfe0fd942b6d85))


### Bug fixes

* **base:** Remove deprecated `no-new-object` rule ([2d2744c](https://github.com/MorevM/eslint-config/commit/2d2744c00905f9774edca43f8ffb54e67cf54e9f))

## [24.4.1](https://github.com/MorevM/eslint-config/compare/v24.4.0...v24.4.1) (2023-09-18)


### Bug fixes

* **typescript:** Allow usage of `any` type in `@typescript-eslint/restrict-template-expressions` ([73a9972](https://github.com/MorevM/eslint-config/commit/73a9972fe184517a3c5f78812501ef3f9d47d7e7))

## [24.4.0](https://github.com/MorevM/eslint-config/compare/v24.3.3...v24.4.0) (2023-09-17)


### Features

* **jest:** Add `jest/no-confusing-set-timeout` rule ([dbed11f](https://github.com/MorevM/eslint-config/commit/dbed11f26dfc1e61738923bff27fea70a4ca181b))


## [24.3.3](https://github.com/MorevM/eslint-config/compare/v24.3.2...v24.3.3) (2023-08-12)


### Chores

* bump @typescript-eslint/eslint-plugin from 6.2.1 to 6.3.0 ([#583](https://github.com/MorevM/eslint-config/issues/583)) ([e84b57d](https://github.com/MorevM/eslint-config/commit/e84b57d158710556360ec8e2d761348e9781a653))
* bump @typescript-eslint/parser from 6.2.1 to 6.3.0 ([#576](https://github.com/MorevM/eslint-config/issues/576)) ([8269a95](https://github.com/MorevM/eslint-config/commit/8269a95ad01be9ca3181c896aed1bd75321921e0))
* Bump `eslint-plugin-vue` from 9.16.1 to 9.17.0 ([f3015a8](https://github.com/MorevM/eslint-config/commit/f3015a82c60772310a6bd23aeb68d152bbfaabc3))
* bump eslint from 8.46.0 to 8.47.0 ([#578](https://github.com/MorevM/eslint-config/issues/578)) ([38da4dc](https://github.com/MorevM/eslint-config/commit/38da4dc7b09606d2296a049a7db7f5189e5aa3df))
* bump eslint-import-resolver-typescript from 3.5.5 to 3.6.0 ([#584](https://github.com/MorevM/eslint-config/issues/584)) ([daa66be](https://github.com/MorevM/eslint-config/commit/daa66be97bc7ec7375e9ad3bcc7752e09de5fa40))
* bump eslint-plugin-cypress from 2.13.3 to 2.14.0 ([#577](https://github.com/MorevM/eslint-config/issues/577)) ([d4de2ba](https://github.com/MorevM/eslint-config/commit/d4de2ba6be453e422d1588fc29a812a9f81c8ae7))


### Bug fixes

* **vue:** Rename deprecated rules `no-setup-props-destructure` and `no-ref-object-destructure` ([ef0d9f4](https://github.com/MorevM/eslint-config/commit/ef0d9f458724c85a68bcecf10a1dd2aebd61d3fb))

## [24.3.2](https://github.com/MorevM/eslint-config/compare/v24.3.1...v24.3.2) (2023-08-05)


### Chores

* bump @typescript-eslint/eslint-plugin from 6.2.0 to 6.2.1 ([#569](https://github.com/MorevM/eslint-config/issues/569)) ([b6cde4c](https://github.com/MorevM/eslint-config/commit/b6cde4c0eccdc42496ed0ed17849e28c8984782a))
* bump @typescript-eslint/parser from 6.2.0 to 6.2.1 ([#573](https://github.com/MorevM/eslint-config/issues/573)) ([ef3bcc9](https://github.com/MorevM/eslint-config/commit/ef3bcc9925ebf47b6a1934e341039ea41f03fa28))
* Bump `eslint-plugin-sonarjs` from 0.19.0 to 0.20.0 ([8301733](https://github.com/MorevM/eslint-config/commit/8301733cabf66421b4d75a5f967d5d2b5b37b167))
* bump eslint-plugin-jsdoc from 46.4.5 to 46.4.6 ([#571](https://github.com/MorevM/eslint-config/issues/571)) ([964a1ec](https://github.com/MorevM/eslint-config/commit/964a1ecff6b71ab96aa62d4ae95d289cf353db52))
* bump eslint-plugin-vue from 9.16.0 to 9.16.1 ([#572](https://github.com/MorevM/eslint-config/issues/572)) ([e614230](https://github.com/MorevM/eslint-config/commit/e614230da256d4d572c789824b1fa757fd936b2a))


### Refactoring

* **base:** Correct signature of `sonarjs/no-duplicate-string` after update ([3b55f7e](https://github.com/MorevM/eslint-config/commit/3b55f7e9aea69cf67aea9fa55b2fbd4cf47758b5))

## [24.3.1](https://github.com/MorevM/eslint-config/compare/v24.3.0...v24.3.1) (2023-08-01)


### Bug fixes

* **vue3:** Disable `vue/no-setup-props-destructure` due to incorrect behavior ([cb80fdb](https://github.com/MorevM/eslint-config/commit/cb80fdbf5e30f189a1c03639a6aea2351b2adc63))

## [24.3.0](https://github.com/MorevM/eslint-config/compare/v24.2.2...v24.3.0) (2023-07-29)


### Features

* **typescript:** Take account of `@typescript-eslint/class-methods-use-this` rule ([515a77f](https://github.com/MorevM/eslint-config/commit/515a77f244d77c8d5c04531323202f46d50bd304))
* **vue3:** Add `vue/no-deprecated-model-definition` rule ([6cd6667](https://github.com/MorevM/eslint-config/commit/6cd66672fd547c8ca365d84934bfd019190eb8d4))
* **vue:** Add `vue/no-use-v-else-with-v-for` rule ([6d9248a](https://github.com/MorevM/eslint-config/commit/6d9248a3f5b919b7c0b2cb9abbfa2a86837f06f9))
* **vue:** Add `vue/require-typed-object-prop` rule ([bbf87d3](https://github.com/MorevM/eslint-config/commit/bbf87d3aeee6ec42f286c2f8ba24309dc848078d))


### Bug fixes

* **base:** Remove deprecated `no-return-await` rule ([d34dd70](https://github.com/MorevM/eslint-config/commit/d34dd709d68bca1743a499b4140577b9b607eae0))
* **base:** Remove deprecated `unicorn/no-unsafe-regex` rule ([148999e](https://github.com/MorevM/eslint-config/commit/148999efb5211d6673d20500a7a729a860589277))
* **typescript:** Remove deprecated `@typescript-eslint/no-type-alias` rule ([b9a7551](https://github.com/MorevM/eslint-config/commit/b9a75514427f66363335b66c393abb9e10b1b51e))
* **vue:** Replace `vue/component-tags-order` rule with new `vue/block-order` ([12767a4](https://github.com/MorevM/eslint-config/commit/12767a44d3d4d4cf2250588e0584954d53786746))


### Chores

* bump @html-eslint/eslint-plugin from 0.19.0 to 0.19.1 ([#559](https://github.com/MorevM/eslint-config/issues/559)) ([721e705](https://github.com/MorevM/eslint-config/commit/721e705f3c95d795d763d68705de54b876e5816a))
* bump @html-eslint/parser from 0.19.0 to 0.19.1 ([#558](https://github.com/MorevM/eslint-config/issues/558)) ([1e38dc4](https://github.com/MorevM/eslint-config/commit/1e38dc4e93e916aadad55bf87b48ffefe7fbb49f))
* Bump `[@typescript-eslint](https://github.com/typescript-eslint)` from 5.62.0 to 6.2.0 ([b4f1f02](https://github.com/MorevM/eslint-config/commit/b4f1f02c451b04f45578114af2e8f34de69e354a))
* Bump `eslint-plugin-unicorn` from 47.0.0 to 48.0.1 ([b7a827f](https://github.com/MorevM/eslint-config/commit/b7a827fe13cb634ca2c9bbbdd5f3e5942fca915a))
* Bump `eslint-plugin-vue` from 9.15.1 to 9.16.0 ([9ab93d1](https://github.com/MorevM/eslint-config/commit/9ab93d1d192c5766a9d5cb44e5ccbb1aad700c80))
* Bump `eslint` from 8.44.0 to 8.46.0 ([37fb5c1](https://github.com/MorevM/eslint-config/commit/37fb5c102ca34e7458c7346e749181076e6b3af6))
* bump eslint-plugin-import from 2.27.5 to 2.28.0 ([#565](https://github.com/MorevM/eslint-config/issues/565)) ([2e726ec](https://github.com/MorevM/eslint-config/commit/2e726ecabe60130a742349ac7c3ba70885317713))
* bump eslint-plugin-jest from 27.2.2 to 27.2.3 ([#554](https://github.com/MorevM/eslint-config/issues/554)) ([02e3047](https://github.com/MorevM/eslint-config/commit/02e3047421cdf8a397afc6e5d161d0fec59d6860))
* bump eslint-plugin-jsdoc from 46.4.3 to to 46.4.5 ([#564](https://github.com/MorevM/eslint-config/issues/564)) ([105da9c](https://github.com/MorevM/eslint-config/commit/105da9c0dd614b8874bdbbc863fc5304f898fe65))

## [24.2.2](https://github.com/MorevM/eslint-config/compare/v24.2.1...v24.2.2) (2023-07-08)


### Chores

* bump @babel/eslint-parser from 7.22.5 to 7.22.7 ([#539](https://github.com/MorevM/eslint-config/issues/539)) ([77fe701](https://github.com/MorevM/eslint-config/commit/77fe701903ed2c812b6aeae1731c27bb41a3b436))
* bump @release-it/conventional-changelog from 5.1.1 to 6.0.0 ([#542](https://github.com/MorevM/eslint-config/issues/542)) ([9144dbf](https://github.com/MorevM/eslint-config/commit/9144dbf114707cb5c4ae7cc5cbcb893ce681bbbb))
* bump @typescript-eslint/eslint-plugin from 5.60.1 to 5.61.0 ([#540](https://github.com/MorevM/eslint-config/issues/540)) ([6ab5c94](https://github.com/MorevM/eslint-config/commit/6ab5c94c254dd002fb1980529c159689a7ab4463))
* bump @typescript-eslint/parser from 5.60.1 to 5.61.0 ([#541](https://github.com/MorevM/eslint-config/issues/541)) ([62609b4](https://github.com/MorevM/eslint-config/commit/62609b454b71c9239ebb3d94b5de9045a5c3a319))


### Bug fixes

* **base:** Disable `sonarjs/prefer-single-boolean-return` rule ([c27f762](https://github.com/MorevM/eslint-config/commit/c27f762c8ef810497f7cea90963f734c45d6d6d1))

## [24.2.1](https://github.com/MorevM/eslint-config/compare/v24.2.0...v24.2.1) (2023-07-02)


### Chores

* bump @typescript-eslint/eslint-plugin from 5.60.0 to 5.60.1 ([#537](https://github.com/MorevM/eslint-config/issues/537)) ([bd21c0c](https://github.com/MorevM/eslint-config/commit/bd21c0c87e530e292246d43273f0d2f67c2ed7d3))
* bump @typescript-eslint/parser from 5.60.0 to 5.60.1 ([#532](https://github.com/MorevM/eslint-config/issues/532)) ([4a4fa57](https://github.com/MorevM/eslint-config/commit/4a4fa577dac12f7e649ba9aad716340a93682228))
* bump eslint from 8.43.0 to 8.44.0 ([#533](https://github.com/MorevM/eslint-config/issues/533)) ([3a2719e](https://github.com/MorevM/eslint-config/commit/3a2719eed296a9e028b44150278a8e2e2582b1e7))
* bump eslint-plugin-jsdoc from 46.2.6 to 46.4.3 ([#538](https://github.com/MorevM/eslint-config/issues/538)) ([7a3ca33](https://github.com/MorevM/eslint-config/commit/7a3ca33043744a271c7bd060a7668eabf7154a61))

### Bug fixes

* **typescript:** Disable `@typescript-eslint/no-dynamic-delete` rule ([4c8bb9a](https://github.com/MorevM/eslint-config/commit/4c8bb9a78316ceb208ca51fcae1d687945c80990))

## [24.2.0](https://github.com/MorevM/eslint-config/compare/v24.1.0...v24.2.0) (2023-06-25)


### Features

* **vue:** Add `vue/no-console` rule that extends the base ESLint `no-console` ([951b476](https://github.com/MorevM/eslint-config/commit/951b4762679f1cd4a6c7260bceec57783d0e0e83))
* **vue:** Add `vue/require-macro-variable-name` rule ([727530d](https://github.com/MorevM/eslint-config/commit/727530d99de31153b151cec2a7f137a502ab40ed))
* **vue:** Add `vue/require-typed-ref` rule ([6473da1](https://github.com/MorevM/eslint-config/commit/6473da158eb9311c1fdbbb74ca1fb224d0251a48))
* **vue:** Take account of `vue/max-lines-per-block` rule ([937a8e2](https://github.com/MorevM/eslint-config/commit/937a8e220a48bf2cde4783b8c96c125ec14b0cdf))
* **vue:** Take account of `vue/no-restricted-component-names` rule ([f6d9e60](https://github.com/MorevM/eslint-config/commit/f6d9e605b341f42256b319d830ebdcf9afee261e))


### Bug fixes

* **base:** Set `max-len` rule severity to `warn` ([52c39b6](https://github.com/MorevM/eslint-config/commit/52c39b6b0734f328f5936260fcfd2842327d756a))
* **vue:** Set severity of `vue/no-unused-properties` to `warn` ([b77a201](https://github.com/MorevM/eslint-config/commit/b77a20145bb5e756914c5d042f11ed1316887445))


### Chores

* bump @typescript-eslint/eslint-plugin from 5.59.11 to 5.60.0 ([#531](https://github.com/MorevM/eslint-config/issues/531)) ([b195a68](https://github.com/MorevM/eslint-config/commit/b195a68ac7d4b8f230adad4bce5515e58a2cc604))
* bump @typescript-eslint/parser from 5.59.11 to 5.60.0 ([#528](https://github.com/MorevM/eslint-config/issues/528)) ([7af9c0e](https://github.com/MorevM/eslint-config/commit/7af9c0ef73908f9e8c719452870848b07548f489))
* bump eslint-plugin-vue from 9.14.1 to 9.15.1 ([56d52fb](https://github.com/MorevM/eslint-config/commit/56d52fbd2ad92e3068147c7e724ef145376e31d4))
* bump eslint from 8.42.0 to 8.43.0 ([#525](https://github.com/MorevM/eslint-config/issues/525)) ([fda4d0a](https://github.com/MorevM/eslint-config/commit/fda4d0a97dabf07fc0f14b5a0248de7df7a5fec9))
* bump eslint-plugin-jest from 27.2.1 to 27.2.2 ([#529](https://github.com/MorevM/eslint-config/issues/529)) ([59a4b8d](https://github.com/MorevM/eslint-config/commit/59a4b8dab2c13908065c0549e358dd099ae68f73))
* bump eslint-plugin-jsdoc from 46.2.0 to 46.2.6 ([#512](https://github.com/MorevM/eslint-config/issues/512)) ([563d575](https://github.com/MorevM/eslint-config/commit/563d575ac6bb6a84baf8410c31db00392a10f693))
* bump eslint-plugin-jsonc from 2.8.0 to 2.9.0 ([#521](https://github.com/MorevM/eslint-config/issues/521)) ([a5f072a](https://github.com/MorevM/eslint-config/commit/a5f072aec74f8fca03a4b9244c2691153ff3e59d))
* bump eslint-plugin-yml from 1.7.0 to 1.8.0 ([#519](https://github.com/MorevM/eslint-config/issues/519)) ([dbf4af3](https://github.com/MorevM/eslint-config/commit/dbf4af3d6d0a48901f11357b15384f5faffdc3f1))
* bump vue-eslint-parser from 9.3.0 to 9.3.1 ([#523](https://github.com/MorevM/eslint-config/issues/523)) ([2a69263](https://github.com/MorevM/eslint-config/commit/2a69263c3b408e3d29ac68ec38fcf7561b73c042))

## [24.1.0](https://github.com/MorevM/eslint-config/compare/v24.0.1...v24.1.0) (2023-06-03)


### Features

* **base:** Add `jsdoc/imports-as-dependencies` rule ([151613a](https://github.com/MorevM/eslint-config/commit/151613ae4f7e6e3f38c05c7d960ea8f94022b468))


### Chores

* bump @typescript-eslint/eslint-plugin from 5.59.7 to 5.59.8 ([#504](https://github.com/MorevM/eslint-config/issues/504)) ([465bc84](https://github.com/MorevM/eslint-config/commit/465bc842a6c1326723aea6e5152d9a3b068bfd56))
* bump @typescript-eslint/parser from 5.59.7 to 5.59.8 ([#510](https://github.com/MorevM/eslint-config/issues/510)) ([a580e9f](https://github.com/MorevM/eslint-config/commit/a580e9f2e91bceb13ce33cb170548f1b2a13313c))
* bump eslint from 8.41.0 to 8.42.0 ([#507](https://github.com/MorevM/eslint-config/issues/507)) ([0e37f00](https://github.com/MorevM/eslint-config/commit/0e37f0064d34bc1956ddf09e005e1849c754edf4))
* bump eslint-plugin-jsdoc from 44.2.7 to 46.2.0 ([758c14c](https://github.com/MorevM/eslint-config/commit/758c14c1a06623f3b1c7bba02d42f08bfa735316))

## [24.0.1](https://github.com/MorevM/eslint-config/compare/v24.0.0...v24.0.1) (2023-05-28)


### Chores

* bump @typescript-eslint 5.59.6 to 5.59.7 ([#497](https://github.com/MorevM/eslint-config/issues/497)) ([836d71a](https://github.com/MorevM/eslint-config/commit/836d71a585be6151b023ca1c80bd604a990a5113))
* bump eslint-plugin-jsdoc from 44.2.4 to 44.2.7 ([#500](https://github.com/MorevM/eslint-config/issues/500)) ([1e04576](https://github.com/MorevM/eslint-config/commit/1e045762de047b07646dc4d4a87314f004ac7642))
* Bump eslint-plugin-vue from 9.13.0 to 9.14.1 ([75ff421](https://github.com/MorevM/eslint-config/commit/75ff42149b2e742a9018dd8bc79617afc9c5c5db))


### Bug fixes

* **base:** Add autofix and decrease severity for `spaced-comment` rule ([66692dd](https://github.com/MorevM/eslint-config/commit/66692dd0f157ae150fd8d2f9f60a159c45aff1de))
* **typescript:** Disable `@typescript-eslint/consistent-indexed-object-style` rule ([29e0caa](https://github.com/MorevM/eslint-config/commit/29e0caaf17cd50a28b755f4f725e8d55ac3d3e6e))
* **typescript:** Disable `@typescript-eslint/no-unnecessary-condition` rule ([09f1f71](https://github.com/MorevM/eslint-config/commit/09f1f7143d104f92755fd31f27b2cbd19e3727e8))

## [24.0.0](https://github.com/MorevM/eslint-config/compare/v23.0.0...v24.0.0) (2023-05-20)


### ⚠ BREAKING CHANGES

* **vue3:** With new rule `vue/valid-define-options` vue3 configs/presets become more strict.
* **vue3:** With new rule `vue/prefer-define-options` vue3 configs/presets become more strict. Although the rule is autofixable, there may be significant side-effects.

### Features

* **base:** Enable `logical-assignment-operators` rule ([9b2b8e2](https://github.com/MorevM/eslint-config/commit/9b2b8e20f0a269887a9f554f15771672f341c79b))
* **base:** Enable `unicorn/prefer-logical-operator-over-ternary` rule ([128ef15](https://github.com/MorevM/eslint-config/commit/128ef15db4d9e03c1494a031c11b28cc17850490))
* **typescript:** Enable `@typescript-eslint/consistent-indexed-object-style` rule ([16f7ae2](https://github.com/MorevM/eslint-config/commit/16f7ae22bf2818a382607922389491172d6f0dab))
* **typescript:** Enable `@typescript-eslint/no-unnecessary-boolean-literal-compare` rule ([01c2ef4](https://github.com/MorevM/eslint-config/commit/01c2ef4422f8b1cf2c2ed2d0202b600b20c00ab1))
* **vue3:** Add `vue/prefer-define-options` rule ([b55666e](https://github.com/MorevM/eslint-config/commit/b55666ef3f266746f80f43e98e8155ed98f73bd5))
* **vue3:** Add `vue/valid-define-options` rule ([85d8879](https://github.com/MorevM/eslint-config/commit/85d88795695a2e9ed476c904426c165f2eaf456e))
* **vue3:** Take care about `defineOptions` and `defineSlots` in `vue/define-macros-order` ([9fd0281](https://github.com/MorevM/eslint-config/commit/9fd02819c451e527455d471e7ad696fa51da776a))
* **vue:** Allow to modify a prop property inside child components ([0825269](https://github.com/MorevM/eslint-config/commit/08252690563f3eca587760e0afc4b5e703d1f0bf))
* **vue:** Take care of `vue/no-root-v-if` rule ([6e7375e](https://github.com/MorevM/eslint-config/commit/6e7375e071933d5264ff0c2f8fb452ade1d1f850))
* **yaml:** Add `yml/no-trailing-zeros` rule ([1c9fc0b](https://github.com/MorevM/eslint-config/commit/1c9fc0b1f46973526696059ff2474ebb1ba97cc2))

### Refactoring

* Take care about past TODO comments ([c73fc7c](https://github.com/MorevM/eslint-config/commit/c73fc7c8129835bb8c0ac08498091f6135c29f95))
* **vue3:** Better rules consistency across the categories ([aef2d40](https://github.com/MorevM/eslint-config/commit/aef2d4062efb2147acaf4fcdf30d9f6a5cf3ecd2))

## [23.0.0](https://github.com/MorevM/eslint-config/compare/v22.1.0...v23.0.0) (2023-05-07)


### ⚠ BREAKING CHANGES

* **base:** With the new rule `unicorn/prefer-blob-reading-methods` preset `common` becomes more strict.

### Features

* **base:** Add `unicorn/prefer-blob-reading-methods` ([c259d64](https://github.com/MorevM/eslint-config/commit/c259d64c1739eaea8c3cb7271c66052de86dab30))
* **base:** Add new stylistic rule `jsdoc/no-blank-blocks` ([0b10418](https://github.com/MorevM/eslint-config/commit/0b104181cfb9bafde1a7dd4c72a8d9b595a3f958))


### Bug fixes

* **base:** Disable `object-property-newline` rule ([5ed1a50](https://github.com/MorevM/eslint-config/commit/5ed1a50ef483c5c2adb0612a27abb932594dee66))


### Chores

* bump @babel/eslint-parser from 7.21.3 to 7.21.8 ([#469](https://github.com/MorevM/eslint-config/issues/469)) ([87bed11](https://github.com/MorevM/eslint-config/commit/87bed1128cd9702b62c3055db1008445ba7e109d))
* bump @typescript-eslint/eslint-plugin from 5.59.1 to 5.59.2 ([#466](https://github.com/MorevM/eslint-config/issues/466)) ([e171c3b](https://github.com/MorevM/eslint-config/commit/e171c3b6e6a7418b01a74dd8fb5c703d48c42cc0))
* bump @typescript-eslint/parser from 5.59.1 to 5.59.2 ([#465](https://github.com/MorevM/eslint-config/issues/465)) ([f6f737a](https://github.com/MorevM/eslint-config/commit/f6f737aa7be453562dfeb3ed76b5d7e0da67fdb0))
* bump eslint from 8.39.0 to 8.40.0 ([bd1db74](https://github.com/MorevM/eslint-config/commit/bd1db74891822e99dd8a7e34bb785518d12a8712))
* bump eslint-plugin-jsdoc from 43.0.7 to 43.2.0 ([0f36b4b](https://github.com/MorevM/eslint-config/commit/0f36b4b5f7fa01d809a26cba49ea56b71a835fb8))
* bump eslint-plugin-unicorn from 46.0.0 to 47.0.0 ([d05bdf9](https://github.com/MorevM/eslint-config/commit/d05bdf9b32b797f6aac6d9f9dc519f0376638c56))
* bump vue-eslint-parser from 9.1.1 to 9.2.0 ([#470](https://github.com/MorevM/eslint-config/issues/470)) ([27c423f](https://github.com/MorevM/eslint-config/commit/27c423fefc2c60ec361f3f7c6017b11158585ae5))

## [22.1.0](https://github.com/MorevM/eslint-config/compare/v22.0.0...v22.1.0) (2023-05-01)


### Features

* **base:** Configure `jsdoc/tag-lines` and `jsdoc/sort-tags` rules individually ([fe7ee97](https://github.com/MorevM/eslint-config/commit/fe7ee97656322472370f0bb374cc5203fcf5d11e))


### Chores

* bump @typescript-eslint packages from 5.58.0 to 5.59.1 ([b5ae14e](https://github.com/MorevM/eslint-config/commit/b5ae14ecedd413610e4186874413fb8114b254b2))
* bump eslint from 8.38.0 to 8.39.0 ([#453](https://github.com/MorevM/eslint-config/issues/453)) ([2881915](https://github.com/MorevM/eslint-config/commit/28819154dafa3194168bce48d82796db33221dd5))
* bump eslint-plugin-cypress from 2.13.2 to 2.13.3 ([#464](https://github.com/MorevM/eslint-config/issues/464)) ([07a5647](https://github.com/MorevM/eslint-config/commit/07a5647043bb24b08d30539bb927c517c9a9491e))
* bump eslint-plugin-jsdoc from 41.1.1 to 43.0.7 ([427d9e8](https://github.com/MorevM/eslint-config/commit/427d9e8ad2d4bc9aaee8d84e21c68adf4b535658))
* bump glob from 10.1.0 to 10.2.2 ([#461](https://github.com/MorevM/eslint-config/issues/461)) ([d62c54d](https://github.com/MorevM/eslint-config/commit/d62c54d1a92cc0d02ecacd6f90026e6230df798a))
* bump lefthook from 1.3.10 to 1.3.12 ([#463](https://github.com/MorevM/eslint-config/issues/463)) ([1f4b33d](https://github.com/MorevM/eslint-config/commit/1f4b33d6e88fa330564f55c5290f6ac90faefb0a))

## [22.0.0](https://github.com/MorevM/eslint-config/compare/v21.7.1...v22.0.0) (2023-04-15)


### ⚠ BREAKING CHANGES

* **typescript:** With new `@typescript-eslint/no-unsafe-enum-comparison` rule default config become more strict.

### Features

* **base:** Add `jsdoc/no-blank-block-descriptions` rule ([a8cb74b](https://github.com/MorevM/eslint-config/commit/a8cb74bc377f7716e157d5457ab0d9900a1f186c))
* **base:** Take account of `jsdoc/informative-docs` rule ([18c0e3f](https://github.com/MorevM/eslint-config/commit/18c0e3f3a260e258e36931dfe2d02b002bbe3311))
* **typescript:** Add `@typescript-eslint/no-unsafe-enum-comparison` rule ([d03173e](https://github.com/MorevM/eslint-config/commit/d03173e66afad01d65c562e43d4e35c2e41000be))


### Chores

* bump @typescript-eslint packages from 5.57.1 to 5.58.0 ([a2ff2db](https://github.com/MorevM/eslint-config/commit/a2ff2db62fcf35ea433aec334c6445ffa54aaf18))
* bump @html-eslint/eslint-plugin from 0.17.2 to 0.18.0 ([#448](https://github.com/MorevM/eslint-config/issues/448)) ([167997d](https://github.com/MorevM/eslint-config/commit/167997d9e642e0c1d1be7eb6b0b87b28dd8f1571))
* bump @html-eslint/parser from 0.17.1 to 0.18.0 ([#446](https://github.com/MorevM/eslint-config/issues/446)) ([ba1471a](https://github.com/MorevM/eslint-config/commit/ba1471ad4382a7c7450bdabc3ca728875b64e601))
* bump eslint-plugin-jsdoc from 40.1.1 to 41.1.1 ([2202d28](https://github.com/MorevM/eslint-config/commit/2202d28c3aa8301e79d2641d31eb71085f1c803e))
* bump eslint-plugin-vue from 9.10.0 to 9.11.0 ([#450](https://github.com/MorevM/eslint-config/issues/450)) ([b79a984](https://github.com/MorevM/eslint-config/commit/b79a9840b1a605f99583620676f5f35c9976e947))

### [21.7.1](https://github.com/MorevM/eslint-config/compare/v21.7.0...v21.7.1) (2023-04-08)


### Chores

* bump @typescript-eslint/eslint-plugin from 5.57.0 to 5.57.1 ([#436](https://github.com/MorevM/eslint-config/issues/436)) ([4761550](https://github.com/MorevM/eslint-config/commit/47615505009bf1e5f4d8c7932b9a8aef44d9694e))
* bump @typescript-eslint/parser from 5.57.0 to 5.57.1 ([#439](https://github.com/MorevM/eslint-config/issues/439)) ([db07388](https://github.com/MorevM/eslint-config/commit/db073884dc6eb2d2a7d8a74d45e1c15168c955c8))
* bump eslint from 8.37.0 to 8.38.0 ([#442](https://github.com/MorevM/eslint-config/issues/442)) ([62dc28a](https://github.com/MorevM/eslint-config/commit/62dc28ac593751f948c960b51353edcdd7f57130))
* bump eslint-import-resolver-typescript from 3.5.4 to 3.5.5 ([#443](https://github.com/MorevM/eslint-config/issues/443)) ([5ca82c0](https://github.com/MorevM/eslint-config/commit/5ca82c0a3053681bece143eb547d1ee7efaa35e3))

### Bug fixes

* **typescript:** Turn off `@typescript-eslint/no-invalid-void-type` rule ([7eb8d3c](https://github.com/MorevM/eslint-config/commit/7eb8d3c56611a3d14b457ec8a174fa07a1f75dba))

## [21.7.0](https://github.com/MorevM/eslint-config/compare/v21.6.1...v21.7.0) (2023-04-01)


### Features

* **cypress:** Add `cypress/unsafe-to-chain-command` rule ([ee9ede0](https://github.com/MorevM/eslint-config/commit/ee9ede0c8bb5f75b7776a2488af8df07dd63e06b))
* **typescript:** Add `@typescript-eslint/no-duplicate-type-constituents` rule ([ef9afda](https://github.com/MorevM/eslint-config/commit/ef9afda404d1cb1405a817fd2a6c57f164b336db))


### Chores

* bump @typescript-eslint from 5.56.0 to 5.57.0 ([ce22d1a](https://github.com/MorevM/eslint-config/commit/ce22d1aaa85ff72409ca8e18ffba4572c7f24642))
* bump `eslint-plugin-cypress` from 2.12.1 to 2.13.2 ([e05738a](https://github.com/MorevM/eslint-config/commit/e05738a13438dca44d55b36ddf512f1555f53019))
* bump eslint from 8.36.0 to 8.37.0 ([#424](https://github.com/MorevM/eslint-config/issues/424)) ([9bf9d7b](https://github.com/MorevM/eslint-config/commit/9bf9d7b997e1e01b28125f3b2af841b0c1fd7bdf))
* bump eslint-import-resolver-typescript from 3.5.3 to 3.5.4 ([#432](https://github.com/MorevM/eslint-config/issues/432)) ([576d985](https://github.com/MorevM/eslint-config/commit/576d9858f51228fd1fe28b7a87427900c158e519))
* bump eslint-plugin-jsdoc from 40.1.0 to 40.1.1 ([#427](https://github.com/MorevM/eslint-config/issues/427)) ([c418727](https://github.com/MorevM/eslint-config/commit/c4187278a786e43aa4cfd0e20bb3063509a0fc53))
* bump eslint-plugin-regexp from 1.13.0 to 1.14.0 ([#431](https://github.com/MorevM/eslint-config/issues/431)) ([7a648b2](https://github.com/MorevM/eslint-config/commit/7a648b29da997f008290100452cbb44243981b75))
* bump typescript from 5.0.2 to 5.0.3 ([#428](https://github.com/MorevM/eslint-config/issues/428)) ([0ff3480](https://github.com/MorevM/eslint-config/commit/0ff3480df7621d062c04d9b4a404f8378018a13a))

### Bug fixes

* Mark `@typescript-eslint/consistent-type-assertions` as autofixable ([f198a1e](https://github.com/MorevM/eslint-config/commit/f198a1e998cd8840bb4799b75c0c34f9ce8b2682))
* **yaml:** Add `lefthook.yml` to the list of files that ignore `yml/file-extension` rule ([cc272db](https://github.com/MorevM/eslint-config/commit/cc272db0dd4516b845871aedf341503c5b47d525))

### [21.6.1](https://github.com/MorevM/eslint-config/compare/v21.6.0...v21.6.1) (2023-03-25)


### Chores

Minor bump of dependencies. :)

## [21.6.0](https://github.com/MorevM/eslint-config/compare/v21.5.0...v21.6.0) (2023-03-18)


### Features

* **typescript:** Add `@typescript-eslint/lines-around-comment` rule ([99064b2](https://github.com/MorevM/eslint-config/commit/99064b26f5cd58cf4e2088cde0cd3d94e3c02fde))


### Chores

* bump eslint-plugin-jsdoc from 40.0.1 to 40.0.3 ([#406](https://github.com/MorevM/eslint-config/issues/406)) ([f01cb9c](https://github.com/MorevM/eslint-config/commit/f01cb9c930a3fd69c54a50555add1aa99e55eb4f))
* bump eslint-plugin-jsonc from 2.6.0 to 2.7.0 ([#409](https://github.com/MorevM/eslint-config/issues/409)) ([4076f83](https://github.com/MorevM/eslint-config/commit/4076f83009019bc1033f0fdf8881e6f38d665523))
* bump eslint-plugin-regexp from 1.12.0 to 1.13.0 ([#413](https://github.com/MorevM/eslint-config/issues/413)) ([7e120fd](https://github.com/MorevM/eslint-config/commit/7e120fd3af84c9ca272ba21ec4d09ddbcf444be8))
* bump typescript from 4.9.5 to 5.0.2 ([#403](https://github.com/MorevM/eslint-config/issues/403)) ([b4ab3b5](https://github.com/MorevM/eslint-config/commit/b4ab3b555216cb70f8afd61f4919d1950ffa2fb1))
* bump typescript-eslint from 5.54.1 to 5.55.0 ([e1d903b](https://github.com/MorevM/eslint-config/commit/e1d903b3c6b4354065c49f77fbb5e0a26aff3bf5))

## [21.5.0](https://github.com/MorevM/eslint-config/compare/v21.4.1...v21.5.0) (2023-03-11)


### Features

* **html:** Take account of `@html-eslint/require-attrs` rule ([6d01a71](https://github.com/MorevM/eslint-config/commit/6d01a717ffe485662e1c77052847e557bd7f8b57))


### Chores

* bump @typescript-eslint/eslint-plugin from 5.54.0 to 5.54.1 ([#395](https://github.com/MorevM/eslint-config/issues/395)) ([2932874](https://github.com/MorevM/eslint-config/commit/293287486989006afc5abdc940e6451e4a659624))
* bump @typescript-eslint/parser from 5.54.0 to 5.54.1 ([#396](https://github.com/MorevM/eslint-config/issues/396)) ([a634854](https://github.com/MorevM/eslint-config/commit/a63485410e2f31379c4a7c04606482c2c477b923))
* bump `@html-eslint` packages from 0.16.0 to 0.17.1 ([2a924e2](https://github.com/MorevM/eslint-config/commit/2a924e271b230cdcfcb0a7dcf8617ee4f0f9532a))
* bump eslint from 8.35.0 to 8.36.0 ([#394](https://github.com/MorevM/eslint-config/issues/394)) ([a6b4ef4](https://github.com/MorevM/eslint-config/commit/a6b4ef4a05d16b67b31c4cfb8a6cdcf8393d6466))
* bump jsonc-eslint-parser from 2.1.0 to 2.2.0 ([#391](https://github.com/MorevM/eslint-config/issues/391)) ([9aa6975](https://github.com/MorevM/eslint-config/commit/9aa6975bd6e15abfc5be84a1e0c9799d89f8da7a))
* bump yaml-eslint-parser from 1.1.0 to 1.2.0 ([#401](https://github.com/MorevM/eslint-config/issues/401)) ([1336f27](https://github.com/MorevM/eslint-config/commit/1336f27b2063f7d673ce7fd213ce27324dd0b564))

### [21.4.1](https://github.com/MorevM/eslint-config/compare/v21.4.0...v21.4.1) (2023-03-04)

### Chores

* bump @typescript-eslint/eslint-plugin from 5.53.0 to 5.54.0 ([#390](https://github.com/MorevM/eslint-config/issues/390)) ([7f5ba43](https://github.com/MorevM/eslint-config/commit/7f5ba43e7ae59bd7a585523e88edc296a0f534d4))
* bump @typescript-eslint/parser from 5.53.0 to 5.54.0 ([#384](https://github.com/MorevM/eslint-config/issues/384)) ([4369318](https://github.com/MorevM/eslint-config/commit/43693183bfab47b76d18c382da25739b8ebe8251))
* bump eslint from 8.34.0 to 8.35.0 ([#385](https://github.com/MorevM/eslint-config/issues/385)) ([670013a](https://github.com/MorevM/eslint-config/commit/670013addb85a1ec87a3e00b00761967ef579fc4))
* bump eslint-plugin-jsdoc from 40.0.0 to 40.0.1 ([#386](https://github.com/MorevM/eslint-config/issues/386)) ([7cad304](https://github.com/MorevM/eslint-config/commit/7cad304147fad6f67fdbeff3f2ac2ec499e7dab0))
* bump eslint-plugin-unicorn from 45.0.2 to 46.0.0 ([#389](https://github.com/MorevM/eslint-config/issues/389)) ([694b84f](https://github.com/MorevM/eslint-config/commit/694b84f866aefef7fde8749229df2e046eba9ae7))

## [21.4.0](https://github.com/MorevM/eslint-config/compare/v21.3.0...v21.4.0) (2023-02-25)


### Features

* **typescript:** Add `no-mixed-enums` rule ([ba20610](https://github.com/MorevM/eslint-config/commit/ba20610491f372811fe8415b829e687251330223))


### Chores

* bump @babel/core from 7.20.12 to 7.21.0 ([#380](https://github.com/MorevM/eslint-config/issues/380)) ([cf21017](https://github.com/MorevM/eslint-config/commit/cf21017b26795fe04979ee7691e116ca9e712cb5))
* bump @typescript-eslint from 5.52.0 to 5.53.0 ([5fe55e9](https://github.com/MorevM/eslint-config/commit/5fe55e9e56de68422c083ef19b9a32ab55a0a4f1))

## [21.3.0](https://github.com/MorevM/eslint-config/compare/v21.2.3...v21.3.0) (2023-02-18)


### Features

* **typescript:** Add `@typescript-eslint/block-spacing` rule ([a32584c](https://github.com/MorevM/eslint-config/commit/a32584cf4d411b78f52564321945f405c20fcff2))


### Chores

* bump `@typescript-eslint` from 5.51.0 to 5.52.0 ([8ca5a6d](https://github.com/MorevM/eslint-config/commit/8ca5a6dbdcf986c12cf30e149622d0b6fca6bf68))
* bump eslint-plugin-jsdoc from 39.8.0 to 40.0.0 ([#379](https://github.com/MorevM/eslint-config/issues/379)) ([a525fde](https://github.com/MorevM/eslint-config/commit/a525fde68a5bc3efe4e02c27a82c983789f5142a))

### [21.2.3](https://github.com/MorevM/eslint-config/compare/v21.2.2...v21.2.3) (2023-02-14)


### Bug fixes

* **typescript:** Disable `@typescript-eslint/no-misused-promises` ([645bf63](https://github.com/MorevM/eslint-config/commit/645bf63308ecc4af7c83e76bfa3597b0030d8e6f))

### [21.2.2](https://github.com/MorevM/eslint-config/compare/v21.2.1...v21.2.2) (2023-02-13)


### Bug fixes

* **typescript:** Disable `@typescript-eslint/no-import-type-side-effects` rule ([b9cb5a7](https://github.com/MorevM/eslint-config/commit/b9cb5a79043f73beb92529fa6a02643bef0c1d06))
* **typescript:** Disable the base `key-spacing` rule for TS files ([a4efaae](https://github.com/MorevM/eslint-config/commit/a4efaae72e5cef67ada6cf5a4d4a40eb9c555685))

### [21.2.1](https://github.com/MorevM/eslint-config/compare/v21.2.0...v21.2.1) (2023-02-13)


### Bug fixes

* **vue:** Ignore padding lines between options using Options API ([8dba95e](https://github.com/MorevM/eslint-config/commit/8dba95ecaadb74ab2f7bf214d3927546fcad634f))

## [21.2.0](https://github.com/MorevM/eslint-config/compare/v21.1.1...v21.2.0) (2023-02-11)


### Features

* **typescript:** Add `@typescript-eslint/key-spacing` rule ([c56b08e](https://github.com/MorevM/eslint-config/commit/c56b08e01c71c623f436d2a53e428c9c69772d85))
* **typescript:** Add `@typescript-eslint/no-import-type-side-effects` rule ([b4f69af](https://github.com/MorevM/eslint-config/commit/b4f69afad1bb4df7f0ba88de69eebb29985f097c))


### Bug fixes

* **vue:** Change the order of attrs in `vue/attributes-order` ([fe746fc](https://github.com/MorevM/eslint-config/commit/fe746fc32a4624a8a192f3ae189fe7906421e79e))
* **vue:** Extend special characters list with `$` and `№` chars ([38b8ad3](https://github.com/MorevM/eslint-config/commit/38b8ad3074959cbc74646e5924d7c986d0c38328))


### Chores

* bump @typescript-eslint from 5.48.2 to 5.51.0 ([d9684ba](https://github.com/MorevM/eslint-config/commit/d9684ba9a89ac4d5944a3e2c436290f2c8823b0b))
* bump @html-eslint from 0.15.0 to 0.16.0 ([#358](https://github.com/MorevM/eslint-config/issues/358)) ([bede205](https://github.com/MorevM/eslint-config/commit/bede205d88ffa2b03b8e456f3a0c75395a8e4f0f))
* bump eslint from 8.32.0 to 8.34.0 ([#373](https://github.com/MorevM/eslint-config/issues/373)) ([3e70601](https://github.com/MorevM/eslint-config/commit/3e70601f09810de115ede678e1c65944158bf7e3))
* bump eslint-plugin-jsdoc from 39.6.7 to 39.8.0 ([#367](https://github.com/MorevM/eslint-config/issues/367)) ([ec7b1be](https://github.com/MorevM/eslint-config/commit/ec7b1bea50dfb051ffe0ff7c0ad61c30860e91d2))
* bump eslint-plugin-yml from 1.4.0 to 1.5.0 ([#369](https://github.com/MorevM/eslint-config/issues/369)) ([66051c4](https://github.com/MorevM/eslint-config/commit/66051c43c6d62f73bef3c462fc2a240c0400c3d3))

### [21.1.1](https://github.com/MorevM/eslint-config/compare/v21.1.0...v21.1.1) (2023-01-21)


### Chores

* bump @typescript-eslint from 5.48.1 to 5.48.2 ([a1b6f22](https://github.com/MorevM/eslint-config/commit/a1b6f229eb9b5a7b598e4a4ec6ba052393e46f63))
* bump eslint from 8.31.0 to 8.32.0 ([#350](https://github.com/MorevM/eslint-config/issues/350)) ([973327c](https://github.com/MorevM/eslint-config/commit/973327cf200de33ef1b68ccab23680d557a316f2))
* bump eslint-plugin-import from 2.27.4 to 2.27.5 ([#352](https://github.com/MorevM/eslint-config/issues/352)) ([7820abf](https://github.com/MorevM/eslint-config/commit/7820abfe939fdc92db81a879aec5feb7f3b68af9))
* bump eslint-plugin-jsdoc from 39.6.4 to 39.6.7 ([#351](https://github.com/MorevM/eslint-config/issues/351)) ([d3b19f4](https://github.com/MorevM/eslint-config/commit/d3b19f40adff609f1ced85b0f453f651263b8d99))

### Bug fixes

* **yaml:** Disable `max-len` for `yaml` files ([8c9e631](https://github.com/MorevM/eslint-config/commit/8c9e6310fcf1f9dfa2d6ab08badc36d1456b5f47))

## [21.1.0](https://github.com/MorevM/eslint-config/compare/v21.0.0...v21.1.0) (2023-01-15)


### Features

* **base:** Add `import/consistent-type-specifier-style` rule ([4ca90a4](https://github.com/MorevM/eslint-config/commit/4ca90a434e8a75bd514e1c30a04dd872cb41a437))
* **base:** Add `import/no-empty-named-blocks` rule ([e34e87c](https://github.com/MorevM/eslint-config/commit/e34e87c56f875f7a5c27c49372610c4dd4ce8e25))
* **base:** Enable new option `considerComments` for a rule `import/newline-after-import` ([b3c4f13](https://github.com/MorevM/eslint-config/commit/b3c4f1336bd279da8d363c821649d677078aed8a))
* **base:** Take care of new option `allowUnsafeDynamicCyclicDependency` of `import/no-cycle` rule ([6686f4d](https://github.com/MorevM/eslint-config/commit/6686f4d49ef08aeba4b5fd858c6416ee4acb6796))
* **base:** Take care of the new fixer for `import/no-absolute-path` rule ([6447653](https://github.com/MorevM/eslint-config/commit/644765343de35c3ffebc180c7ed8ebfebdc0f75a))
* **vue:** Add `vue/array-element-newline` rule ([409febc](https://github.com/MorevM/eslint-config/commit/409febcdd17e46b3bcf75f7a69f9158bdce46e22))
* **vue:** Add new rule `vue/padding-lines-in-component-definition` ([dc2c5f8](https://github.com/MorevM/eslint-config/commit/dc2c5f8639a8904116c605c4dd3a2fb601438235))
* **vue:** Extend `vue/attributes-order` rule with newly added options ([dff2bee](https://github.com/MorevM/eslint-config/commit/dff2bee4e684457a81f902a15f2df7d4d3833160))


### Bug fixes

* **base:** Mark `import/no-duplicates` as autofixable since it is ([34af850](https://github.com/MorevM/eslint-config/commit/34af850898cb06621d0942a60162bb277c087d5f))
* **base:** Set severity of `import/newline-after-import` to `warn` since it's only style-related ([507a5c7](https://github.com/MorevM/eslint-config/commit/507a5c735021f5362498b342088d82960cc0f6ff))


### Refactoring

* **base:** Change the order of section/rules inside plugin `import` to fit its docs (seems alphabetical) ([a2b5219](https://github.com/MorevM/eslint-config/commit/a2b52197feccb5d74da78cbbef0a9ff162b91109))


### Chores

* bump `[@typescript-eslint](https://github.com/typescript-eslint)` from 5.48.0 to 5.48.1 ([f16e051](https://github.com/MorevM/eslint-config/commit/f16e0512506aee3f91c8f83ac36ef7cda6dcb38c))
* bump eslint-import-resolver-typescript from 3.5.2 to 3.5.3 ([#349](https://github.com/MorevM/eslint-config/issues/349)) ([6a61b84](https://github.com/MorevM/eslint-config/commit/6a61b84262ec5b116775b22a50155aaceb6277b9))
* bump eslint-plugin-import from 2.26.0 to 2.27.4 ([3ec54fd](https://github.com/MorevM/eslint-config/commit/3ec54fd7e84f9251801821509f5357c4472967e5))
* bump eslint-plugin-sonarjs from 0.17.0 to 0.18.0 ([#348](https://github.com/MorevM/eslint-config/issues/348)) ([f7c16bc](https://github.com/MorevM/eslint-config/commit/f7c16bc283b5f60759480dd1fb72d6d21e584db8))
* bump eslint-plugin-vue from 9.8.0 to 9.9.0 ([96e19c8](https://github.com/MorevM/eslint-config/commit/96e19c82723da38dad769b96d518961131296f03))

## [21.0.0](https://github.com/MorevM/eslint-config/compare/v20.0.3...v21.0.0) (2023-01-07)


### ⚠ BREAKING CHANGES

* **base:** With new rule `regexp/no-misleading-capturing-group` preset `common` and configuration `base` became more strict.

### Features

* **base:** Add `regexp/no-misleading-capturing-group` rule ([91663d2](https://github.com/MorevM/eslint-config/commit/91663d218e9a4a0c90a63a146ee6d76ed6bcd4c0))
* **jest:** Take account of `jest/no-untyped-mock-factory` rule ([7594379](https://github.com/MorevM/eslint-config/commit/7594379e4da27e1d08bee7f53368fa6ee03de5b2))


### Chores

* bump `[@typescript-eslint](https://github.com/typescript-eslint)` packages from 5.46.1 to 5.48.0 ([0d197dd](https://github.com/MorevM/eslint-config/commit/0d197ddfe6f5c4df9f70851decff4fbb8680dc73))
* bump eslint from 8.30.0 to 8.31.0 ([#330](https://github.com/MorevM/eslint-config/issues/330)) ([0669319](https://github.com/MorevM/eslint-config/commit/066931924aee7cb79c2fcfb316ceeed2454e97ec))
* bump eslint-plugin-jest from 27.1.7 to 27.2.1 ([8cbe45e](https://github.com/MorevM/eslint-config/commit/8cbe45ea8aae389a6b01745f05564112df5f33b6))
* bump eslint-plugin-jsonc from 2.5.0 to 2.6.0 ([#336](https://github.com/MorevM/eslint-config/issues/336)) ([f8b23e5](https://github.com/MorevM/eslint-config/commit/f8b23e5ad9bd72bcff6aad74a84b42280abde13b))
* bump eslint-plugin-regexp from 1.11.0 to 1.12.0 ([be4367c](https://github.com/MorevM/eslint-config/commit/be4367c1a74200d2d9181039cda191808577ccbd))
* bump eslint-plugin-yml from 1.3.0 to 1.4.0 ([#331](https://github.com/MorevM/eslint-config/issues/331)) ([6759f53](https://github.com/MorevM/eslint-config/commit/6759f53eb153f54c1d81d99b1760387a2806531b))

### [20.0.3](https://github.com/MorevM/eslint-config/compare/v20.0.2...v20.0.3) (2022-12-17)


### Bug fixes

* **base:** Turn off `no-negated-condition` rule ([ead3901](https://github.com/MorevM/eslint-config/commit/ead3901bb1e1007fa43a2ed5852ad6c714e933af))
* **typescript:** Add `ignoreDifferentlyNamedParameters` setting to `@typescript-eslint/unified-signatures` ([49222b0](https://github.com/MorevM/eslint-config/commit/49222b085233f875ef4ed056f32ecab1f169c865))
* **typescript:** Turn off `@typescript-eslint/no-confusing-void-expression` ([8187b44](https://github.com/MorevM/eslint-config/commit/8187b4402834103aaaf51893b0dd35ea2c40eb89))


### Chores

* bump @typescript-eslint/eslint-plugin from 5.45.0 to 5.46.1 ([#320](https://github.com/MorevM/eslint-config/issues/320)) ([68f597b](https://github.com/MorevM/eslint-config/commit/68f597b78cac85b0de60e3fb39d5257a02864042))
* bump @typescript-eslint/parser from 5.45.0 to 5.46.1 ([#321](https://github.com/MorevM/eslint-config/issues/321)) ([3bb359a](https://github.com/MorevM/eslint-config/commit/3bb359a8ad6d7c08b62e029bb744e90ce41fc484))
* bump eslint from 8.29.0 to 8.30.0 ([#324](https://github.com/MorevM/eslint-config/issues/324)) ([a34bc20](https://github.com/MorevM/eslint-config/commit/a34bc203e91880dac0d3275991d777614de90a1a))
* bump eslint-plugin-jest from 27.1.6 to 27.1.7 ([#325](https://github.com/MorevM/eslint-config/issues/325)) ([c65b27a](https://github.com/MorevM/eslint-config/commit/c65b27a74305ade71278e4ad99e1b20d8aadade3))
* bump eslint-plugin-sonarjs from 0.16.0 to 0.17.0 ([#316](https://github.com/MorevM/eslint-config/issues/316)) ([259fe76](https://github.com/MorevM/eslint-config/commit/259fe767e1af83522045a12016e42f3313b4929f))
* bump eslint-plugin-unicorn from 45.0.1 to 45.0.2 ([#323](https://github.com/MorevM/eslint-config/issues/323)) ([57e57b0](https://github.com/MorevM/eslint-config/commit/57e57b09012495a5d5389f1c20195d8d387ce47c))
* bump eslint-plugin-yml from 1.2.0 to 1.3.0 ([#313](https://github.com/MorevM/eslint-config/issues/313)) ([5c845a4](https://github.com/MorevM/eslint-config/commit/5c845a4b77b992a80778414d4eee3c843b73674a))

### [20.0.2](https://github.com/MorevM/eslint-config/compare/v20.0.1...v20.0.2) (2022-12-04)


### Bug fixes

* **base:** Add `vite-ignore` directive to `jsdoc/no-bad-blocks` rule ([c73d101](https://github.com/MorevM/eslint-config/commit/c73d101b9c4f8f24468cce7db912d74276ca8f33))
* **base:** Reverse `wrap-iife` rule ([a94cadb](https://github.com/MorevM/eslint-config/commit/a94cadb2bb3c95e0f81aa92ef107f1370c92a597))
* **typescript:** Disable unsafe autofix for `@typescript-eslint/method-signature-style` rule ([8ed4437](https://github.com/MorevM/eslint-config/commit/8ed44370b587f712fe69665bacf2083b5342c510))

### [20.0.1](https://github.com/MorevM/eslint-config/compare/v20.0.0...v20.0.1) (2022-12-03)


### Chores

* bump @typescript-eslint/eslint-plugin from 5.44.0 to 5.45.0 ([#310](https://github.com/MorevM/eslint-config/issues/310)) ([31b8870](https://github.com/MorevM/eslint-config/commit/31b887069dc01c6a573eb0ce8b7dd9bf50dd8d4c))
* bump @typescript-eslint/parser from 5.44.0 to 5.45.0 ([#312](https://github.com/MorevM/eslint-config/issues/312)) ([572cc11](https://github.com/MorevM/eslint-config/commit/572cc11dfe4dbef78e18c43ba94bdf387a625496))
* bump eslint from 8.28.0 to 8.29.0 ([#309](https://github.com/MorevM/eslint-config/issues/309)) ([c9d6248](https://github.com/MorevM/eslint-config/commit/c9d6248f90412f865580cb8493bf2bd579cece9e))
* bump eslint-plugin-unicorn from 45.0.0 to 45.0.1 ([#307](https://github.com/MorevM/eslint-config/issues/307)) ([1d35b4b](https://github.com/MorevM/eslint-config/commit/1d35b4b3642f7e540e99f514f9c6b7d69062c160))


### Bug fixes

* **base:** Allow to export `default` (for re-exports) ([b39e157](https://github.com/MorevM/eslint-config/commit/b39e157feb3d63a530abfe040aa4792fc4d70dfc))

## [20.0.0](https://github.com/MorevM/eslint-config/compare/v19.0.2...v20.0.0) (2022-11-26)


### ⚠ BREAKING CHANGES

* **base:** With new rule `regexp/no-extra-lookaround-assertions` preset `common` and configuration `base` became more strict.

### Features

* **base:** Add `regexp/no-extra-lookaround-assertions` rule ([5c3d67b](https://github.com/MorevM/eslint-config/commit/5c3d67ba394edfa745944ddc838ad5248af32435))
* **base:** Add `unicorn/no-negated-condition` rule ([4bce2d1](https://github.com/MorevM/eslint-config/commit/4bce2d19e3a92525eb09b78c85e97643d6b81c42))
* **base:** Add `unicorn/prefer-set-size` rule ([d1d3daf](https://github.com/MorevM/eslint-config/commit/d1d3daf4c29d45d8cbdae213e0a4e11c5ace3f61))
* **base:** Take account of `unicorn/no-typeof-undefined` rule ([3a20ce6](https://github.com/MorevM/eslint-config/commit/3a20ce68f78d6a85b7e7155ff96be94de9ffe1f2))
* **vue:** Take account of `vue/require-prop-comment` rule ([f7d71a5](https://github.com/MorevM/eslint-config/commit/f7d71a514333a3237d343d6d7e06c967545fd692))


### Documentation

* Update VSCode settings template ([310c4f4](https://github.com/MorevM/eslint-config/commit/310c4f445afd6076e9a3ffa95b1ec31acfd0c984))


### Chores

* bump [@typescript-eslint](https://github.com/typescript-eslint) packages from 5.43.0 to 5.44.0 ([8c68150](https://github.com/MorevM/eslint-config/commit/8c6815097d6ce13a3726eb8c4df41915e4e34f05))
* bump eslint-plugin-jest from 27.1.5 to 27.1.6 ([#306](https://github.com/MorevM/eslint-config/issues/306)) ([930c55d](https://github.com/MorevM/eslint-config/commit/930c55d3d8569b16640ab65dee3c0068ba401758))
* bump eslint-plugin-jsdoc from 39.6.2 to 39.6.4 ([#301](https://github.com/MorevM/eslint-config/issues/301)) ([e28dbb1](https://github.com/MorevM/eslint-config/commit/e28dbb19cb33bc7c1199780789b180591f6ed486))
* bump eslint-plugin-regexp from 1.10.0 to 1.11.0 ([eab4613](https://github.com/MorevM/eslint-config/commit/eab4613ec11e5b6520caa268905612839b70cbb6))
* bump eslint-plugin-unicorn from 44.0.2 to 45.0.0 ([d1a2a62](https://github.com/MorevM/eslint-config/commit/d1a2a6285ba130acf85b350e86d5388bd9ed6f42))
* bump eslint-plugin-vue from 9.7.0 to 9.8.0 ([f26ffb1](https://github.com/MorevM/eslint-config/commit/f26ffb1063af2b53601d5452fc62f4757da85611))

### [19.0.2](https://github.com/MorevM/eslint-config/compare/v19.0.1...v19.0.2) (2022-11-22)


### Bug fixes

* **markdown:** Disable `markdownlint/md041` rule ([b96ec06](https://github.com/MorevM/eslint-config/commit/b96ec06962a11b89d439ca4092ef84fc8be2db71))

### [19.0.1](https://github.com/MorevM/eslint-config/compare/v19.0.0...v19.0.1) (2022-11-20)


### Bug fixes

* **base:** Disable `jsdoc/text-escaping` rule ([de1499b](https://github.com/MorevM/eslint-config/commit/de1499b43bfdad6f9c965df56c05fe759b19485e))


### Chores

* bump @typescript-eslint/eslint-plugin from 5.42.1 to 5.43.0 ([#297](https://github.com/MorevM/eslint-config/issues/297)) ([9035d6c](https://github.com/MorevM/eslint-config/commit/9035d6c2804e9f95354000c1e6148f449ab4bc57))
* bump @typescript-eslint/parser from 5.42.1 to 5.43.0 ([#294](https://github.com/MorevM/eslint-config/issues/294)) ([faf7d3f](https://github.com/MorevM/eslint-config/commit/faf7d3f8801201961b6b3f92861aa96992e95467))
* bump eslint from 8.27.0 to 8.28.0 ([12817a7](https://github.com/MorevM/eslint-config/commit/12817a70980504448efe1b2c5ed4a5157e62b188))

## [19.0.0](https://github.com/MorevM/eslint-config/compare/v18.1.1...v19.0.0) (2022-11-12)


### ⚠ BREAKING CHANGES

* **base:** With new rule `regexp/no-missing-g-flag` preset `common` became more strict as well as `base` configuration.

### Features

* **base:** Add `no-empty-static-block` rule ([fd3c5ba](https://github.com/MorevM/eslint-config/commit/fd3c5babcdbca0ca4ffab1fd9c22e63029db1667))
* **base:** Add `no-new-native-nonconstructor` rule ([1e13ab4](https://github.com/MorevM/eslint-config/commit/1e13ab4739618a4ff7ffb94e9e089b1187bd4601))
* **base:** Add `regexp/no-missing-g-flag` rule ([abd6db6](https://github.com/MorevM/eslint-config/commit/abd6db6af34fa68fe6d7f4b0e1d81af24387a093))


### Chores

* bump [@typescript-eslint](https://github.com/typescript-eslint) packages from 5.42.0 to 5.42.1 ([047cd42](https://github.com/MorevM/eslint-config/commit/047cd424901c1239f1e0f01d7123c6e3a7355d6a))
* bump eslint from 8.26.0 to 8.27.0 ([b6298d5](https://github.com/MorevM/eslint-config/commit/b6298d5df123a520b8c9034a49d1a0f0f0fa26a6))
* bump eslint-plugin-jest from 27.1.4 to 27.1.5 ([#292](https://github.com/MorevM/eslint-config/issues/292)) ([a431ca1](https://github.com/MorevM/eslint-config/commit/a431ca1f5507e993d514bb12ecb0a8c6c2647f33))
* bump eslint-plugin-regexp from 1.9.0 to 1.10.0 ([f628867](https://github.com/MorevM/eslint-config/commit/f628867a41e5cd3be1ac95aa05e45b90ceb447fc))

### Refactoring

* Add comment explaining `yaml` overrides ([2f8310b](https://github.com/MorevM/eslint-config/commit/2f8310b1518b51eee0df94a8784bf553bf01426c))

### [18.1.1](https://github.com/MorevM/eslint-config/compare/v18.1.0...v18.1.1) (2022-11-05)


### Bug fixes

* **typescript:** Allow imports in type annotations ([8f361e6](https://github.com/MorevM/eslint-config/commit/8f361e6ed85e422a989746418a9f3e06907cf861))

## [18.1.0](https://github.com/MorevM/eslint-config/compare/v18.0.0...v18.1.0) (2022-11-05)


### Features

* **base:** Add `eslint-plugin-jsdoc/text-escaping` rule ([0e1a7a2](https://github.com/MorevM/eslint-config/commit/0e1a7a2c345049fa01f9bef3e64ce95a3a522331))
* **typescript:** Take account of new `@typescript-eslint/sort-type-constituents` rule ([a856273](https://github.com/MorevM/eslint-config/commit/a8562735e4157ff8195197171bdf2d40a07a7676))
* **vue:** Add `vue/multiline-ternary` rule ([e577879](https://github.com/MorevM/eslint-config/commit/e5778797be20f6b74a4c9f6973cfeccbbac11ffb))
* **vue:** Take account of `vue/v-on-handler-style` ([c6d1087](https://github.com/MorevM/eslint-config/commit/c6d1087ff30795326d9dd1a4fd3300f81a65d3e1))


### Chores

* bump eslint-plugin-jest from 27.1.3 to 27.1.4 ([#280](https://github.com/MorevM/eslint-config/issues/280)) ([5ac15b6](https://github.com/MorevM/eslint-config/commit/5ac15b66378aeb959657f4e4eb7e37b6e9aadb19))
* bump eslint-plugin-jsdoc from 39.3.25 to 39.6.2 ([7fef145](https://github.com/MorevM/eslint-config/commit/7fef1459ba85869dbcfc2e85d296106fa30f115e))
* bump eslint-plugin-vue from 9.6.0 to 9.7.0 ([99c7a8a](https://github.com/MorevM/eslint-config/commit/99c7a8a6df10f3e610af38534104448ce877ba57))
* bump `[@typescript-eslint](https://github.com/typescript-eslint)` packages from 5.41.0 to 5.42.0 ([a7940dd](https://github.com/MorevM/eslint-config/commit/a7940dd93b8f3aa58f7841bf51d02d0339b11d8b))


### Bug fixes

* **cypress:** Extend default spec paths to fit new Cypress 10 defaults ([c3b4f3c](https://github.com/MorevM/eslint-config/commit/c3b4f3c90fe40e9100ada46d0abf100cbbabff44))
* **typescript:** Remove deprecated (renamed) `@typescript-eslint/sort-type-union-intersection-members` ([2b988ba](https://github.com/MorevM/eslint-config/commit/2b988ba65eba37f4b554ee43583cc2aa1e460132))
* **vue:** Drop deprecated `vue/v-on-function-call` rule ([2ead551](https://github.com/MorevM/eslint-config/commit/2ead551e5fe9450a0328bdc42757a984d675cb6e))

## [18.0.0](https://github.com/MorevM/eslint-config/compare/v17.6.3...v18.0.0) (2022-10-29)


### ⚠ BREAKING CHANGES

* **typescript:** With new rule `@typescript-eslint/no-unsafe-declaration-merging` Typescript configuration becomes more strict as well as presets `common` and `typescript`.
* **json:** With new rule `jsonc/no-irregular-whitespace` presets `common` and `assistive` becomes more strict as well as `json` configuration.

### Features

* **json:** Add `jsonc/no-irregular-whitespace` rule ([2b29e49](https://github.com/MorevM/eslint-config/commit/2b29e491e22623ffecc290f5c74a92e7890f28f4))
* **typescript:** Add `@typescript-eslint/no-unsafe-declaration-merging` rule ([eaa2737](https://github.com/MorevM/eslint-config/commit/eaa2737afac33f7eed49ceaf9305097d6be75c9f))


### Chores

* bump [@typescript-eslint](https://github.com/typescript-eslint) packages from 5.40.1 to 5.41.0 ([116a9f7](https://github.com/MorevM/eslint-config/commit/116a9f7480f9858c4e12e51c2d86fd8ebafd2d1c))
* bump eslint-plugin-jsdoc from 39.3.14 to 39.3.25 ([#276](https://github.com/MorevM/eslint-config/issues/276)) ([9d3ae44](https://github.com/MorevM/eslint-config/commit/9d3ae448a2ba3f8b651ab1aea127062d6a4e21bd))
* bump eslint-plugin-jsonc from 2.4.0 to 2.5.0 ([b5bce4a](https://github.com/MorevM/eslint-config/commit/b5bce4a261cda59d21f2fdf7028f7ea5073d344d))

### [17.6.3](https://github.com/MorevM/eslint-config/compare/v17.6.2...v17.6.3) (2022-10-25)


### Chores

* bump @typescript-eslint/eslint-plugin from 5.40.0 to 5.40.1 ([#267](https://github.com/MorevM/eslint-config/issues/267)) ([0b4bf66](https://github.com/MorevM/eslint-config/commit/0b4bf661986d8bf3897bda25de8f25a779242b93))
* bump @typescript-eslint/parser from 5.40.0 to 5.40.1 ([#269](https://github.com/MorevM/eslint-config/issues/269)) ([70af2f6](https://github.com/MorevM/eslint-config/commit/70af2f695520c59171dcd66227a5c67b958691cc))
* bump eslint from 8.25.0 to 8.26.0 ([#272](https://github.com/MorevM/eslint-config/issues/272)) ([6612d9f](https://github.com/MorevM/eslint-config/commit/6612d9ffe654bf730f9a3c16c1c0f4f4f7e0b242))
* bump eslint-import-resolver-typescript from 3.5.1 to 3.5.2 ([#274](https://github.com/MorevM/eslint-config/issues/274)) ([24a5c05](https://github.com/MorevM/eslint-config/commit/24a5c05c8a45345f47bba70b07a22632a5df3329))
* bump eslint-plugin-jest from 27.1.2 to 27.1.3 ([#271](https://github.com/MorevM/eslint-config/issues/271)) ([9c3167e](https://github.com/MorevM/eslint-config/commit/9c3167ebdf7b58cad34887e49e3134bfe864309f))
* bump eslint-plugin-jsdoc from 39.3.6 to 39.3.14 ([#273](https://github.com/MorevM/eslint-config/issues/273)) ([4efe87d](https://github.com/MorevM/eslint-config/commit/4efe87d0069f5f25ed501b1cb65ad97084ed1e23))

### [17.6.2](https://github.com/MorevM/eslint-config/compare/v17.6.1...v17.6.2) (2022-10-17)


### Chores

* bump @typescript-eslint/eslint-plugin from 5.39.0 to 5.40.0 ([#266](https://github.com/MorevM/eslint-config/issues/266)) ([f3f3fca](https://github.com/MorevM/eslint-config/commit/f3f3fcad6978c305d578889674ad086830b2a49f))
* bump @typescript-eslint/parser from 5.39.0 to 5.40.0 ([#265](https://github.com/MorevM/eslint-config/issues/265)) ([0fbaaea](https://github.com/MorevM/eslint-config/commit/0fbaaea25908a228ecf046bef9a6ed3b0a9f76f0))
* bump eslint from 8.24.0 to 8.25.0 ([#261](https://github.com/MorevM/eslint-config/issues/261)) ([d39f6c4](https://github.com/MorevM/eslint-config/commit/d39f6c49b1bb01bad032ee8e9aadb5737130b1d2))
* bump eslint-plugin-jest from 27.1.0 to 27.1.2 ([#262](https://github.com/MorevM/eslint-config/issues/262)) ([863be36](https://github.com/MorevM/eslint-config/commit/863be36633a2bac92dba127db432e5c1cce6ee0a))
* bump eslint-plugin-sonarjs from 0.15.0 to 0.16.0 ([#264](https://github.com/MorevM/eslint-config/issues/264)) ([bc38c4e](https://github.com/MorevM/eslint-config/commit/bc38c4e1c94312a13d1b3f3dcc62e16ae2212739))
* bump eslint-plugin-unicorn from 44.0.1 to 44.0.2 ([#259](https://github.com/MorevM/eslint-config/issues/259)) ([094e1ba](https://github.com/MorevM/eslint-config/commit/094e1ba91d59b384d8bfdca752dc2d0f7c7ce38d))


### Bug fixes

* **base:** Prefer ternary operator only for single-line statements ([3b25e4a](https://github.com/MorevM/eslint-config/commit/3b25e4a4330b5b825ea0a61f2f740944ba52a650))

### [17.6.1](https://github.com/MorevM/eslint-config/compare/v17.6.0...v17.6.1) (2022-10-07)


### Bug fixes

* **base:** Ignore external deps in `import/no-cycle` due to performance issues ([b1b9cc0](https://github.com/MorevM/eslint-config/commit/b1b9cc0ba456bde2ae72c6fdd4cc93d462e3d38c))
* Explicit `node_modules` ignorance with `import/ignore` for all entities ([aa6ef85](https://github.com/MorevM/eslint-config/commit/aa6ef85e5ae728d76fa98306bda5eee0f4bd3708))

## [17.6.0](https://github.com/MorevM/eslint-config/compare/v17.5.0...v17.6.0) (2022-10-06)


### Features

* **jest:** Take account of of `no-restricted-jest-methods` rule ([ba1d328](https://github.com/MorevM/eslint-config/commit/ba1d328425c574afdbe36c20d16f471053cbe23f))
* **vue:** Add `no-required-prop-with-default` rule ([25651d8](https://github.com/MorevM/eslint-config/commit/25651d8186ae71f2e0fab6be9e8a23cd7398352d))


### Chores

* Regenerate lockfile ([bbe0ec2](https://github.com/MorevM/eslint-config/commit/bbe0ec28fb107b29df8ae1925db91ccd1eed6254))


### Bug fixes

* **typescript:** Correct imports resolving by installing `eslint-import-resolver-typescript` ([dfd628d](https://github.com/MorevM/eslint-config/commit/dfd628d41ec13d0d787bc03029090f051628b1bb))

## [17.5.0](https://github.com/MorevM/eslint-config/compare/v17.4.3...v17.5.0) (2022-10-05)


### Features

* **typescript:** Add support for path aliases resolving ([519f0ee](https://github.com/MorevM/eslint-config/commit/519f0eee3f982362ce2b1f142cd5082c02ed35b7))
* **vue:** Add different parsers for `lang="ts"` and just `<script>` ([7014ed6](https://github.com/MorevM/eslint-config/commit/7014ed6f44650d39a98c09c82559221c746b5397))


### Bug fixes

* **typescript:** Disable `func-call-spacing` rule for `.ts` files ([779bb3a](https://github.com/MorevM/eslint-config/commit/779bb3ac37a658ea0ab853ba3b6081bde7e9baa2))
* **typescript:** Disable `no-undef` rule for `.ts` files ([dc90081](https://github.com/MorevM/eslint-config/commit/dc9008164a9a4f201fd0c561ca6d4ac2cc8b6c0d))
* **typescript:** Disable `no-unused-vars` rule for `.ts` files ([dbd8fbc](https://github.com/MorevM/eslint-config/commit/dbd8fbc6f483db8ed4603bdb275d07e1c5ac78e5))

### [17.4.3](https://github.com/MorevM/eslint-config/compare/v17.4.2...v17.4.3) (2022-10-04)


### Bug fixes

* **typescript:** Allow leading/trailing underscores in type/interface names ([e748183](https://github.com/MorevM/eslint-config/commit/e748183da16c2df3d28fa180b4b24abc0ced56bb))

### [17.4.2](https://github.com/MorevM/eslint-config/compare/v17.4.1...v17.4.2) (2022-10-04)


### Bug fixes

* **base:** Avoid braces in switch statements (`unicorn/switch-case-braces`) ([8afecc3](https://github.com/MorevM/eslint-config/commit/8afecc3e95b35505fe92575299b6e20153fff9ef))

### [17.4.1](https://github.com/MorevM/eslint-config/compare/v17.4.0...v17.4.1) (2022-10-03)


### Bug fixes

* **base:** Disable `regexp/no-super-linear-backtracking` rule ([4b73de4](https://github.com/MorevM/eslint-config/commit/4b73de4cc97982404c37c4490b545362fd26716e))

## [17.4.0](https://github.com/MorevM/eslint-config/compare/v17.3.1...v17.4.0) (2022-10-01)


### Features

* **base:** Add `unicorn/no-unnecessary-await` rule ([267e61d](https://github.com/MorevM/eslint-config/commit/267e61d3c997ac9cd524aa0ba89a166c3949e4d2))
* **base:** Add `unicorn/switch-case-braces` rule ([e74e79c](https://github.com/MorevM/eslint-config/commit/e74e79cbaebc2569a936498d87cfb1b9faf370eb))
* **html:** Add `@html-eslint/no-trailing-spaces` rule ([8c7ca16](https://github.com/MorevM/eslint-config/commit/8c7ca1675c8205b00085dea59b9dcd89e681b021))
* **html:** Enforce a space before self-closing ([98f299a](https://github.com/MorevM/eslint-config/commit/98f299a11e6330fb21e562eda6c11b5ba1b3a0ba))
* **html:** Enforce self-closing tag on custom elements ([dcf5bd3](https://github.com/MorevM/eslint-config/commit/dcf5bd3dadbda76452eb42f743528f3decca3462))


### Chores

* bump @babel/core from 7.19.1 to 7.19.3 ([#250](https://github.com/MorevM/eslint-config/issues/250)) ([cf1e103](https://github.com/MorevM/eslint-config/commit/cf1e103f19371ede25c348ef0fb02675a8977591))
* bump @html-eslint/eslint-plugin from 0.14.1 to 0.15.0 ([1f66999](https://github.com/MorevM/eslint-config/commit/1f66999b5f07a8b65d03c9f93cf51822fc8ce040))
* bump @html-eslint/parser from 0.14.0 to 0.15.0 ([#255](https://github.com/MorevM/eslint-config/issues/255)) ([c0ae2a1](https://github.com/MorevM/eslint-config/commit/c0ae2a166ef147375ddc31351295246d1023de22))
* bump @typescript-eslint/eslint-plugin from 5.38.0 to 5.38.1 ([#249](https://github.com/MorevM/eslint-config/issues/249)) ([eb4b94e](https://github.com/MorevM/eslint-config/commit/eb4b94e6625dbff61430f5e524e97614a8047c64))
* bump @typescript-eslint/parser from 5.38.0 to 5.38.1 ([#252](https://github.com/MorevM/eslint-config/issues/252)) ([a66aaf5](https://github.com/MorevM/eslint-config/commit/a66aaf55fe0630339394fc29b12219a4dbe5f5e6))
* bump eslint-plugin-unicorn from 43.0.2 to 44.0.0 ([60f3a94](https://github.com/MorevM/eslint-config/commit/60f3a94ee473d2b8a1e208ac537ad5cb60bfc1b9))
* bump jest and @types/jest ([#253](https://github.com/MorevM/eslint-config/issues/253)) ([e79d29a](https://github.com/MorevM/eslint-config/commit/e79d29af2eac31fcce1ed0acffc9b5e5d6720a8e))
* bump typescript from 4.8.3 to 4.8.4 ([#251](https://github.com/MorevM/eslint-config/issues/251)) ([a3de2e3](https://github.com/MorevM/eslint-config/commit/a3de2e3773a20a79fe467ec06e219c502bd4dc35))

### [17.3.1](https://github.com/MorevM/eslint-config/compare/v17.3.0...v17.3.1) (2022-09-25)


### Bug fixes

* **jest:** Disable `require-to-throw-message` rule ([013bd08](https://github.com/MorevM/eslint-config/commit/013bd08ace26e514aef6ad8c2abbda3823cc8230))

## [17.3.0](https://github.com/MorevM/eslint-config/compare/v17.2.1...v17.3.0) (2022-09-24)


### Features

* **base:** Take account of `logical-assignment-operators` rule ([6496c29](https://github.com/MorevM/eslint-config/commit/6496c29f089a88f15ac0b2cbe23cc0a1990215da))


### Chores

* bump @typescript-eslint/eslint-plugin from 5.37.0 to 5.38.0 ([#245](https://github.com/MorevM/eslint-config/issues/245)) ([efc5e20](https://github.com/MorevM/eslint-config/commit/efc5e20153361c16a3d031b3ae837e783740c646))
* bump @typescript-eslint/parser from 5.37.0 to 5.38.0 ([#246](https://github.com/MorevM/eslint-config/issues/246)) ([ef94c46](https://github.com/MorevM/eslint-config/commit/ef94c4614954fd85db8dfeaae5b761b2bd5ce4ee))
* bump eslint from 8.23.1 to 8.24.0 ([9c44cef](https://github.com/MorevM/eslint-config/commit/9c44ceff250757ad3ee7e41388f8a77da4634bae))

### [17.2.1](https://github.com/MorevM/eslint-config/compare/v17.2.0...v17.2.1) (2022-09-19)


### Bug fixes

* **typescript:** Turn off `@typescript-eslint/no-non-null-assertion` rule ([47f6310](https://github.com/MorevM/eslint-config/commit/47f63100022b2d714fc8b34f79d257435a810272))

## [17.2.0](https://github.com/MorevM/eslint-config/compare/v17.1.1...v17.2.0) (2022-09-18)


### Features

* **vue:** Add `vue/define-emits-declaration` rule ([835c365](https://github.com/MorevM/eslint-config/commit/835c365419a7c75c34d75061230fa9a9dca5c4ff))
* **vue:** Add `vue/define-props-declaration` rule ([5465c2d](https://github.com/MorevM/eslint-config/commit/5465c2d68a1ffea9556e199337c894b89d998d16))
* **vue:** Add `vue/no-ref-object-destructure` rule ([1815a99](https://github.com/MorevM/eslint-config/commit/1815a997342b4822f37621c598d69fff7c358829))
* **vue:** Add `vue/padding-line-between-tags` rule ([318a660](https://github.com/MorevM/eslint-config/commit/318a660abd6ad3c5c1c4a312be0dedd69c0fc7b6))


### Bug fixes

* **yaml:** Ignore `.yaml` file extension for some environments ([36b6f91](https://github.com/MorevM/eslint-config/commit/36b6f9154981bd02df96aebb1a2825eb8fbd80d1))


### Chores

* bump @babel/core from 7.19.0 to 7.19.1 ([#243](https://github.com/MorevM/eslint-config/issues/243)) ([96982d7](https://github.com/MorevM/eslint-config/commit/96982d7cc3b1abe09eee030b50b3bf8033bb8fbe))
* bump @babel/eslint-parser from 7.18.9 to 7.19.1 ([#235](https://github.com/MorevM/eslint-config/issues/235)) ([6fa6626](https://github.com/MorevM/eslint-config/commit/6fa66266d0d03f388f2257a78ea5eddeffb38d8c))
* bump @html-eslint/eslint-plugin from 0.13.2 to 0.14.1 ([#233](https://github.com/MorevM/eslint-config/issues/233)) ([e8530fb](https://github.com/MorevM/eslint-config/commit/e8530fb14bbf62de821f9593b2992bc5302cef4d))
* bump @html-eslint/parser from 0.13.2 to 0.14.0 ([#236](https://github.com/MorevM/eslint-config/issues/236)) ([c43ef0f](https://github.com/MorevM/eslint-config/commit/c43ef0fdf239be9dbf169d665fceb9a559a99223))
* bump @typescript-eslint/eslint-plugin from 5.36.2 to 5.37.0 ([#242](https://github.com/MorevM/eslint-config/issues/242)) ([0451475](https://github.com/MorevM/eslint-config/commit/0451475db779ed891f8ac7a409e59a758f14030b))
* bump @typescript-eslint/parser from 5.36.2 to 5.37.0 ([#234](https://github.com/MorevM/eslint-config/issues/234)) ([aa1154d](https://github.com/MorevM/eslint-config/commit/aa1154d186c54ac9bf5ba38a739bf92d0d37ee19))
* bump eslint from 8.23.0 to 8.23.1 ([#241](https://github.com/MorevM/eslint-config/issues/241)) ([d19642a](https://github.com/MorevM/eslint-config/commit/d19642ae984504a85f9ec10062013b019fc7e1f8))
* bump eslint-plugin-jest from 27.0.3 to 27.0.4 ([#244](https://github.com/MorevM/eslint-config/issues/244)) ([d15b451](https://github.com/MorevM/eslint-config/commit/d15b451cd7a4a6a14bde9fc85d71c5d9b760b761))
* bump eslint-plugin-vue from 9.4.0 to 9.5.1 ([a6ff8ed](https://github.com/MorevM/eslint-config/commit/a6ff8ed4add94d9caf56fbf19733c0834b442153))
* bump jest and @types/jest ([#240](https://github.com/MorevM/eslint-config/issues/240)) ([4c7a32e](https://github.com/MorevM/eslint-config/commit/4c7a32ed5b97d359a16e3bb628beca3ec2d163a8))
* bump release-it from 15.4.1 to 15.4.2 ([#237](https://github.com/MorevM/eslint-config/issues/237)) ([230af28](https://github.com/MorevM/eslint-config/commit/230af2872626d52f789a0d5f2d208d8b3539eaba))

### [17.1.1](https://github.com/MorevM/eslint-config/compare/v17.1.0...v17.1.1) (2022-09-10)


### Bug fixes

* **base:** Disable `unicorn/better-regex` sorting ([b93f727](https://github.com/MorevM/eslint-config/commit/b93f727f88ee09e7d241128206b0d6490195c6f4))
* **base:** Turn of the `regexp/strict` rule ([77481af](https://github.com/MorevM/eslint-config/commit/77481aff40495693ff9b23ded3ae99fec5e2a4b7))
* **base:** Turn off `regexp/no-obscure-range` rule ([92162bd](https://github.com/MorevM/eslint-config/commit/92162bd606cf7bbd546de014eb426a934d2b6d40))
* **base:** Turn off `regexp/no-super-linear-move` rule ([d766156](https://github.com/MorevM/eslint-config/commit/d7661562d4a0c41bc896bad32fcf1dbf3d8866fd))

## [17.1.0](https://github.com/MorevM/eslint-config/compare/v17.0.1...v17.1.0) (2022-09-10)


### Features

* **yaml:** Add `yml/block-mapping-colon-indicator-newline` rule ([4dfe4b4](https://github.com/MorevM/eslint-config/commit/4dfe4b494c2c037d30ecfdc776e6094f5e5fc044))
* **yaml:** Add `yml/file-extension` rule ([2c27208](https://github.com/MorevM/eslint-config/commit/2c27208cf39967eacff67c0b4926260fab43b3a4))


### Chores

* bump @babel/core from 7.18.13 to 7.19.0 ([#229](https://github.com/MorevM/eslint-config/issues/229)) ([61947e2](https://github.com/MorevM/eslint-config/commit/61947e28003a7e822ecc976be3e5f8ab00c878e4))
* bump @typescript-eslint/eslint-plugin from 5.36.1 to 5.36.2 ([d76dc12](https://github.com/MorevM/eslint-config/commit/d76dc120f11b07c348d19ab0efb94ff69c2bc972))
* bump @typescript-eslint/parser from 5.36.1 to 5.36.2 ([#225](https://github.com/MorevM/eslint-config/issues/225)) ([ee721dc](https://github.com/MorevM/eslint-config/commit/ee721dc03113077b8536b830ad2a66ce486e08a9))
* bump eslint-plugin-jest from 27.0.1 to 27.0.3 ([#231](https://github.com/MorevM/eslint-config/issues/231)) ([32eb999](https://github.com/MorevM/eslint-config/commit/32eb999f3d1936b93871e0becfbf807d0dd9315f))
* bump eslint-plugin-yml from 1.1.0 to 1.2.0 ([724c9bf](https://github.com/MorevM/eslint-config/commit/724c9bf417e081cd90140301194dc26add025871))
* bump jest from 29.0.1 to 29.0.2 ([#232](https://github.com/MorevM/eslint-config/issues/232)) ([ea93e79](https://github.com/MorevM/eslint-config/commit/ea93e79d410e5b8dadecc31311724cfd8fabbb2d))
* bump typescript from 4.8.2 to 4.8.3 ([#227](https://github.com/MorevM/eslint-config/issues/227)) ([161150f](https://github.com/MorevM/eslint-config/commit/161150fef356e3f9d1277151effc5cacc52c6bec))
* bump vue-eslint-parser from 9.0.3 to 9.1.0 ([#228](https://github.com/MorevM/eslint-config/issues/228)) ([1dd37d8](https://github.com/MorevM/eslint-config/commit/1dd37d822b28af6e60bd96324a1680990c309c2c))

### [17.0.1](https://github.com/MorevM/eslint-config/compare/v17.0.0...v17.0.1) (2022-09-04)


### Bug fixes

* **base:** Turn off the `require-atomic-updates` rule ([148f7cd](https://github.com/MorevM/eslint-config/commit/148f7cd883652bd43df9fd5f42156ed5d0d93b74))

## [17.0.0](https://github.com/MorevM/eslint-config/compare/v16.0.0...v17.0.0) (2022-09-04)


### ⚠ BREAKING CHANGES

* Preset `common` and `base` configuration became more strict.

### Features

* Add `eslint-plugin-regexp` ([6f988d5](https://github.com/MorevM/eslint-config/commit/6f988d53bab9aaa6444e7b52c9d08e5f1337b7c5))


### Refactoring

* Relint files after last update ([26dd361](https://github.com/MorevM/eslint-config/commit/26dd361cf4175092451c505499370acab08b17a3))

## [16.0.0](https://github.com/MorevM/eslint-config/compare/v15.4.0...v16.0.0) (2022-09-02)


### ⚠ BREAKING CHANGES

* **jest:** With new `jest/prefer-each` rule `jest` configuration and `common` and `jest` presets becomes more strict.

### Features

* **jest:** Add `jest/prefer-each` rule introduced in 26.9.9 ([f076f97](https://github.com/MorevM/eslint-config/commit/f076f9755489a21152971a6353bd5bd74dfe090d))


### Bug fixes

* **jest:** Remove `jest/no-jest-import` rule which no longer exists since 29.0.0 ([f4f4e66](https://github.com/MorevM/eslint-config/commit/f4f4e6612ca42ab9777b44dde367e4f8a69d4be8))
* **jest:** Turn off the `jest/unbound-method` rule ([cc3147e](https://github.com/MorevM/eslint-config/commit/cc3147e8dc3343841ccddaaa75a18e3118ed9dbb))
* **typescript:** Disable `no-floating-promises` rule ([f565e0a](https://github.com/MorevM/eslint-config/commit/f565e0a41237d4332640344170f7c42a956a0996))
* **typescript:** Disable `promise-function-async` rule ([62ae987](https://github.com/MorevM/eslint-config/commit/62ae9871c2f0989a9cf21104cf8d2a17a7835097))


### Chores

* bump @types/jest from 28.1.8 to 29.0.0 ([#221](https://github.com/MorevM/eslint-config/issues/221)) ([2ef00ef](https://github.com/MorevM/eslint-config/commit/2ef00ef9e83483773ef75a747dd48e8c655c601e))
* bump @typescript-eslint/eslint-plugin from 5.35.1 to 5.36.1 ([#223](https://github.com/MorevM/eslint-config/issues/223)) ([47e93c1](https://github.com/MorevM/eslint-config/commit/47e93c195972c56cb332975d870b50bc3a1719f3))
* bump @typescript-eslint/parser from 5.35.1 to 5.36.1 ([#224](https://github.com/MorevM/eslint-config/issues/224)) ([5b9280d](https://github.com/MorevM/eslint-config/commit/5b9280d3533777166903d2ddce108fb05b7eecfd))
* bump eslint-plugin-jest from 26.8.7 to 27.0.1 ([9eef14c](https://github.com/MorevM/eslint-config/commit/9eef14c090aed00c8132e49612d8f03aeb337a30))
* bump release-it from 15.4.0 to 15.4.1 ([#222](https://github.com/MorevM/eslint-config/issues/222)) ([453e017](https://github.com/MorevM/eslint-config/commit/453e0172dd4b2f5f503aef37a2ab9ddf1a652484))
* Change the order of `release-it` hooks ([e48e4fd](https://github.com/MorevM/eslint-config/commit/e48e4fd4044e344a62a8d721dffd39598f59a90c))

## [15.4.0](https://github.com/MorevM/eslint-config/compare/v15.3.0...v15.4.0) (2022-08-27)


### Features

* **base:** Add `allowEmptyCase` option to `no-fallthrough` rule ([c2b9480](https://github.com/MorevM/eslint-config/commit/c2b94805f1b31e1087b4697cab25a68bd3926252))


### Chores

* bump @babel/core from 7.18.10 to 7.18.13 ([8b55b59](https://github.com/MorevM/eslint-config/commit/8b55b5948fe7e474b915f614c7d71cf5d572ae5f))
* bump @eslint/eslintrc from 1.3.0 to 1.3.1 ([#219](https://github.com/MorevM/eslint-config/issues/219)) ([3fbac85](https://github.com/MorevM/eslint-config/commit/3fbac8565e6c0cd0ba026172ca758ae35cd3a02b))
* bump @release-it/conventional-changelog from 5.0.0 to 5.1.0 ([#206](https://github.com/MorevM/eslint-config/issues/206)) ([9cf1256](https://github.com/MorevM/eslint-config/commit/9cf1256ceac15b5edd010eeca1497ed7febbe518))
* bump @types/jest from 28.1.6 to 28.1.7 ([#207](https://github.com/MorevM/eslint-config/issues/207)) ([bef27a4](https://github.com/MorevM/eslint-config/commit/bef27a4589b5a96ced8f253eb0ac0e014ac06084))
* bump @types/jest from 28.1.7 to 28.1.8 ([e165ac5](https://github.com/MorevM/eslint-config/commit/e165ac545ef9f01bc9a440b26551fb0e513cbb19))
* bump @typescript-eslint/eslint-plugin from 5.33.0 to 5.33.1 ([#209](https://github.com/MorevM/eslint-config/issues/209)) ([e87aafe](https://github.com/MorevM/eslint-config/commit/e87aafe75b2f96d5fce8496a418f8227e48212cb))
* bump @typescript-eslint/eslint-plugin from 5.33.1 to 5.35.1 ([#217](https://github.com/MorevM/eslint-config/issues/217)) ([7cced1e](https://github.com/MorevM/eslint-config/commit/7cced1e27e7544789fb51056c0d9e506b0acc075))
* bump @typescript-eslint/parser from 5.33.0 to 5.33.1 ([#208](https://github.com/MorevM/eslint-config/issues/208)) ([7ee9669](https://github.com/MorevM/eslint-config/commit/7ee96698fe3871769e150fb8d4d1861734c57ebb))
* bump @typescript-eslint/parser from 5.33.1 to 5.35.1 ([ef375d6](https://github.com/MorevM/eslint-config/commit/ef375d656654066d59adc111919fb1cad01a9a2f))
* bump eslint from 8.21.0 to 8.22.0 ([#203](https://github.com/MorevM/eslint-config/issues/203)) ([693b0ad](https://github.com/MorevM/eslint-config/commit/693b0ad59a6e909f988b61f75f019084a47b1b54))
* bump eslint from 8.22.0 to 8.23.0 ([#213](https://github.com/MorevM/eslint-config/issues/213)) ([7abacde](https://github.com/MorevM/eslint-config/commit/7abacde4db93a0e75d6faa6401f2f6c4ddf97f0a))
* bump eslint-plugin-jest from 26.7.0 to 26.8.2 ([#199](https://github.com/MorevM/eslint-config/issues/199)) ([9e18bab](https://github.com/MorevM/eslint-config/commit/9e18bab1b4b0cfcdda4b7ec19558bc348a4efb41))
* bump eslint-plugin-jest from 26.8.2 to 26.8.4 ([#204](https://github.com/MorevM/eslint-config/issues/204)) ([6a7316c](https://github.com/MorevM/eslint-config/commit/6a7316cef60c3022870d66c5812b37afc80b5a07))
* bump eslint-plugin-jest from 26.8.4 to 26.8.7 ([#215](https://github.com/MorevM/eslint-config/issues/215)) ([55c059d](https://github.com/MorevM/eslint-config/commit/55c059de6894628f7dc8dac9783ff02e8a72b650))
* bump eslint-plugin-jsdoc from 39.3.4 to 39.3.6 ([#202](https://github.com/MorevM/eslint-config/issues/202)) ([20d3a2d](https://github.com/MorevM/eslint-config/commit/20d3a2df139361fc45fbad535d182c4aebc7051e))
* bump eslint-plugin-jsonc from 2.3.1 to 2.4.0 ([#205](https://github.com/MorevM/eslint-config/issues/205)) ([95ab592](https://github.com/MorevM/eslint-config/commit/95ab5928ac1269d476db3ae1688b3c18cfdb43db))
* bump eslint-plugin-sonarjs from 0.14.0 to 0.15.0 ([#201](https://github.com/MorevM/eslint-config/issues/201)) ([42af0ea](https://github.com/MorevM/eslint-config/commit/42af0ea7e799b006f65fe4718179fd193c046dab))
* bump eslint-plugin-vue from 9.3.0 to 9.4.0 ([#211](https://github.com/MorevM/eslint-config/issues/211)) ([5b38971](https://github.com/MorevM/eslint-config/commit/5b38971ec2d77c8ce2c2a5c52e0bdfe1412df7d5))
* bump jest from 28.1.3 to 29.0.1 ([0eb3bc8](https://github.com/MorevM/eslint-config/commit/0eb3bc8061f39b20b20bdc035c5afcbc3246e8f5))
* bump release-it from 15.2.0 to 15.3.0 ([#200](https://github.com/MorevM/eslint-config/issues/200)) ([2445bba](https://github.com/MorevM/eslint-config/commit/2445bba9e71932d19d5826acf15df14c20649943))
* bump release-it from 15.3.0 to 15.4.0 ([#210](https://github.com/MorevM/eslint-config/issues/210)) ([1739e36](https://github.com/MorevM/eslint-config/commit/1739e36351e00329b3f9e39422206b74c62b7ced))
* bump typescript from 4.7.4 to 4.8.2 ([#212](https://github.com/MorevM/eslint-config/issues/212)) ([b5dd326](https://github.com/MorevM/eslint-config/commit/b5dd32615608c8aa2bade6dabb34f7ce0a8db7f9))

## [15.3.0](https://github.com/MorevM/eslint-config/compare/v15.2.1...v15.3.0) (2022-08-09)


### Features

* **package.json:** Add support for yarn `resolutions` field ([bb7cb6c](https://github.com/MorevM/eslint-config/commit/bb7cb6c7f86d980e88d4624fcf56c51837de129b))

### [15.2.1](https://github.com/MorevM/eslint-config/compare/v15.2.0...v15.2.1) (2022-08-09)


### Chores

* bump @babel/core from 7.18.9 to 7.18.10 ([#195](https://github.com/MorevM/eslint-config/issues/195)) ([9abfb9f](https://github.com/MorevM/eslint-config/commit/9abfb9f9a199895363ffe68ba1732f8432a6b127))
* bump `[@typescript-eslint](https://github.com/typescript-eslint)` from 5.31.0 to 5.33.0 ([599339a](https://github.com/MorevM/eslint-config/commit/599339a909960c385d84732deae5eb55ca54899c))
* bump eslint from 8.20.0 to 8.21.0 ([#198](https://github.com/MorevM/eslint-config/issues/198)) ([84a7045](https://github.com/MorevM/eslint-config/commit/84a7045ee6d9b9f1ec311ce351fecdeab8e74e09))


### Bug fixes

* **typescript:** Extend `no-use-before-define` from base config ([e0618c9](https://github.com/MorevM/eslint-config/commit/e0618c95c482fdd4c9c87928841117f96da46570))

## [15.2.0](https://github.com/MorevM/eslint-config/compare/v15.1.0...v15.2.0) (2022-07-30)


### Features

* **jest:** Add `jest/prefer-mock-promise-shorthand` rule ([45fa775](https://github.com/MorevM/eslint-config/commit/45fa7754025fc3a9f31336ab2e0c98662be476c3))


### Chores

* bump @typescript-eslint/eslint-plugin from 5.30.7 to 5.31.0 ([#192](https://github.com/MorevM/eslint-config/issues/192)) ([945df04](https://github.com/MorevM/eslint-config/commit/945df04b83fa6dbe2eeb5b9f083eda188bf6846f))
* bump @typescript-eslint/parser from 5.30.7 to 5.31.0 ([#191](https://github.com/MorevM/eslint-config/issues/191)) ([a37c76f](https://github.com/MorevM/eslint-config/commit/a37c76ffcb74b2eaef17b87e88951846a39cabee))
* bump eslint-plugin-jest from 26.6.0 to 26.7.0 ([e8a839f](https://github.com/MorevM/eslint-config/commit/e8a839f48f250e1f6c354012db0c9fe26088ba8c))
* bump eslint-plugin-jsdoc from 39.3.3 to 39.3.4 ([#188](https://github.com/MorevM/eslint-config/issues/188)) ([99fb38a](https://github.com/MorevM/eslint-config/commit/99fb38a3cf4fc57297cd3ea8a0f0c6ee4772888d))
* bump eslint-plugin-vue from 9.2.0 to 9.3.0 ([#194](https://github.com/MorevM/eslint-config/issues/194)) ([ddd35f9](https://github.com/MorevM/eslint-config/commit/ddd35f95d7f93abeaacbca1c24d7f71bd43fd149))
* bump eslint-plugin-yml from 1.0.0 to 1.1.0 ([#190](https://github.com/MorevM/eslint-config/issues/190)) ([d56c7a6](https://github.com/MorevM/eslint-config/commit/d56c7a6fd2d857d4619be6c78c5efeec5fd8dd2f))
* bump release-it from 15.1.3 to 15.2.0 ([#187](https://github.com/MorevM/eslint-config/issues/187)) ([2d61f61](https://github.com/MorevM/eslint-config/commit/2d61f61fcf48c208baca11633c6229754d82b2f8))

## [15.1.0](https://github.com/MorevM/eslint-config/compare/v15.0.0...v15.1.0) (2022-07-23)


### Features

* **typescript:** Disable `no-duplicate-imports` for TS files ([7596213](https://github.com/MorevM/eslint-config/commit/7596213e70bceab9031c986a2af163d77aa0933a))


### Chores

* bump @babel/core from 7.18.6 to 7.18.9 ([#179](https://github.com/MorevM/eslint-config/issues/179)) ([02674b5](https://github.com/MorevM/eslint-config/commit/02674b540680dbb93f9fe2e64125f7fcfe5c1ecd))
* bump @babel/eslint-parser from 7.18.2 to 7.18.9 ([#184](https://github.com/MorevM/eslint-config/issues/184)) ([1d5ffb4](https://github.com/MorevM/eslint-config/commit/1d5ffb4d35fb51a53266b397d2ae126fa0c0f63a))
* bump @typescript-eslint/eslint-plugin from 5.30.6 to 5.30.7 ([#183](https://github.com/MorevM/eslint-config/issues/183)) ([8f49fa2](https://github.com/MorevM/eslint-config/commit/8f49fa2bed311846d4c00b254335ea4dbadc01a7))
* bump @typescript-eslint/parser from 5.30.6 to 5.30.7 ([#186](https://github.com/MorevM/eslint-config/issues/186)) ([d0b5b03](https://github.com/MorevM/eslint-config/commit/d0b5b03098256a75f559e9f0f9a5b2667218626a))
* bump eslint from 8.19.0 to 8.20.0 ([#182](https://github.com/MorevM/eslint-config/issues/182)) ([ffb5f6d](https://github.com/MorevM/eslint-config/commit/ffb5f6dd56e0825bdd2103aa364d816467dea43d))
* bump eslint-plugin-sonarjs from 0.13.0 to 0.14.0 ([#180](https://github.com/MorevM/eslint-config/issues/180)) ([ece1694](https://github.com/MorevM/eslint-config/commit/ece1694f7ecec14b2c4dc8ff3c0dafe4338a368b))
* bump eslint-plugin-unicorn from 43.0.1 to 43.0.2 ([#185](https://github.com/MorevM/eslint-config/issues/185)) ([c2759af](https://github.com/MorevM/eslint-config/commit/c2759af5c604707c765f7cf3187532d66947eb5a))
* bump release-it from 15.1.2 to 15.1.3 ([#181](https://github.com/MorevM/eslint-config/issues/181)) ([1e99328](https://github.com/MorevM/eslint-config/commit/1e99328b71d6953b37068e67aadb3a6f14800d38))


### Bug fixes

* **jest:** Disable `jest/max-expects` rule ([d26f5dc](https://github.com/MorevM/eslint-config/commit/d26f5dc8f2447e849493f617e0858874cd1a6b36))

## [15.0.0](https://github.com/MorevM/eslint-config/compare/v14.0.1...v15.0.0) (2022-07-16)


### ⚠ BREAKING CHANGES

* **jest:** Add `jest/max-expects` rule

### Features

* **jest:** Add `jest/max-expects` rule ([0c0be1c](https://github.com/MorevM/eslint-config/commit/0c0be1caf2041996d88447f15369b44165008de0))


### Bug fixes

* **resolver:** Allow to use `node:`-prefixed internals with no errors ([b15559b](https://github.com/MorevM/eslint-config/commit/b15559b4f8cf0cd1bdc05660ea7b6505de154c08))


### Chores

* bump eslint-plugin-jest from 26.5.3 to 26.6.0 ([25d872b](https://github.com/MorevM/eslint-config/commit/25d872ba6a1826238f64a70593ba07fcc269a6ce))
* bump jest and @types/jest ([#176](https://github.com/MorevM/eslint-config/issues/176)) ([deb8675](https://github.com/MorevM/eslint-config/commit/deb86759852be98502e6ef45f7e4fef1ac99b09c))
* bump release-it from 15.1.1 to 15.1.2 ([#177](https://github.com/MorevM/eslint-config/issues/177)) ([37a5f17](https://github.com/MorevM/eslint-config/commit/37a5f17fed100b88b8b3e30f97871afc2bfe9d5b))

### [14.0.1](https://github.com/MorevM/eslint-config/compare/v14.0.0...v14.0.1) (2022-07-13)


### Bug fixes

* Correctly resolve full paths in custom resolver ([24d93e2](https://github.com/MorevM/eslint-config/commit/24d93e274bd67a03fe9f4cd766509ef890f4bb5d))

## [14.0.0](https://github.com/MorevM/eslint-config/compare/v13.0.0...v14.0.0) (2022-07-12)


### ⚠ BREAKING CHANGES

* **markdown:** Add `md051` rule

### Features

* **markdown:** Add `md051` rule ([6d7d9c1](https://github.com/MorevM/eslint-config/commit/6d7d9c1858440a6e28dde1a3faabf21ec7370e58))


### Chores

* bump `[@typescript-eslint](https://github.com/typescript-eslint)` from 5.30.5 to 5.30.6 ([b536ab2](https://github.com/MorevM/eslint-config/commit/b536ab251b568a74c79fd0cbc807cdfa00b2bf7c))
* bump `eslint-plugin-markdownlint` from 0.3.4 to 0.4.0 ([d25aa76](https://github.com/MorevM/eslint-config/commit/d25aa767315219c655a67cb026c32d3e8ccbee70))
* bump `eslint-plugin-unicorn` from 43.0.0 to 43.0.1 ([7c54b49](https://github.com/MorevM/eslint-config/commit/7c54b4940409a7d32f7e3c1b222ddf7819c5502d))
* bump `eslint-plugin-vue` from 9.1.1 to 9.2.0 ([384e1b1](https://github.com/MorevM/eslint-config/commit/384e1b152536122b5ca4a10d05b1ed9bcf28afef))


### Bug fixes

* **base:** Decrease severity of `object-curly-newline` rule ([bd8ffcf](https://github.com/MorevM/eslint-config/commit/bd8ffcf5e9d8bb86f4b62f08cefa6c5f02fce188))
* **markdown:** Disable `md051` rule ([137c7db](https://github.com/MorevM/eslint-config/commit/137c7dbf66827a4b9532c68f3b8568a87f7a1677))

## [13.0.0](https://github.com/MorevM/eslint-config/compare/v12.4.0...v13.0.0) (2022-07-03)


### ⚠ BREAKING CHANGES

* Add `unicorn/prefer-event-target` rule

### Features

* Add `unicorn/prefer-event-target` rule ([074694a](https://github.com/MorevM/eslint-config/commit/074694a6f8af281f9e00f3c711d9fc74ed7e67ac))
* Add `unicorn/prefer-logical-operator-over-ternary` ([204a8ad](https://github.com/MorevM/eslint-config/commit/204a8adc4c07d239c1dd86b0fb4130d70d31c556))


### Chores

* bump @babel/core from 7.18.5 to 7.18.6 ([#164](https://github.com/MorevM/eslint-config/issues/164)) ([892365e](https://github.com/MorevM/eslint-config/commit/892365e695532992d215284f64e9f8f34526fe97))
* bump @babel/plugin-syntax-jsx from 7.17.12 to 7.18.6 ([#167](https://github.com/MorevM/eslint-config/issues/167)) ([af42541](https://github.com/MorevM/eslint-config/commit/af4254192e17789f9000a1bfba47e1d798ae999d))
* bump @typescript-eslint/eslint-plugin from 5.29.0 to 5.30.3 ([#166](https://github.com/MorevM/eslint-config/issues/166)) ([ddbd1aa](https://github.com/MorevM/eslint-config/commit/ddbd1aa44926edcf4c127113d996f61d1c365b29))
* bump @typescript-eslint/parser from 5.29.0 to 5.30.3 ([#161](https://github.com/MorevM/eslint-config/issues/161)) ([66611ce](https://github.com/MorevM/eslint-config/commit/66611ce0af460b65e3d697b526b640373863eb74))
* bump eslint from 8.18.0 to 8.19.0 ([#168](https://github.com/MorevM/eslint-config/issues/168)) ([422b6b1](https://github.com/MorevM/eslint-config/commit/422b6b1a9d6b6cb8944c31e22fb24078da71f617))
* bump eslint-plugin-jsonc from 2.3.0 to 2.3.1 ([4aebe18](https://github.com/MorevM/eslint-config/commit/4aebe184f66eecca12e6e173e7a4dadadf82e4b4))
* bump eslint-plugin-unicorn from 42.0.0 to 43.0.0 ([37f8f82](https://github.com/MorevM/eslint-config/commit/37f8f82da529911d698978d6588e5bdbbaffae5d))
* bump jest and @types/jest ([#162](https://github.com/MorevM/eslint-config/issues/162)) ([122c2a2](https://github.com/MorevM/eslint-config/commit/122c2a20af43112fc4e8228f12cc8ee7c9c4549e))
* bump release-it from 15.1.0 to 15.1.1 ([#165](https://github.com/MorevM/eslint-config/issues/165)) ([6385a04](https://github.com/MorevM/eslint-config/commit/6385a0408ef68cb35219e162983986e0bb52b536))


### Bug fixes

* Disabled `jsdoc/require-X-type` rules for TS files ([2709518](https://github.com/MorevM/eslint-config/commit/270951877bd57b821dbcb483d6bbe609ca575bfe))
* Remove deprecated `unicorn/import-index` ([44661b9](https://github.com/MorevM/eslint-config/commit/44661b9b9a4e948e5c4c728fb6f93013a50b779c))

## [12.4.0](https://github.com/MorevM/eslint-config/compare/v12.3.0...v12.4.0) (2022-06-26)


### Features

* Add custom resolver for `package.json > exports` field ([b0ac9a6](https://github.com/MorevM/eslint-config/commit/b0ac9a67b6d59ae67f0ae1a2b77ba67e48bb4a03))


### Chores

* bump @types/jest from 28.1.2 to 28.1.3 ([#157](https://github.com/MorevM/eslint-config/issues/157)) ([715c83d](https://github.com/MorevM/eslint-config/commit/715c83dd4771806b11f0c2af9abea36951d56c28))
* bump @typescript-eslint/eslint-plugin from 5.28.0 to 5.29.0 ([#159](https://github.com/MorevM/eslint-config/issues/159)) ([8e476d0](https://github.com/MorevM/eslint-config/commit/8e476d0ac5e4984c1519d31e75e3fb3a1ffa6ff4))
* bump lint-staged from 13.0.2 to 13.0.3 ([#160](https://github.com/MorevM/eslint-config/issues/160)) ([a683cac](https://github.com/MorevM/eslint-config/commit/a683cac6dd2cefdc87023427059f13715cbb2103))
* bump release-it from 15.0.0 to 15.1.0 ([#158](https://github.com/MorevM/eslint-config/issues/158)) ([43ade5d](https://github.com/MorevM/eslint-config/commit/43ade5dbe056089031772bf5e2f86dfb320d9d54))
* bump vue-eslint-parser from 9.0.2 to 9.0.3 ([#155](https://github.com/MorevM/eslint-config/issues/155)) ([a402ab9](https://github.com/MorevM/eslint-config/commit/a402ab9ec87a380585751d953389657ea825bfe0))


### Tests

* Fix config validity test after implementation of custom resolver ([1e8ea66](https://github.com/MorevM/eslint-config/commit/1e8ea660612cfc376074990f655353fb3d3f1b91))

## [12.3.0](https://github.com/MorevM/eslint-config/compare/v12.2.0...v12.3.0) (2022-06-18)


### Features

* **typescript:** Add `consistent-generic-constructors` rule ([63805ae](https://github.com/MorevM/eslint-config/commit/63805ae6ed9af96f42af445f524cfb9aab9868a9))


### Chores

* bump @babel/core from 7.18.2 to 7.18.5 ([#153](https://github.com/MorevM/eslint-config/issues/153)) ([be04797](https://github.com/MorevM/eslint-config/commit/be047979862d3c3fea7f98f8a1c64fb4895cc045))
* bump @html-eslint/eslint-plugin from 0.13.1 to 0.13.2 ([#144](https://github.com/MorevM/eslint-config/issues/144)) ([a1fbb8e](https://github.com/MorevM/eslint-config/commit/a1fbb8efc3fc6bf06c1574acfe15428da9d37af5))
* bump @html-eslint/parser from 0.13.1 to 0.13.2 ([#145](https://github.com/MorevM/eslint-config/issues/145)) ([eb5f3fc](https://github.com/MorevM/eslint-config/commit/eb5f3fcc0b2e60cfcd1d93853ad51b4372080ab7))
* bump @types/jest from 28.1.1 to 28.1.2 ([#149](https://github.com/MorevM/eslint-config/issues/149)) ([306fe9e](https://github.com/MorevM/eslint-config/commit/306fe9e10b40d2ea6e4632cf66ad7380db4b2d97))
* bump @typescript-eslint/eslint-plugin from 5.27.0 to 5.27.1 ([#146](https://github.com/MorevM/eslint-config/issues/146)) ([d6ecb07](https://github.com/MorevM/eslint-config/commit/d6ecb071e1931af88de080d422504fd4734ae931))
* bump @typescript-eslint/parser from 5.27.0 to 5.27.1 ([#139](https://github.com/MorevM/eslint-config/issues/139)) ([99b820c](https://github.com/MorevM/eslint-config/commit/99b820c962ea1d732e4e7cada8deb689d5d15d13))
* bump `[@typescript-eslint](https://github.com/typescript-eslint)` from 5.27.1 to 5.28.0 ([7bb5a7a](https://github.com/MorevM/eslint-config/commit/7bb5a7a8c6fa19a5ecfe9859e275ada9500d68b3))
* bump eslint from 8.17.0 to 8.18.0 ([#152](https://github.com/MorevM/eslint-config/issues/152)) ([0c70a1c](https://github.com/MorevM/eslint-config/commit/0c70a1c33d6f579b89e21c3ba6e469d6ffd02e4c))
* bump eslint-plugin-jest from 26.4.6 to 26.5.3 ([#143](https://github.com/MorevM/eslint-config/issues/143)) ([653aef6](https://github.com/MorevM/eslint-config/commit/653aef6a428cbd272a0d303ba287e7ebdfdde93e))
* bump eslint-plugin-jsdoc from 39.3.2 to 39.3.3 ([#147](https://github.com/MorevM/eslint-config/issues/147)) ([01c9758](https://github.com/MorevM/eslint-config/commit/01c975851432288d37ab5516adb58c32c482d770))
* bump eslint-plugin-vue from 9.1.0 to 9.1.1 ([#141](https://github.com/MorevM/eslint-config/issues/141)) ([a385799](https://github.com/MorevM/eslint-config/commit/a3857999f13e4fe011ff14616bd02fea6d027f5f))
* bump jest and @types/jest ([#140](https://github.com/MorevM/eslint-config/issues/140)) ([9a0bf54](https://github.com/MorevM/eslint-config/commit/9a0bf541e57453f809141696ccd88179d20e13e7))
* bump lint-staged from 13.0.0 to 13.0.1 ([#142](https://github.com/MorevM/eslint-config/issues/142)) ([82e7718](https://github.com/MorevM/eslint-config/commit/82e7718c7be52b788b82dc17d1a56e4fbe5cc678))
* bump lint-staged from 13.0.1 to 13.0.2 ([#154](https://github.com/MorevM/eslint-config/issues/154)) ([d4d4e36](https://github.com/MorevM/eslint-config/commit/d4d4e36555b12f81e108ffca1a5e37bf647a8e1f))
* bump typescript from 4.7.3 to 4.7.4 ([#151](https://github.com/MorevM/eslint-config/issues/151)) ([9fe98b5](https://github.com/MorevM/eslint-config/commit/9fe98b5f056426b1b907e64936dac4a7ed277a02))

## [12.2.0](https://github.com/MorevM/eslint-config/compare/v12.1.1...v12.2.0) (2022-06-04)


### Features

* **base:** Add new option `allowNamedExports` to `no-use-before-define` rule ([6753e20](https://github.com/MorevM/eslint-config/commit/6753e207e29bbde96e1b5735c4f6576f65a15200))


### Chores

* bump @types/jest from 27.5.1 to 28.1.0 ([#135](https://github.com/MorevM/eslint-config/issues/135)) ([dc27fa9](https://github.com/MorevM/eslint-config/commit/dc27fa949b5da4d665c6d7e8f303b0ec2ccfac97))
* bump @typescript-eslint/eslint-plugin from 5.26.0 to 5.27.0 ([#137](https://github.com/MorevM/eslint-config/issues/137)) ([2b3950b](https://github.com/MorevM/eslint-config/commit/2b3950be31b1390d0998aceef8e80da4c74d8d47))
* bump @typescript-eslint/parser from 5.26.0 to 5.27.0 ([#132](https://github.com/MorevM/eslint-config/issues/132)) ([2898a1f](https://github.com/MorevM/eslint-config/commit/2898a1fd7008a59e65eab268d49289ab1128cc9b))
* bump eslint from 8.16.0 to 8.17.0 ([#136](https://github.com/MorevM/eslint-config/issues/136)) ([c2a4a50](https://github.com/MorevM/eslint-config/commit/c2a4a5023d8ba4790387287dd11ae01f6935d178))
* bump eslint-plugin-jest from 26.4.5 to 26.4.6 ([#134](https://github.com/MorevM/eslint-config/issues/134)) ([1825dff](https://github.com/MorevM/eslint-config/commit/1825dff85a243ccb2b9066cd037116b423ea214f))
* bump eslint-plugin-vue from 9.0.1 to 9.1.0 ([#131](https://github.com/MorevM/eslint-config/issues/131)) ([efbb01a](https://github.com/MorevM/eslint-config/commit/efbb01a374b154d52f76efa3bde13fa3a4e57a69))
* bump lint-staged from 12.4.2 to 13.0.0 ([#138](https://github.com/MorevM/eslint-config/issues/138)) ([ddc06e7](https://github.com/MorevM/eslint-config/commit/ddc06e7599ef1388e1d639bddfd85ae96634e5fd))
* bump typescript from 4.7.2 to 4.7.3 ([#133](https://github.com/MorevM/eslint-config/issues/133)) ([c7e8534](https://github.com/MorevM/eslint-config/commit/c7e8534fa7d715bf87578f20e1d3a7e3deb3c0b4))

### [12.1.1](https://github.com/MorevM/eslint-config/compare/v12.1.0...v12.1.1) (2022-05-30)


### Chores

* bump @typescript-eslint/parser from 5.25.0 to 5.26.0 ([#122](https://github.com/MorevM/eslint-config/issues/122)) ([d49727a](https://github.com/MorevM/eslint-config/commit/d49727ad1a7a58dd1fb76103b148d4f521af1184))

## [12.1.0](https://github.com/MorevM/eslint-config/compare/v12.0.0...v12.1.0) (2022-05-30)


### Features

* **jest:** Add `prefer-hooks-in-order` rule ([15f78bb](https://github.com/MorevM/eslint-config/commit/15f78bb508fba703a9f93e4b374cdbf55edb1098))


### Chores

* bump @babel/core from 7.18.0 to 7.18.2 ([#129](https://github.com/MorevM/eslint-config/issues/129)) ([68a301e](https://github.com/MorevM/eslint-config/commit/68a301e193f6ae0b37a12852e969289ddee39fbd))
* bump @babel/eslint-parser from 7.17.0 to 7.18.2 ([#123](https://github.com/MorevM/eslint-config/issues/123)) ([a06e1b1](https://github.com/MorevM/eslint-config/commit/a06e1b10cbc8a732dc419f25fb2fbbbce916655b))
* bump @typescript-eslint/eslint-plugin from 5.25.0 to 5.26.0 ([#126](https://github.com/MorevM/eslint-config/issues/126)) ([6569901](https://github.com/MorevM/eslint-config/commit/65699017d7b25272915e2b9b9e3c46ed8444c5d8))
* bump eslint-plugin-jest from 26.2.2 to 26.4.5 ([1e56d74](https://github.com/MorevM/eslint-config/commit/1e56d74bc8905368adc9e571c9962857c49e2d3a))
* bump eslint-plugin-jsdoc from 39.3.0 to 39.3.2 ([#125](https://github.com/MorevM/eslint-config/issues/125)) ([3678937](https://github.com/MorevM/eslint-config/commit/3678937d4f4a6b187cb9fd75d6f436fddb90d6be))
* bump eslint-plugin-jsonc from 2.2.1 to 2.3.0 ([#127](https://github.com/MorevM/eslint-config/issues/127)) ([ee97031](https://github.com/MorevM/eslint-config/commit/ee97031de0a5219bb66aeb7c091feca771beb6da))
* bump lint-staged from 12.4.1 to 12.4.2 ([#130](https://github.com/MorevM/eslint-config/issues/130)) ([56f364f](https://github.com/MorevM/eslint-config/commit/56f364f51be553c70d9d28af261e4b9440694405))
* bump typescript from 4.6.4 to 4.7.2 ([#128](https://github.com/MorevM/eslint-config/issues/128)) ([7ea4477](https://github.com/MorevM/eslint-config/commit/7ea447782983953bf3bbb827512d4cc445d1ca54))
* Regenerate lockfile ([0222236](https://github.com/MorevM/eslint-config/commit/02222362576cd787cafb16a649bd8b49da4d509d))

## [12.0.0](https://github.com/MorevM/eslint-config/compare/v11.4.1...v12.0.0) (2022-05-21)


### ⚠ BREAKING CHANGES

* **vue:** Add `vue/valid-attribute-name` rule

### Features

* **vue:** Add `vue/valid-attribute-name` rule ([c5bef67](https://github.com/MorevM/eslint-config/commit/c5bef67b19661532563575b63a1ad67a95de6566))


### Chores

* bump @babel/core from 7.17.10 to 7.18.0 ([#116](https://github.com/MorevM/eslint-config/issues/116)) ([1c29842](https://github.com/MorevM/eslint-config/commit/1c2984292e91c161b190a999175d19c8cd33bf52))
* bump @babel/plugin-syntax-jsx from 7.16.7 to 7.17.12 ([#114](https://github.com/MorevM/eslint-config/issues/114)) ([2bedc29](https://github.com/MorevM/eslint-config/commit/2bedc290925ab9052541c8f3654cc1aeb8654a47))
* bump @eslint/eslintrc from 1.2.3 to 1.3.0 ([#112](https://github.com/MorevM/eslint-config/issues/112)) ([9d31b77](https://github.com/MorevM/eslint-config/commit/9d31b7787a51ecd6b83899070e1f7cdd32f39372))
* bump @typescript-eslint/eslint-plugin from 5.23.0 to 5.25.0 ([c0da261](https://github.com/MorevM/eslint-config/commit/c0da2618a51084b1bf4e3a6b031d75dcb5c78c65))
* bump @typescript-eslint/parser from 5.23.0 to 5.25.0 ([#115](https://github.com/MorevM/eslint-config/issues/115)) ([26d1bc7](https://github.com/MorevM/eslint-config/commit/26d1bc709235da6f7e523d1ae8c9899e3ef8279c))
* bump eslint from 8.15.0 to 8.16.0 ([#111](https://github.com/MorevM/eslint-config/issues/111)) ([1e44225](https://github.com/MorevM/eslint-config/commit/1e442252e168a897541c1b28d6526172b5b88969))
* bump eslint-plugin-jest from 26.2.1 to 26.2.2 ([#110](https://github.com/MorevM/eslint-config/issues/110)) ([ab845c6](https://github.com/MorevM/eslint-config/commit/ab845c60dc7fcda30a73d5133b47ba0869a6e24a))
* bump eslint-plugin-jsdoc from 39.2.9 to 39.3.0 ([#117](https://github.com/MorevM/eslint-config/issues/117)) ([35125b4](https://github.com/MorevM/eslint-config/commit/35125b460ede0cc50c4331e502975abd63eb65f5))
* bump eslint-plugin-vue from 8.7.1 to 9.0.1 ([826e42c](https://github.com/MorevM/eslint-config/commit/826e42caf55bc5407e98db5275603ac0fee20437))
* bump eslint-plugin-yml from 0.15.0 to 1.0.0 ([#120](https://github.com/MorevM/eslint-config/issues/120)) ([9bb8b5b](https://github.com/MorevM/eslint-config/commit/9bb8b5bf0f90837c37dde1ae3da28e124059a333))
* bump vue-eslint-parser from 9.0.1 to 9.0.2 ([#121](https://github.com/MorevM/eslint-config/issues/121)) ([703f1c4](https://github.com/MorevM/eslint-config/commit/703f1c443c6a950f6f50aeefe2a8f22b2d7fdb1c))
* bump yaml-eslint-parser from 0.5.0 to 1.0.1 ([#113](https://github.com/MorevM/eslint-config/issues/113)) ([e5ea5ea](https://github.com/MorevM/eslint-config/commit/e5ea5ea505f469071fc2214b12001e208fa1485a))


### Bug fixes

* **typescript:** Remove deprecated `no-duplicate-imports` ([1ff8e07](https://github.com/MorevM/eslint-config/commit/1ff8e07eae2e30710aa133be7e07223493ea48de))
* **vue:** Remove deprecated `vue/script-setup-uses-vars` ([88d0a76](https://github.com/MorevM/eslint-config/commit/88d0a76d53d9a68285ed2e35a722664c87952fb8))
* **vue:** Replace deprecated `vue/no-invalid-model-keys` to added `vue/valid-model-definition` ([dbe5251](https://github.com/MorevM/eslint-config/commit/dbe5251e62774eb3111b6837fa67d1c491f77fee))

### [11.4.1](https://github.com/MorevM/eslint-config/compare/v11.4.0...v11.4.1) (2022-05-14)


### Chores

* bump @types/jest from 27.5.0 to 27.5.1 ([#106](https://github.com/MorevM/eslint-config/issues/106)) ([535ef5e](https://github.com/MorevM/eslint-config/commit/535ef5e1364c3c98d947d8b54bd2ac6011c8a1a4))
* bump @typescript-eslint/eslint-plugin from 5.22.0 to 5.23.0 ([#107](https://github.com/MorevM/eslint-config/issues/107)) ([9108ffd](https://github.com/MorevM/eslint-config/commit/9108ffd902ddddce8d8b0904419114e662f643ea))
* bump @typescript-eslint/parser from 5.22.0 to 5.23.0 ([#108](https://github.com/MorevM/eslint-config/issues/108)) ([d8eb6f2](https://github.com/MorevM/eslint-config/commit/d8eb6f22ccbbbb5c82f5d5d76620323e821814d1))
* bump eslint-plugin-jest from 26.1.5 to 26.2.1 ([#105](https://github.com/MorevM/eslint-config/issues/105)) ([5f86f7c](https://github.com/MorevM/eslint-config/commit/5f86f7c87c92c0f81c5a02bda85d63eb4dba0b74))
* bump eslint-plugin-yml from 0.14.0 to 0.15.0 ([#102](https://github.com/MorevM/eslint-config/issues/102)) ([58549ae](https://github.com/MorevM/eslint-config/commit/58549ae294644c3d194a4902dd0248c15e83002b))
* bump glob from 8.0.1 to 8.0.3 ([#104](https://github.com/MorevM/eslint-config/issues/104)) ([b7b3ced](https://github.com/MorevM/eslint-config/commit/b7b3cedf6999a04d541b458bfb3d5297840ea90b))
* bump husky from 7.0.4 to 8.0.1 ([#103](https://github.com/MorevM/eslint-config/issues/103)) ([15b912c](https://github.com/MorevM/eslint-config/commit/15b912cc52a6cbce6f20215ba9c9864b69b6e5f0))
* bump vue-eslint-parser from 8.3.0 to 9.0.1 ([#109](https://github.com/MorevM/eslint-config/issues/109)) ([7ba1aa7](https://github.com/MorevM/eslint-config/commit/7ba1aa7cf8753ae9a8834f63d479753c7c43bd37))

## [11.4.0](https://github.com/MorevM/eslint-config/compare/v11.3.0...v11.4.0) (2022-05-07)


### Features

* **typescript:** Add `no-duplicate-enum-values` rule ([163e7f0](https://github.com/MorevM/eslint-config/commit/163e7f0524d907e28f899cd035cf55d614704e41))


### Chores

* bump @eslint/eslintrc from 1.2.2 to 1.2.3 ([#96](https://github.com/MorevM/eslint-config/issues/96)) ([977c582](https://github.com/MorevM/eslint-config/commit/977c582ebc5b9ab37d3e79bf52764d3dee2ee9cb))
* bump @types/jest from 27.4.1 to 27.5.0 ([#99](https://github.com/MorevM/eslint-config/issues/99)) ([3bacc4f](https://github.com/MorevM/eslint-config/commit/3bacc4f722738ea710c623375869dd80932f27f1))
* bump @typescript-eslint/eslint-plugin from 5.21.0 to 5.22.0 ([#97](https://github.com/MorevM/eslint-config/issues/97)) ([fb56ad5](https://github.com/MorevM/eslint-config/commit/fb56ad53544f306991d3af28eca4258609186d91))
* bump @typescript-eslint/parser from 5.21.0 to 5.22.0 ([#95](https://github.com/MorevM/eslint-config/issues/95)) ([76ef2e4](https://github.com/MorevM/eslint-config/commit/76ef2e46894a8e56d0f53e068f5a94150a091d77))
* bump eslint from 8.14.0 to 8.15.0 ([#100](https://github.com/MorevM/eslint-config/issues/100)) ([704e848](https://github.com/MorevM/eslint-config/commit/704e848e3b1757248a18e9cfd225e3ce0c3c2598))
* bump jest from 27.5.1 to 28.1.0 ([ac35829](https://github.com/MorevM/eslint-config/commit/ac35829db8ba05eda2e1df7ccdcb0aa71b4a225f))
* bump release-it and @release-it/conventional-changelog ([#98](https://github.com/MorevM/eslint-config/issues/98)) ([532d03e](https://github.com/MorevM/eslint-config/commit/532d03e77991cbf01f01ec03273e45aa9763ef2d))


### Tests

* Fix `no-unused-and-deprecated-rules` test after jest update ([70d19a9](https://github.com/MorevM/eslint-config/commit/70d19a96483f94bc9a03e2eac456d8e0449932e8))

## [11.3.0](https://github.com/MorevM/eslint-config/compare/v11.2.0...v11.3.0) (2022-04-30)


### Features

* **typescript:** Add `parameter-properties` rule ([44472e6](https://github.com/MorevM/eslint-config/commit/44472e636547d4a9f4d0a1e981b0c18ed81f8496))


### Bug fixes

* **typescript:** Remove deprecated `no-parameter-properties` rule ([c7b990c](https://github.com/MorevM/eslint-config/commit/c7b990cc93db593ad5d12c80d5c5d9f403d8fa44))


### Chores

* bump @babel/core from 7.17.9 to 7.17.10 ([#90](https://github.com/MorevM/eslint-config/issues/90)) ([bfd8a49](https://github.com/MorevM/eslint-config/commit/bfd8a490f57f8f7082be3b06c4eb0e2b2999df6a))
* bump eslint-plugin-jsdoc from 39.2.7 to 39.2.9 ([#89](https://github.com/MorevM/eslint-config/issues/89)) ([0abd2c5](https://github.com/MorevM/eslint-config/commit/0abd2c5fac42340620fa505a3169d9a0bedade99))
* bump lint-staged from 12.4.0 to 12.4.1 ([#87](https://github.com/MorevM/eslint-config/issues/87)) ([8e92a8d](https://github.com/MorevM/eslint-config/commit/8e92a8da1c5cf0aff649f8093f3f146fd63675b5))
* bump release-it from 14.14.2 to 14.14.3 ([#94](https://github.com/MorevM/eslint-config/issues/94)) ([110c7f1](https://github.com/MorevM/eslint-config/commit/110c7f105d53e7c173dfaa02f827ad42782c1cf7))
* bump typescript from 4.6.3 to 4.6.4 ([#92](https://github.com/MorevM/eslint-config/issues/92)) ([ce27839](https://github.com/MorevM/eslint-config/commit/ce27839520470970ca24ffa9243ba97ba525dca4))
* Update `typescript` plugin and parser ([0294ad4](https://github.com/MorevM/eslint-config/commit/0294ad4dcf0f7d28561d566b2fab84cf8ecd3ed4))

## [11.2.0](https://github.com/MorevM/eslint-config/compare/v11.1.2...v11.2.0) (2022-04-23)


### Features

* Add node v18 ([c4ff19b](https://github.com/MorevM/eslint-config/commit/c4ff19bb4c233e37371d8f6a78facc8b11320195))
* **base:** Add `no-constant-binary-expression` rule ([3f5f77d](https://github.com/MorevM/eslint-config/commit/3f5f77d06354af9f57f1135e4313c0fbb3d65d60))
* **vue3:** Add `vue/define-macros-order` ([535607f](https://github.com/MorevM/eslint-config/commit/535607ff602acc22fd53ca6dbf657540b18a015f))
* **vue:** Add `vue/match-component-import-name` rule ([dcd5cd9](https://github.com/MorevM/eslint-config/commit/dcd5cd960754d4464d398a3c3338f3f4a0491641))


### Chores

* bump @eslint/eslintrc from 1.2.1 to 1.2.2 ([#83](https://github.com/MorevM/eslint-config/issues/83)) ([aecd26f](https://github.com/MorevM/eslint-config/commit/aecd26fd549f81b07f1cad6c9ec3529786780195))
* bump @typescript-eslint/eslint-plugin from 5.19.0 to 5.20.0 ([#82](https://github.com/MorevM/eslint-config/issues/82)) ([19bb207](https://github.com/MorevM/eslint-config/commit/19bb207f2700d4a136b78e8998cbaefae8052f3b))
* bump @typescript-eslint/parser from 5.19.0 to 5.20.0 ([#80](https://github.com/MorevM/eslint-config/issues/80)) ([0a44cd4](https://github.com/MorevM/eslint-config/commit/0a44cd4b305fc2c7e2245d83848a8782c4dcb95b))
* bump eslint from 8.13.0 to 8.14.0 ([2b2e6c6](https://github.com/MorevM/eslint-config/commit/2b2e6c6cf2c6a13af5481ab0f31e22765ce35d6a))
* bump eslint-plugin-jest from 26.1.4 to 26.1.5 ([#85](https://github.com/MorevM/eslint-config/issues/85)) ([a52dc06](https://github.com/MorevM/eslint-config/commit/a52dc06130be79585b3c54663be132fc99af8ece))
* bump eslint-plugin-jsdoc from 39.2.1 to 39.2.7 ([#79](https://github.com/MorevM/eslint-config/issues/79)) ([09b8817](https://github.com/MorevM/eslint-config/commit/09b8817364259a31c0400f04c1233708fbdc3c17))
* bump eslint-plugin-vue from 8.6.0 to 8.7.1 ([d0b16d5](https://github.com/MorevM/eslint-config/commit/d0b16d51632885137b47e87774acb356754e35ee))
* bump lint-staged from 12.3.8 to 12.4.0 ([#86](https://github.com/MorevM/eslint-config/issues/86)) ([a329dde](https://github.com/MorevM/eslint-config/commit/a329ddeb20286a4d7790810eda2f91e1b273aebe))

### [11.1.2](https://github.com/MorevM/eslint-config/compare/v11.1.1...v11.1.2) (2022-04-20)


### Chores

* bump @release-it/conventional-changelog from 4.2.2 to 4.3.0 ([#78](https://github.com/MorevM/eslint-config/issues/78)) ([70448fb](https://github.com/MorevM/eslint-config/commit/70448fb52a435f25811ef1828fceebac02ae0b1d))
* bump @typescript-eslint/eslint-plugin from 5.18.0 to 5.19.0 ([#73](https://github.com/MorevM/eslint-config/issues/73)) ([dc14652](https://github.com/MorevM/eslint-config/commit/dc146529b361dce6e94f45a82b6309852a4c1f35))
* bump @typescript-eslint/parser from 5.18.0 to 5.19.0 ([#72](https://github.com/MorevM/eslint-config/issues/72)) ([48db319](https://github.com/MorevM/eslint-config/commit/48db319d851ff4184867b04ea55f2e9851c39e0a))
* bump eslint-plugin-jsdoc from 39.0.1 to 39.2.1 ([#77](https://github.com/MorevM/eslint-config/issues/77)) ([4d1050a](https://github.com/MorevM/eslint-config/commit/4d1050a7197ac19ddf9585c932242d73bca0a2fe))
* bump glob from 7.2.0 to 8.0.1 ([#74](https://github.com/MorevM/eslint-config/issues/74)) ([c987f72](https://github.com/MorevM/eslint-config/commit/c987f727ac7a3b7f1c931be49acdd3add598e611))
* bump lint-staged from 12.3.7 to 12.3.8 ([#75](https://github.com/MorevM/eslint-config/issues/75)) ([a23aa0a](https://github.com/MorevM/eslint-config/commit/a23aa0a5e3f665ee4da1c435adb4547d5ffb70fc))
* bump release-it from 14.14.0 to 14.14.2 ([#76](https://github.com/MorevM/eslint-config/issues/76)) ([40b393d](https://github.com/MorevM/eslint-config/commit/40b393de9dc123f3bccd209cd629b4bcaa7ed853))


### Bug fixes

* **base:** Disable autofix for `unicorn/no-lonely-if` rule ([aa0e416](https://github.com/MorevM/eslint-config/commit/aa0e41610e460c1ddc8bf9afd7ed85702ff9c841))

### [11.1.1](https://github.com/MorevM/eslint-config/compare/v11.1.0...v11.1.1) (2022-04-15)


### Bug fixes

* **typescript:** Disable `unicorn/prefer-json-parse-buffer` for TS files due it's incompatible ([16781ca](https://github.com/MorevM/eslint-config/commit/16781cab8397b2c02981268f20f45a94e571b682))## [11.1.0](https://github.com/MorevM/eslint-config/compare/v11.0.0...v11.1.0) (2022-04-09)


### Features

* **typescript:** Rule `no-shadow` inherits all options from base config ([dee52e0](https://github.com/MorevM/eslint-config/commit/dee52e0dfda8d755688a1bb964c45899a6588e62))
* **vue:** Add `vue/no-restricted-html-elements` rule ([593c6f7](https://github.com/MorevM/eslint-config/commit/593c6f7878da957f7735a22acf7c2681629104b4))
* **vue:** Add `vue/prefer-prop-type-boolean-first` rule ([37c6861](https://github.com/MorevM/eslint-config/commit/37c68610e8c559626f27d81cee4a606387b52544))
* **vue:** Make `vue/component-tags-order` autofixable ([9d63619](https://github.com/MorevM/eslint-config/commit/9d63619ddfed3317371fc2885465777cae4f7af7))


### Chores

* bump @babel/core from 7.17.8 to 7.17.9 ([#64](https://github.com/MorevM/eslint-config/issues/64)) ([951ffd2](https://github.com/MorevM/eslint-config/commit/951ffd25a885448706511ae3fa7d1524cf0da942))
* bump eslint from 8.12.0 to 8.13.0 ([#67](https://github.com/MorevM/eslint-config/issues/67)) ([9bd19da](https://github.com/MorevM/eslint-config/commit/9bd19da4d1a13a1bda4bf61e88849e570fd52264))
* bump eslint-plugin-import from 2.25.4 to 2.26.0 ([#66](https://github.com/MorevM/eslint-config/issues/66)) ([e53d510](https://github.com/MorevM/eslint-config/commit/e53d5106e2d6fec93cbfce4957845b4182ef3d7c))
* bump eslint-plugin-jest from 26.1.3 to 26.1.4 ([#65](https://github.com/MorevM/eslint-config/issues/65)) ([2ed4c51](https://github.com/MorevM/eslint-config/commit/2ed4c5145fdab51bd7ea1b0e5270e2fe3c2a014c))
* bump eslint-plugin-jsdoc from 38.1.6 to 39.0.1 ([#71](https://github.com/MorevM/eslint-config/issues/71)) ([0eb8738](https://github.com/MorevM/eslint-config/commit/0eb87383079b0a819d50a24f55b82540f7453218))
* Bump eslint-plugin-vue from 8.5.0 to 8.6.0 ([e624814](https://github.com/MorevM/eslint-config/commit/e6248147dbe92fed8b3f8a2f356e19cbc74f7b45))## [11.0.0](https://github.com/MorevM/eslint-config/compare/v10.0.3...v11.0.0) (2022-04-02)


### ⚠ BREAKING CHANGES

* As `base` config and `common` preset includes updated `unicorn` parts it become more strict

### Features

* Add new rules from `unicrorn` plugin v42 release ([91c57f2](https://github.com/MorevM/eslint-config/commit/91c57f2399f6d3ee0999204c46cdf9ba846a0c6a))
* **typescript:** `no-unused-vars` inherits from base config ([9837287](https://github.com/MorevM/eslint-config/commit/98372876f9403ffa5ab9e81011089032a075c729))


### Tests

* Add test for checking built configs validity ([f26ad30](https://github.com/MorevM/eslint-config/commit/f26ad30fe707c5754c1d524ab9f59ae91487e3ba))


### Chores

* bump @morev/commitlint-config from 0.1.0 to 0.1.1 ([#56](https://github.com/MorevM/eslint-config/issues/56)) ([fae10ee](https://github.com/MorevM/eslint-config/commit/fae10ee46c5dbf5818eadaee31905046e74143fc))
* bump eslint-plugin-jsdoc from 38.0.7 to 38.1.6 ([#57](https://github.com/MorevM/eslint-config/issues/57)) ([9fcae13](https://github.com/MorevM/eslint-config/commit/9fcae133ff6810e731e2fbc9359ea195fb7c3d0b))
* bump eslint-plugin-markdownlint from 0.3.3 to 0.3.4 ([#61](https://github.com/MorevM/eslint-config/issues/61)) ([cdeaacd](https://github.com/MorevM/eslint-config/commit/cdeaacdb590ef8f366715ee3e08f5265ec7e450c))
* bump eslint-plugin-sonarjs from 0.12.0 to 0.13.0 ([#63](https://github.com/MorevM/eslint-config/issues/63)) ([4384145](https://github.com/MorevM/eslint-config/commit/4384145c844e2dd05408dfbd0642a35f42a541bd))
* bump release-it from 14.13.1 to 14.14.0 ([#59](https://github.com/MorevM/eslint-config/issues/59)) ([cfbabce](https://github.com/MorevM/eslint-config/commit/cfbabcefba6062e567c54b0df97cc65a0b55840f))
* Update `dependabot` settings ([5c12338](https://github.com/MorevM/eslint-config/commit/5c12338641fa4345723a4944ddbb304a4b00d8be))
* Upgrade `eslint-plugin-unicorn` to v42 ([a95412d](https://github.com/MorevM/eslint-config/commit/a95412d01abc3a29310857bf9443b84d1a769bc0))


### Bug fixes

* **base:** Disable `unicorn/text-encoding-identifier-case` ([145a741](https://github.com/MorevM/eslint-config/commit/145a7418125b3976c20ddc53ef8f846c5b455444))### [10.0.3](https://github.com/MorevM/eslint-config/compare/v10.0.2...v10.0.3) (2022-03-26)


### Chores

* bump @typescript-eslint/eslint-plugin from 5.15.0 to 5.16.0 ([#53](https://github.com/MorevM/eslint-config/issues/53)) ([f7dd734](https://github.com/MorevM/eslint-config/commit/f7dd734951c45182afdcfe46454e1f65c65d6f52))
* bump @typescript-eslint/parser from 5.15.0 to 5.16.0 ([#50](https://github.com/MorevM/eslint-config/issues/50)) ([818a99c](https://github.com/MorevM/eslint-config/commit/818a99cf4bbb428a81cd5344aac61c436eea8722))
* bump eslint from 8.11.0 to 8.12.0 ([#51](https://github.com/MorevM/eslint-config/issues/51)) ([aa0c91c](https://github.com/MorevM/eslint-config/commit/aa0c91ca912f6c6af223eb0a12a6398744a0d11a))
* bump eslint-plugin-jest from 26.1.2 to 26.1.3 ([#52](https://github.com/MorevM/eslint-config/issues/52)) ([b5f2e81](https://github.com/MorevM/eslint-config/commit/b5f2e8130e5642d8156f57863612ae6a9d572828))
* bump eslint-plugin-jsdoc from 38.0.6 to 38.0.7 ([#54](https://github.com/MorevM/eslint-config/issues/54)) ([f300d76](https://github.com/MorevM/eslint-config/commit/f300d76883f56cdaeedcd2f85d9e9a887bfa15c3))
* bump typescript from 4.6.2 to 4.6.3 ([#55](https://github.com/MorevM/eslint-config/issues/55)) ([a8507da](https://github.com/MorevM/eslint-config/commit/a8507da01d123322c0fff9fa44981fbd63d14562))### [10.0.2](https://github.com/MorevM/eslint-config/compare/v10.0.1...v10.0.2) (2022-03-22)


### CI improvements

* Add / coorect order of build step to all CI workflows ([7ae4f0c](https://github.com/MorevM/eslint-config/commit/7ae4f0c9b6c73ad09f9f9eb905bb74585f3877bd))### [10.0.1](https://github.com/MorevM/eslint-config/compare/v10.0.0...v10.0.1) (2022-03-22)


### Bug fixes

* Replace `ignorePatterns` to `excludedFiles` in preset `overrides` ([3d3de41](https://github.com/MorevM/eslint-config/commit/3d3de419905a979a23de57bd6adc991b0fb4cad7))


### Chores

* Repo local `.eslintrc` extends builded config ([ada0d15](https://github.com/MorevM/eslint-config/commit/ada0d1503c516b2f5ae1b031e8bb2f34f222b7b9))## [10.0.0](https://github.com/MorevM/eslint-config/compare/v9.0.0...v10.0.0) (2022-03-20)


### ⚠ BREAKING CHANGES

* Presets `common` and `assistive` have become more strict due new `markdown` config

### Features

* Add `markdown` configuration ([1002c98](https://github.com/MorevM/eslint-config/commit/1002c98ab9f8b202d3a37c8cd99cb481384a5db5))


### Documentation

* Sort configurations and presets alphabetically ([25575da](https://github.com/MorevM/eslint-config/commit/25575da6daf590e998deee06c0caf28180a51e52))


### Refactoring

* Sort exports alpabetically ([8f61be5](https://github.com/MorevM/eslint-config/commit/8f61be544734269415c206ff1b7d57294948924e))


### Tests

* Add `md012` to known unused rules list ([077ed36](https://github.com/MorevM/eslint-config/commit/077ed36c8afe7f2ab2ddf9fd4b7e55573589ba6e))


### Chores

* Dependencies upgrade ([76dc3d9](https://github.com/MorevM/eslint-config/commit/76dc3d932033f7576542550863b003eff8b05125))## [9.0.0](https://github.com/MorevM/eslint-config/compare/v8.2.0...v9.0.0) (2022-03-20)


### ⚠ BREAKING CHANGES

* Preset `common` includes new `cypress` configuration, so default preset becomes more strict.

### Chores

* bump @babel/core from 7.17.5 to 7.17.8 ([#45](https://github.com/MorevM/eslint-config/issues/45)) ([0387f42](https://github.com/MorevM/eslint-config/commit/0387f42c0d3ca62a93d7760dba3c52ae1515693c))
* bump @typescript-eslint/eslint-plugin from 5.14.0 to 5.15.0 ([#43](https://github.com/MorevM/eslint-config/issues/43)) ([4a26347](https://github.com/MorevM/eslint-config/commit/4a263476b7d10b752b99518c67ade95f85a98d36))
* bump @typescript-eslint/parser from 5.14.0 to 5.15.0 ([#42](https://github.com/MorevM/eslint-config/issues/42)) ([3bd4e05](https://github.com/MorevM/eslint-config/commit/3bd4e0513111ee7edf575b826ac41a7eb5bb724c))
* bump eslint-plugin-jsdoc from 38.0.2 to 38.0.5 ([#47](https://github.com/MorevM/eslint-config/issues/47)) ([4950f96](https://github.com/MorevM/eslint-config/commit/4950f961afdc9031aa8f80cf35f8320eb80378ae))
* bump eslint-plugin-unicorn from 41.0.0 to 41.0.1 ([#46](https://github.com/MorevM/eslint-config/issues/46)) ([dd0782f](https://github.com/MorevM/eslint-config/commit/dd0782f3424567a51ed954745e347105e1a03be6))
* bump lint-staged from 12.3.5 to 12.3.7 ([#44](https://github.com/MorevM/eslint-config/issues/44)) ([57f0424](https://github.com/MorevM/eslint-config/commit/57f042451ad3805e6e54c6ec3cda1508ef8fbbc6))


* Feature/cypress (#48) ([e20637c](https://github.com/MorevM/eslint-config/commit/e20637cf2b8df3bf5e8ce2ab4a4565ae004b5d8c)), closes [#48](https://github.com/MorevM/eslint-config/issues/48)## [8.2.0](https://github.com/MorevM/eslint-config/compare/v8.1.0...v8.2.0) (2022-03-12)


### Features

* **base:** Add `destructuredArrayIgnorePattern` option to `no-unused-vars` ([3b86a06](https://github.com/MorevM/eslint-config/commit/3b86a060b08a13365c9af88f749d59c236b3c649))
* **base:** Smooth `destructuring` option of `prefer-const` rule ([70d3aa6](https://github.com/MorevM/eslint-config/commit/70d3aa6fbb2ec24b416fba9b56504e237ed29bcc))


### Chores

* bump @release-it/conventional-changelog from 4.2.0 to 4.2.2 ([#41](https://github.com/MorevM/eslint-config/issues/41)) ([8d30b4b](https://github.com/MorevM/eslint-config/commit/8d30b4b3da79055f3b3ca5b59739818c452ccd22))
* bump @typescript-eslint/eslint-plugin from 5.13.0 to 5.14.0 ([#37](https://github.com/MorevM/eslint-config/issues/37)) ([b698ad0](https://github.com/MorevM/eslint-config/commit/b698ad010f84b8bdcb8b862263164a8c239faebb))
* bump @typescript-eslint/parser from 5.13.0 to 5.14.0 ([#40](https://github.com/MorevM/eslint-config/issues/40)) ([9cd7456](https://github.com/MorevM/eslint-config/commit/9cd7456753276f14accf890a126912e8c065f5c8))
* bump eslint from 8.10.0 to 8.11.0 ([#39](https://github.com/MorevM/eslint-config/issues/39)) ([a0f09aa](https://github.com/MorevM/eslint-config/commit/a0f09aa9236c3870e31ec53495ec7283aea2e168))
* bump eslint-plugin-jsdoc from 37.9.6 to 38.0.2 ([#38](https://github.com/MorevM/eslint-config/issues/38)) ([42f6b04](https://github.com/MorevM/eslint-config/commit/42f6b047e33cf4781e84aeb3d3ab5db8475c6c00))undefined

## [8.1.0](https://github.com/MorevM/eslint-config/compare/v8.0.2...v8.1.0) (2022-03-05)


### Features

* **typescript:** Add rules released in `5.13.0` ([6229899](https://github.com/MorevM/eslint-config/commit/622989973d25a613f0935340513498770c234d8b))


### Chores

* bump @typescript-eslint/eslint-plugin from 5.12.1 to 5.13.0 ([#34](https://github.com/MorevM/eslint-config/issues/34)) ([ca8d43a](https://github.com/MorevM/eslint-config/commit/ca8d43a71b7c148af9416eff89a25f7c64c07b54))
* bump @typescript-eslint/parser from 5.12.1 to 5.13.0 ([#35](https://github.com/MorevM/eslint-config/issues/35)) ([6dc2338](https://github.com/MorevM/eslint-config/commit/6dc2338c8c244b4565a2c2fb1c99972fd8930f3c))
* bump eslint-plugin-jsdoc from 37.9.4 to 37.9.6 ([#32](https://github.com/MorevM/eslint-config/issues/32)) ([3bf6ae4](https://github.com/MorevM/eslint-config/commit/3bf6ae494eb4f047b90ef2581625358213768ef9))
* bump lint-staged from 12.3.4 to 12.3.5 ([#36](https://github.com/MorevM/eslint-config/issues/36)) ([86c0ec1](https://github.com/MorevM/eslint-config/commit/86c0ec1cdeb0dcc71fd90aeb9bf02b706bed08dc))
* bump typescript from 4.5.5 to 4.6.2 ([#33](https://github.com/MorevM/eslint-config/issues/33)) ([1d8ffee](https://github.com/MorevM/eslint-config/commit/1d8ffeeaa3f3b2ba6578f0129674c64fe38e685c))undefined

### [8.0.2](https://github.com/MorevM/eslint-config/compare/v8.0.1...v8.0.2) (2022-03-05)


### Bug fixes

* **base:** Drastically increase `no-secrets` tolerance ([8cb4766](https://github.com/MorevM/eslint-config/commit/8cb4766ee58e8a3ffd9c022323617f8788633d5a))undefined

### [8.0.1](https://github.com/MorevM/eslint-config/compare/v8.0.0...v8.0.1) (2022-02-27)


### Bug fixes

* Extension rules ([0ac6bb0](https://github.com/MorevM/eslint-config/commit/0ac6bb0a4cbc035c5385b055b62d928b7291cab1))undefined

## [8.0.0](https://github.com/MorevM/eslint-config/compare/v7.0.0...v8.0.0) (2022-02-26)


### ⚠ BREAKING CHANGES

* There was a many unused rules in `base`, `jest`, `json` and `vue` configurations.
All rules are covered, configurations become more strict

### Features

* Add mistakenly unused rules ([38145bb](https://github.com/MorevM/eslint-config/commit/38145bbe0684314bf7b62daf51b1420ee4991a8f))
* **base:** Add new option to `no-confusing-arrow` rule ([968a04b](https://github.com/MorevM/eslint-config/commit/968a04bfa1928c6f7b037697e5b8f47bb5699f99))
* **base:** Add new option to `no-shadow` rule ([6b83993](https://github.com/MorevM/eslint-config/commit/6b8399354ecc434c2f52a6b631b0cec37c08e292))


### Chores

* bump @release-it/conventional-changelog from 4.1.0 to 4.2.0 ([#25](https://github.com/MorevM/eslint-config/issues/25)) ([00405c2](https://github.com/MorevM/eslint-config/commit/00405c27afe11b2d8eb51647cc0eebed92649c23))
* bump @types/jest from 27.4.0 to 27.4.1 ([#24](https://github.com/MorevM/eslint-config/issues/24)) ([6848b5c](https://github.com/MorevM/eslint-config/commit/6848b5c4d5f984590eb962a7de04487a3ef3d077))
* bump @typescript-eslint/eslint-plugin from 5.12.0 to 5.12.1 ([#28](https://github.com/MorevM/eslint-config/issues/28)) ([090c745](https://github.com/MorevM/eslint-config/commit/090c745f28ad2c86853dfe9c1480553eb7fee694))
* bump @typescript-eslint/parser from 5.12.0 to 5.12.1 ([#26](https://github.com/MorevM/eslint-config/issues/26)) ([c78bec6](https://github.com/MorevM/eslint-config/commit/c78bec6aa873135182cd2927c6bf3a0b381bc968))
* bump eslint from 8.9.0 to 8.10.0 ([#31](https://github.com/MorevM/eslint-config/issues/31)) ([cc33be6](https://github.com/MorevM/eslint-config/commit/cc33be6bc86f1e1818ccff496ef64b73786efe93))
* bump eslint-plugin-vue from 8.4.1 to 8.5.0 ([#30](https://github.com/MorevM/eslint-config/issues/30)) ([c239cbc](https://github.com/MorevM/eslint-config/commit/c239cbc34a49edda7e9f06c7af6a6992bf60051d))
* bump release-it from 14.12.4 to 14.12.5 ([#29](https://github.com/MorevM/eslint-config/issues/29)) ([5e13a3e](https://github.com/MorevM/eslint-config/commit/5e13a3e467569a2261dcc07bc633c5de05873c2f))
* bump vue-eslint-parser from 8.2.0 to 8.3.0 ([#27](https://github.com/MorevM/eslint-config/issues/27)) ([78c6638](https://github.com/MorevM/eslint-config/commit/78c663861d29eb43d89f865dcdedf3cb63d8b344))


### Refactoring

* Better project structure ([d2e41ff](https://github.com/MorevM/eslint-config/commit/d2e41ff9c9097b7bcf2597994433f1e916520397))


### Tests

* Add test for unused and deprecated rules ([21fc9b5](https://github.com/MorevM/eslint-config/commit/21fc9b5ee0b9f24796ebc45db45885a911ef7828))


### Bug fixes

* **base:** Add `no-secrets` plugin ([fdae263](https://github.com/MorevM/eslint-config/commit/fdae26318fc655366cd471a5a5bea53d81829c23))
* **html:** Disable ESLint rules related to comments in `HTML` files ([6b19a59](https://github.com/MorevM/eslint-config/commit/6b19a59396de49dffdf4ca9505436251258f1e00))## [7.0.0](https://github.com/MorevM/eslint-config/compare/v6.0.2...v7.0.0) (2022-02-26)


### ⚠ BREAKING CHANGES

* It extends `common` config making it more strict

### Features

* Add `html` configuration ([f4f96fa](https://github.com/MorevM/eslint-config/commit/f4f96fa2f8be67aa33739467792fc19aaea86409))

### [6.0.2](https://github.com/MorevM/eslint-config/compare/v6.0.1...v6.0.2) (2022-02-19)


### Chores

* bump @babel/core from 7.17.2 to 7.17.5 ([#14](https://github.com/MorevM/eslint-config/issues/14)) ([9f82c0f](https://github.com/MorevM/eslint-config/commit/9f82c0ff47678c6b31ad230e9413c3ac233ef825))
* bump @typescript-eslint/eslint-plugin from 5.11.0 to 5.12.0 ([#15](https://github.com/MorevM/eslint-config/issues/15)) ([28d2512](https://github.com/MorevM/eslint-config/commit/28d2512c4f1ca3aaf487e7eb6f8ad8d0f5ec66c2))
* bump @typescript-eslint/parser from 5.11.0 to 5.12.0 ([#21](https://github.com/MorevM/eslint-config/issues/21)) ([db3ca71](https://github.com/MorevM/eslint-config/commit/db3ca71951a438f9550097f70f4dfea6be72faf0))
* bump eslint-plugin-jest from 26.1.0 to 26.1.1 ([#22](https://github.com/MorevM/eslint-config/issues/22)) ([cedc398](https://github.com/MorevM/eslint-config/commit/cedc398e805a84e0f0a2dcac22abb7bb5ce391d0))
* bump eslint-plugin-jsdoc from 37.9.0 to 37.9.4 ([#16](https://github.com/MorevM/eslint-config/issues/16)) ([e5f82ed](https://github.com/MorevM/eslint-config/commit/e5f82edec83ebbef6f77ab16e7ad8cefe500720e))
* bump eslint-plugin-jsonc from 2.1.0 to 2.2.1 ([#18](https://github.com/MorevM/eslint-config/issues/18)) ([6b4ded5](https://github.com/MorevM/eslint-config/commit/6b4ded56f2ed4ee15a0703923ec155f523d409ed))
* bump eslint-plugin-sonarjs from 0.11.0 to 0.12.0 ([#20](https://github.com/MorevM/eslint-config/issues/20)) ([b94fe32](https://github.com/MorevM/eslint-config/commit/b94fe3209f79d2143e81646d0275b39542cbc436))
* bump eslint-plugin-unicorn from 40.1.0 to 41.0.0 ([#19](https://github.com/MorevM/eslint-config/issues/19)) ([8a53941](https://github.com/MorevM/eslint-config/commit/8a53941b3c09a05fe87f36c6ee4fc51828a67a4d))
* bump eslint-plugin-yml from 0.13.0 to 0.14.0 ([#23](https://github.com/MorevM/eslint-config/issues/23)) ([ea334ca](https://github.com/MorevM/eslint-config/commit/ea334ca8ba9b462980c1786b01adc8df73dfc104))
* bump lint-staged from 12.3.3 to 12.3.4 ([#17](https://github.com/MorevM/eslint-config/issues/17)) ([6403fad](https://github.com/MorevM/eslint-config/commit/6403fadcb2f2aa69f6f420011d69633e38806668))


### Bug fixes

* Explicit number of lines in `sonars/no-identical-functions` ([f7b1622](https://github.com/MorevM/eslint-config/commit/f7b162214a569a1fbaf643247eabe368cc1cb282))

### [6.0.1](https://github.com/MorevM/eslint-config/compare/v6.0.0...v6.0.1) (2022-02-17)


### Bug fixes

* `typescript` config in preset `common` ([70ef0c9](https://github.com/MorevM/eslint-config/commit/70ef0c98c48907f5ae3629c1c5d56fa59756621d))
* Only `build` files in npm package ([7ce4acc](https://github.com/MorevM/eslint-config/commit/7ce4acce93d71a5f1582c2108115818bec82a499))

## [6.0.0](https://github.com/MorevM/eslint-config/compare/v5.2.0...v6.0.0) (2022-02-17)


### ⚠ BREAKING CHANGES

* Exclude `typescript` from `common` preset

### Bug fixes

* Exclude `typescript` from `common` preset ([dd10c08](https://github.com/MorevM/eslint-config/commit/dd10c0823dda6dbe489514dfcfa0024627319846))

## [5.2.0](https://github.com/MorevM/eslint-config/compare/v5.1.2...v5.2.0) (2022-02-15)


### Features

* **base:** Expicit file extensions for all except `ts` files ([5c47475](https://github.com/MorevM/eslint-config/commit/5c4747538c3b6b00dc8504d8c85b638e0dfbd6fe))


### Bug fixes

* Downgrade severity of `import/extensions` rule ([a37081a](https://github.com/MorevM/eslint-config/commit/a37081a0c1620f5da11e59dd4892385a008d2843))
* **typescript:** Smooth `naming-convention` rule ([1cff963](https://github.com/MorevM/eslint-config/commit/1cff9639f5683c7ae80ac463a398d2c0e00cb727))

### [5.1.2](https://github.com/MorevM/eslint-config/compare/v5.1.1...v5.1.2) (2022-02-14)


### Bug fixes

* **base:** Turn off `unicorn/prefer-at` rule ([d2dc345](https://github.com/MorevM/eslint-config/commit/d2dc345216d5c36b34f8eee9ca2c85cdfb3c6a71))

### [5.1.1](https://github.com/MorevM/eslint-config/compare/v5.1.0...v5.1.1) (2022-02-12)


### Bug fixes

* **typescript:** Allow to use `Function` type ([721bf90](https://github.com/MorevM/eslint-config/commit/721bf90676c7078c57f1c48f8199f1ad8cd781c9))

## [5.1.0](https://github.com/MorevM/eslint-config/compare/v5.0.1...v5.1.0) (2022-02-12)


### Features

* **jest:** Add new `jest/no-conditional-in-test` rule ([e60eb37](https://github.com/MorevM/eslint-config/commit/e60eb37736ddae62734784d17130f5dddd82838a))
* **jest:** Add new `jest/prefer-snapshot-hint` rule ([c193ce9](https://github.com/MorevM/eslint-config/commit/c193ce935e1c3593acc30ef32a1e2bf2c00a9f02))


### Bug fixes

* **jest:** Remove deprecated `no-if` in favor of using `no-conditional-in-test` ([6b6e618](https://github.com/MorevM/eslint-config/commit/6b6e618120dabc40e6c6bb68dc99a3f2f61abd53))
* **typescript:** Turn off all rules started with `no-unsafe` ([8eff032](https://github.com/MorevM/eslint-config/commit/8eff0321c70234a5036627a4ec78ba6edcb13beb))


### Chores

* bump @babel/core from 7.17.0 to 7.17.2 ([#10](https://github.com/MorevM/eslint-config/issues/10)) ([f8966c4](https://github.com/MorevM/eslint-config/commit/f8966c4118b2a75798f756d30d2f6ed039212500))
* bump @morev/commitlint-config from 0.0.7 to 0.1.0 ([#12](https://github.com/MorevM/eslint-config/issues/12)) ([ac18139](https://github.com/MorevM/eslint-config/commit/ac18139c5aff71ca9c5f446cc3375d0790013967))
* bump eslint from 8.8.0 to 8.9.0 ([#13](https://github.com/MorevM/eslint-config/issues/13)) ([dfc01f3](https://github.com/MorevM/eslint-config/commit/dfc01f3fad246eafe2fcc36941d451c8354f0dd4))
* bump eslint-plugin-jest from 26.0.0 to 26.1.0 ([#9](https://github.com/MorevM/eslint-config/issues/9)) ([91229dd](https://github.com/MorevM/eslint-config/commit/91229ddffab2ff4bd856b9c477b67abf39feac0d))
* bump eslint-plugin-jsdoc from 37.7.1 to 37.9.0 ([#8](https://github.com/MorevM/eslint-config/issues/8)) ([3f6dbd3](https://github.com/MorevM/eslint-config/commit/3f6dbd3157423e9752b64b75598f74009550c801))
* bump jest from 27.5.0 to 27.5.1 ([#11](https://github.com/MorevM/eslint-config/issues/11)) ([23f608f](https://github.com/MorevM/eslint-config/commit/23f608f363268e17394db145adbf70ffdb16a5ca))
* **release-it:** Upgrade `conventional-changelog` for better changelog ([a3bf69b](https://github.com/MorevM/eslint-config/commit/a3bf69b29b096c3331e84dc6d05b9a5c1341ef3e))


### Tests

* Fix false positives of new rule ([38eb64c](https://github.com/MorevM/eslint-config/commit/38eb64c3ff3cf2c5dcba6a76151494d03fb99789))

### [5.0.1](https://github.com/MorevM/eslint-config/compare/v5.0.0...v5.0.1) (2022-02-12)


### Bug Fixes

* **package-json:** Respect `types` field in `package.json` ([8f479d3](https://github.com/MorevM/eslint-config/commit/8f479d31d3be1c3e2815fdcd32d3452a2c8f9047))
* **typescript:** Soften the variables naming convention to `camelCase` (was `strictCamelCase`) ([fab1bda](https://github.com/MorevM/eslint-config/commit/fab1bda8e7c23acff6082e62d2bb0fc5325714fc))

## [5.0.0](https://github.com/MorevM/eslint-config/compare/v4.0.1...v5.0.0) (2022-02-11)


### ⚠ BREAKING CHANGES

* Change naming convention of `configurations` and `presets`

### Features

* Change naming convention of `configurations` and `presets` ([525c5bb](https://github.com/MorevM/eslint-config/commit/525c5bb878505eec06a3cf038220281b70446485))


### Bug Fixes

* Correct `.editorconfig` ([5ab7af2](https://github.com/MorevM/eslint-config/commit/5ab7af290e451e19db3f21e675fa6d79e3c2f1f7))
* Downgrade severity of multiple rules ([751253b](https://github.com/MorevM/eslint-config/commit/751253b6e3a3ca0bf4f56db79aad10842b6a6e5c))
* Upgade `README.md` ([87db1d5](https://github.com/MorevM/eslint-config/commit/87db1d5e94e3d13286f859c366b79451a0b41a53))

### [4.0.1](https://github.com/MorevM/eslint-config/compare/v4.0.0...v4.0.1) (2022-02-11)


### Bug Fixes

* Add `typescript` preset ([afb7068](https://github.com/MorevM/eslint-config/commit/afb70689ac34161c4413cd4b6001b840946b8714))

## [4.0.0](https://github.com/MorevM/eslint-config/compare/v3.1.7...v4.0.0) (2022-02-11)


### ⚠ BREAKING CHANGES

* Add `typescript` configuration

### Features

* Add `typescript` configuration ([9c37323](https://github.com/MorevM/eslint-config/commit/9c37323fa5028d7b18d7985f1fa2f36ad622255a))

## [3.1.7](https://github.com/MorevM/eslint-config/compare/v3.1.6...v3.1.7) (2022-02-05)

## [3.1.6](https://github.com/MorevM/eslint-config/compare/v3.1.5...v3.1.6) (2022-02-05)

## [3.1.5](https://github.com/MorevM/eslint-config/compare/v3.1.4...v3.1.5) (2022-02-03)


### Bug Fixes

* **base:** Downgrade severity of `unicorn/push-push` rule to `warn`, disable autofix for that rule ([fa0a902](https://github.com/MorevM/eslint-config/commit/fa0a90253504c6aa79c13e2e6fefdf01b857a098))

## [3.1.4](https://github.com/MorevM/eslint-config/compare/v3.1.3...v3.1.4) (2022-02-02)


### Bug Fixes

* Add `node 15` to package json `engines` field ([519a9e8](https://github.com/MorevM/eslint-config/commit/519a9e8469b238bf4b5cbe20e6703d0d9873a509))

## [3.1.3](https://github.com/MorevM/eslint-config/compare/v3.1.2...v3.1.3) (2022-02-02)


### Bug Fixes

* **comments:** Disable autofix for rule `eslint-comments/no-unused-disable` ([ffcbfc7](https://github.com/MorevM/eslint-config/commit/ffcbfc772f5d12927758f879d566bc73c60906fb))

## [3.1.2](https://github.com/MorevM/eslint-config/compare/v3.1.1...v3.1.2) (2022-02-02)


### Bug Fixes

* **base:** Turn off rule `unicorn/no-nested-ternary` ([fafd820](https://github.com/MorevM/eslint-config/commit/fafd8208529f830daeb2bd00820aa1ec8597b735))
* **comments:** Disable autofix for rule `eslint-comments/no-unused-disable` ([899af24](https://github.com/MorevM/eslint-config/commit/899af2409130e34c2716e3c8c4e5b0cc78fb0f62))
* **vue:** Disable `vue/preder-template` (blocking `vue-template-babel-compiler`) ([0e5ced0](https://github.com/MorevM/eslint-config/commit/0e5ced06ef524dcce160445e9c87cffc0394ddf8))
* **vue:** Turn off `no-undef-properties` due lack of Vuex support ([275f98f](https://github.com/MorevM/eslint-config/commit/275f98fd916b03f7f1cbc38ea360c311d1673b1c))
* **yaml:** Disable `yml/plain-scalar` for date-like strings ([3d2fcfc](https://github.com/MorevM/eslint-config/commit/3d2fcfcf6a8dc8e3f0b67f93474f3c4cd0a2cbae))
* **yaml:** Disable `yml/plain-scalar` rule for keys starts with `/` ([6aaa4f2](https://github.com/MorevM/eslint-config/commit/6aaa4f2563bb74d43b0c815050cadfa811ebceca))
* **yaml:** Disable `yml/plain-scalar` rule for string which can be interpeted as numbers with `_` ([7c9d85b](https://github.com/MorevM/eslint-config/commit/7c9d85b226980ad9169f01218c2f5bb9965cc1e6))
* **yaml:** Increase limit for `max-len` rule and downgrade severity to `warn` for yaml files ([0f98c16](https://github.com/MorevM/eslint-config/commit/0f98c16149dc469521f9b63b565495321d5b477a))

## [3.1.1](https://github.com/MorevM/eslint-config/compare/v3.1.0...v3.1.1) (2022-01-31)


### Bug Fixes

* **base:** Allow variables which starts with `_` be unused ([ffd01db](https://github.com/MorevM/eslint-config/commit/ffd01db2c32cd072073d6cd9bd92d0a6e6413b0d))

# [3.1.0](https://github.com/MorevM/eslint-config/compare/v3.0.0...v3.1.0) (2022-01-31)


### Bug Fixes

* **base:** `avoidQuotes` option in `object-shorthand` rule should be `false` ([1af2f49](https://github.com/MorevM/eslint-config/commit/1af2f493b81e7dc8d85ef492c52c755db1f55a7d))
* **base:** Add `pathGroups` option to `import/order` rule ([6d18a8c](https://github.com/MorevM/eslint-config/commit/6d18a8cbb2d230b0a9259defaf6fb4a2bf717bd6))
* **base:** Rule `import/no-unassigned-import` turned off ([d76ca31](https://github.com/MorevM/eslint-config/commit/d76ca31759d9eb8d41f3dee5f8c8f1d478866fe8))
* **base:** Rule `jsdoc/require-description-complete-sentence` turned off ([26c7d1a](https://github.com/MorevM/eslint-config/commit/26c7d1a0dd0c04cb0bde0199859fd6dae0b758e9))
* **base:** Rule `unicorn/prefer-string-replace-all` turned off for a while ([aed36c3](https://github.com/MorevM/eslint-config/commit/aed36c324e412d373146f6838da949b15b682f12))
* **node:** Reverse rule `node/file-extension-in-import` ([1b41b4e](https://github.com/MorevM/eslint-config/commit/1b41b4e1cb59a16799b81352aa56e2dc0ceea071))


### Features

* **vue:** Add babel plugin to transform JSX syntax ([4a07eaa](https://github.com/MorevM/eslint-config/commit/4a07eaa0bb95b680d54ff79433a96d662fce2ec9))

# [3.0.0](https://github.com/MorevM/eslint-config/compare/v2.1.0...v3.0.0) (2022-01-31)


### Code Refactoring

* Change `all` preset name to `common` excluding `vue` configuration from it ([8e01cd3](https://github.com/MorevM/eslint-config/commit/8e01cd39f8c46061abeba8e09ec8b52fb92e851f))


### Features

* **package-json:** Add all fields from current NPM release ([60f1b15](https://github.com/MorevM/eslint-config/commit/60f1b15e1845688ca1478907468bf0371ddd44d7))
* **vue:** Review `vue2` rules and implement `vue3` rules ([b6074ff](https://github.com/MorevM/eslint-config/commit/b6074ff0783c773d46e8706befe1ff1f604072fb))


### BREAKING CHANGES

* Preset `all` no longer exists

# [2.1.0](https://github.com/MorevM/eslint-config/compare/v2.0.0...v2.1.0) (2022-01-30)


### Bug Fixes

* **base:** Downgrade severity 'unicorn/no-unused-properties' to warn ([5b3e4aa](https://github.com/MorevM/eslint-config/commit/5b3e4aa5e2dbc6fc73804090ced0505cbec343b7))
* **node:** Turn off rules under category `no-unsupported-features` ([28407c0](https://github.com/MorevM/eslint-config/commit/28407c06107ce7e553de7be1dd93077314e0f2a9))


### Features

* **preset/all:** Add `vue2` config to preset `all` ([4f435ed](https://github.com/MorevM/eslint-config/commit/4f435ed53e645b7bdd55c8e1f5cf394ddde1a54e))

# [2.0.0](https://github.com/MorevM/eslint-config/compare/v1.1.1...v2.0.0) (2022-01-30)


### Bug Fixes

* **base:** Downgrade `prefer-destructuring` severity to `warn` ([8f9a9ee](https://github.com/MorevM/eslint-config/commit/8f9a9ee9712379d78243210c4ae6412da72cd663))
* **node:** Force `.json` to be in `import` statements ([e09b8b3](https://github.com/MorevM/eslint-config/commit/e09b8b35bc4286152b3b151e72198a84a7d04c1c))
* Update `README.md` ([d0e069a](https://github.com/MorevM/eslint-config/commit/d0e069acb5c3b0744e4412b5f91c82f31a707843))


### Features

* Add `/preset/all` in `exports` to make things consistent ([8be5b7f](https://github.com/MorevM/eslint-config/commit/8be5b7f373ca8c6857235932cb1002abef2b05f5))
* **base:** Add rules from `eslint-plugin-eslint-comments` ([02028dd](https://github.com/MorevM/eslint-config/commit/02028ddf74e6b73c50a1bf894a4f35a8887442cb))
* **base:** Add rules from `eslint-plugin-import` ([4e70092](https://github.com/MorevM/eslint-config/commit/4e70092c9426c422f156bdbc93af9a00cc6087de))
* **base:** Add rules from `eslint-plugin-jsdoc` ([ccb4622](https://github.com/MorevM/eslint-config/commit/ccb4622bb281479206e321f96c3bb18837149bd3))


### BREAKING CHANGES

* **base:** Configuration `base` and preset `all` becomes more strict due newly added plugins

## [1.1.1](https://github.com/MorevM/eslint-config/compare/v1.1.0...v1.1.1) (2022-01-29)


### Bug Fixes

* Correct build path ([94428e4](https://github.com/MorevM/eslint-config/commit/94428e4c0e90dba5e6bfefe853904b376ff23e26))

# [1.1.0](https://github.com/MorevM/eslint-config/compare/v1.0.0...v1.1.0) (2022-01-29)


### Bug Fixes

* Configurations path on `build` step ([e6fef9a](https://github.com/MorevM/eslint-config/commit/e6fef9a0a6b079174b393ed4f34e6d28c0e787bc))
* **node:** Add `node` configs in `build` step ([8e3091c](https://github.com/MorevM/eslint-config/commit/8e3091ce4fd126a8f67a9b81d1f40bbb80496cf4))
* Wrong URIs after package renaming ([f8a0cc2](https://github.com/MorevM/eslint-config/commit/f8a0cc2e1949ff0fdb1346252017befb18d3350e))


### Features

* Add `presets` of rules with predefined `overrides` ([0b959ed](https://github.com/MorevM/eslint-config/commit/0b959ed99271490d60beda00a4436b321545483a))
* Move browser-related rules to separate config ([d531b56](https://github.com/MorevM/eslint-config/commit/d531b56cb2bf274bb473efb3c9c016b02a8fc667))

# [1.0.0](https://github.com/MorevM/eslint-config-more/compare/v0.2.4...v1.0.0) (2022-01-29)


### Bug Fixes

* Add `build` directory to `package.json > files` ([e3494d3](https://github.com/MorevM/eslint-config-more/commit/e3494d3f0d1074f1f2e8ce8b0711dacb2c677adb))
* Add forgotten main file in `exports` section ([38a8f69](https://github.com/MorevM/eslint-config-more/commit/38a8f693343dc949911372bdcde85e4dc3743d08))
* **js:** Downgrade severity of `prefer-const` rule and disable autofix ([016a795](https://github.com/MorevM/eslint-config-more/commit/016a795955be6bb42da71357addbc5c34d1248f0))
* **json:** Disable inheritance from base config for `sort-keys` rule ([a2926eb](https://github.com/MorevM/eslint-config-more/commit/a2926ebc927d703c1fd68fea88a58148ce22e936))
* Rename `languages` to `configurations` ([366c225](https://github.com/MorevM/eslint-config-more/commit/366c2257f74d69c46013648b69395b1243a840d1))
* Simplify `JSON` glob patterns ([2de8fa7](https://github.com/MorevM/eslint-config-more/commit/2de8fa76c7f39fe8ef05032989bec73da3634e73))


### Features

* Add `build` step ([0ff6d86](https://github.com/MorevM/eslint-config-more/commit/0ff6d86204a8680e43a420e2bc2f7aaf89365e5f))
* **node:** Add `node` configuration ([0d26a44](https://github.com/MorevM/eslint-config-more/commit/0d26a448dfc43ed1f27ee583322defa6a916b65e))


### BREAKING CHANGES

* Changed `overrides` mechanics and `exports` field in `package.json`

## [0.2.4](https://github.com/MorevM/eslint-config-more/compare/v0.2.3...v0.2.4) (2022-01-25)


### Bug Fixes

* **js:** Disable autofix and rule `implicit-arrow-linebreak` at all ([07c6104](https://github.com/MorevM/eslint-config-more/commit/07c6104e51064cd8f45516ba472364661489699c))
* **unicorn:** Disable autofix for `prefer-string-slice` rule ([e5f667e](https://github.com/MorevM/eslint-config-more/commit/e5f667e52417d672b24585c130f2f60f6974057d))
* **vue2:** Downgrade severity of `vue/comment-directive` to `warn` ([48c9139](https://github.com/MorevM/eslint-config-more/commit/48c9139f0d80ffc6b50dfd6d9ea42e10d2431a8a))

## [0.2.3](https://github.com/MorevM/eslint-config-more/compare/v0.2.2...v0.2.3) (2022-01-25)


### Bug Fixes

* Add `jest` configs in `package.json` `exports` field ([21a68bf](https://github.com/MorevM/eslint-config-more/commit/21a68bfe490a2543518c86588cb9ba634ff58780))

## [0.2.2](https://github.com/MorevM/eslint-config-more/compare/v0.2.1...v0.2.2) (2022-01-25)

## [0.2.1](https://github.com/MorevM/eslint-config-more/compare/v0.2.0...v0.2.1) (2022-01-25)


### Bug Fixes

* Explicit ignore `node_modules` in `.eslintignore` ([8ed08af](https://github.com/MorevM/eslint-config-more/commit/8ed08af4207282145e7ff5f691ec57a86549aa5f))

# [0.2.0](https://github.com/MorevM/eslint-config-more/compare/v0.1.1...v0.2.0) (2022-01-25)


### Bug Fixes

* Prevent duplication of array values in `plugins` section ([68e46c4](https://github.com/MorevM/eslint-config-more/commit/68e46c4cec795f827e145ae3df43edd1c43cef5b))


### Features

* **jest:** Add `jest` configuration ([f1f694d](https://github.com/MorevM/eslint-config-more/commit/f1f694ddf45fb11f6870b72ad3558367523f158a))

## [0.1.1](https://github.com/MorevM/eslint-config-more/compare/v0.1.0...v0.1.1) (2022-01-25)


### Bug Fixes

* Increased `max` property `2 -> 3` in `max-statements-per-line` ([f43cde4](https://github.com/MorevM/eslint-config-more/commit/f43cde449bd91eca87a8dde634584b5908fa07ad))
* **sonarjs:** Downgrade severity of `sonarjs/no-duplicate-string` to `warn` ([8497699](https://github.com/MorevM/eslint-config-more/commit/8497699878f8d9e68c89e1dde4d12857a0c61fa0))

# [0.1.0](https://github.com/MorevM/eslint-config-more/compare/v0.0.1...v0.1.0) (2022-01-24)


### Bug Fixes

* Typo in README.md ([a9811c9](https://github.com/MorevM/eslint-config-more/commit/a9811c93a913c9a57d8be7f5f466815cf4a6d8c1))
* **vue2:** Typo in extension rules ([e4429fc](https://github.com/MorevM/eslint-config-more/commit/e4429fc20c23479ddfa52a0df7bc2ee83dbf4815))


### Features

* Add `no-autofix` plugin for rules with (partially) incorrect behavior ([8131560](https://github.com/MorevM/eslint-config-more/commit/8131560f4197f4981e04b0ee9d64736fdc25ebe0))
* **vue2:** Add `@babel/eslint-parser` as part of this repo ([913037b](https://github.com/MorevM/eslint-config-more/commit/913037bf95e56bfb5045e3b1ba85051a75302600))

## 0.0.1 (2022-01-24)

Initial commit
