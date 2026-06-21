# Commit message guidelines

This repository is a base shared ESLint config for other projects that follows Conventional Commits.

## General format

```sh
<type>(<scope>): <subject>
```

or, for breaking changes:

```sh
<type>(<scope>)!: <subject>

BREAKING CHANGE: <description>
```

- `type` is a required part and must follow Conventional commits.

  Available types:
  - `feat` - for adding new rules to the config, or to changing rules to a higher severity level (off -> warn -> error),
    and for adding new functionality to the repository itself, not to the configuration rules.
  - `fix` - for changing the severity of rules to a lower level (error -> warn -> off),
    or fixing errors in the repository itself.
  - `chore` - for updating, adding, or removing dependencies.
  - `refactor` - for updating the internal logic within the repository without changing the functionality.
  - `test` - for any changes related to tests.
  - `docs` - for changes to the documentation presented in `README.md`.
  - `ci` - for changes within Github Actions.
  - `nvm` - for describing minor commits, such as typo fixes.

- `scope` - a mandatory part when changing rules, reflects the name of the configuration to which the change belong.
  `scope` MUST be derived EXACT from the first directory under `./src/configurations/`, for example:

  ```sh
  File: ./src/configurations/javascript/plugins/unicorn.ts
  Scope: javascript
  ```

  ```sh
  File: ./src/configurations/typescript/rules/typescript.ts
  Scope: typescript
  ```

  `scope` should be omitted when making changes to the repository itself,
  rather than to the rules provided by the config.

- `subject` must be imperative, concise, and descriptive. \
  `subject` must be in sentence case except it starts with ` character.

- `description` must describe the impact on consumers of the shared ESLint config, not just the code change itself.

## ESLint rule changes

### Adding a new rule

- When a new rule is introduced with severity `warn`, use the exact format:

  ```sh
  feat(<scope>): Add `{plugin-name}/{rule-name}` rule
  ```

- When a new rule is introduced with severity `error`, use a format with breaking changes:

  ```sh
  feat(<scope>)!: Add `{plugin-name}/{rule-name}` rule

  BREAKING CHANGE: <description>
  ```

  The breaking change description must explain why existing projects may fail linting. Example:

  ```txt
  With the new rule `{rule-name}`, code that uses `{violated-patterns}` will produce an error.
  ```

- When a new rule is introduced with severity `off`, use the exact format:

  ```sh
  feat(<scope>): Take account of `{plugin-name}/{rule-name}` rule
  ```

## Dependency-only changes

If a commit only updates dependency versions, use the following format exactly:

```sh
chore: Bump `{package}` from {old-version} to {new-version}
```

Use backticks around package and rule names. Do not use backticks for version numbers. \
If the commit includes any non-dependency-related changes, this format must not be used.
