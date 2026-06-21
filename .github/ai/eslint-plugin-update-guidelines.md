# ESLint plugin update guidelines

Use this workflow when updating ESLint plugins that provide rules for this shared config.

## Key repository facts

- Rule configurations live under `src/configurations`.
- Commit scopes for rule changes are derived from the first directory under `src/configurations`.
  For example, changes in `src/configurations/javascript/plugins/unicorn.ts` use `javascript`,
  and changes in `src/configurations/browser/rules/unicorn.ts` use `browser`.
- A single plugin, or even core ESLint rules, may be used across multiple configuration scopes.
  Place each rule in the configuration that matches the rule's domain instead of assuming one plugin belongs to one scope.
- Path aliases follow a local convention: `#` aliases map to concrete files, and `~` aliases map to directories.
  Preserve this convention when changing imports or runtime loaders.
- Rule entries follow the local style:
  - a short comment describing the rule, preferably copied from upstream rule docs;
  - rewrite the upstream description only when it is objectively unclear, inaccurate, outdated, or contains an error;
  - start the rule description with a capital letter;
  - mark autofix support in the description with `(autofixable)` or `(partially autofixable)` when the rule supports it;
  - a link to the upstream rule documentation;
  - an optional `Note:` or `Reason:` comment when the severity or options are not obvious;
  - the rule configuration, using plugin-provided defaults when available and otherwise listing all options explicitly.
- The test `__tests__/no-bad-rules.test.ts` checks unknown, deprecated, and unconfigured rules.
  A new plugin rule must be either configured or deliberately listed as known unused.

## Release research

- Check the current installed version in `package.json` and `pnpm-lock.yaml`.
- Check the latest available plugin version from the package registry.
- Read upstream release notes from oldest to newest release in the update range.
- Prefer primary sources:
  - npm package metadata for the actual latest version and peer requirements;
  - GitHub release API bodies for complete changelog entries;
  - upstream rule docs or published rule source for exact options and defaults.
- GitHub release pages can collapse long rule lists, so use the API or raw release data when completeness matters.
- Track all changelog categories that affect this config:
  - new rules;
  - dropped rules;
  - renamed rules;
  - deprecated rules;
  - option renames and default changes;
  - peer dependency or engine requirements.

## Commit strategy

- Work from earlier plugin releases to later plugin releases.
- Make dependency bump commits separately from rule/configuration commits.
- Make each rule, rename, option change, or known-unused decision a separate commit.
- Do not combine a dependency bump with a rule addition just to keep intermediate commits green.
  With this repository's rule-coverage test, temporary red commits are expected when using this history style.
- Dependency-only commits must use the exact format from `commit-message-guidelines.md`:

  ```sh
  chore: Bump `{package}` from {old-version} to {new-version}
  ```

- New rule commits follow `commit-message-guidelines.md`:
  - `feat(<scope>): Add `{plugin}/{rule}` rule` for `warn`;
  - `feat(<scope>)!: Add `{plugin}/{rule}` rule` with `BREAKING CHANGE:` for `error`;
  - `feat(<scope>): Take account of `{plugin}/{rule}` rule` for `off`.

## Rule decisions

- Configure every new active rule, even when the decision is to keep it off.
- Prefer `error` for problem rules that catch likely runtime bugs, invalid API usage, or security-sensitive patterns.
- Prefer `warn` for suggestion or preference rules that improve readability, modernity, or maintainability
  but may need migration time.
- Use `off` only when the rule is too opinionated, noisy, redundant with another configured rule,
  or incompatible with the repository's style.
- If a rule's autofix may be surprising, use the `no-autofix/` wrapper when the repository already uses that pattern
  for similar rules.
- Keep options explicit when they document an intentional compromise, even if the option value equals the upstream default.
  Example: `unicorn/no-array-reverse` and `unicorn/no-array-sort` use `allowExpressionStatement: true`
  to allow in-place mutation statements while warning on using the returned array value.
- For renamed rules, update the rule id and documentation link in the same commit,
  preserving the existing severity and options when still valid.
- For dropped rules, remove the old rule and add the upstream replacement in separate commits unless the replacement is a direct rename.
- For option renames, make the smallest possible commit that changes only the affected option names and any necessary comments.

## Verification

- Run changed-file ESLint for the files touched by the current task.
- Run `pnpm exec vitest run` after completing each coherent rule-coverage step.
- Expect dependency-only intermediate commits to fail `no-bad-rules` when the bumped plugin exposes new active rules.
  The final state after all rules for the processed release are handled must pass tests.
- If a pre-commit hook blocks a deliberately partial commit because a later commit in the same planned series fixes it,
  confirm the reason and use `--no-verify` only for that already-approved commit.
