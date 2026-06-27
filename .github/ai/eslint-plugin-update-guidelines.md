# ESLint plugin update guidelines

Use this workflow when updating ESLint plugins that provide rules for this shared config.

## Key repository facts

- Rule configurations live under `src/configurations`.
- Commit scopes for rule changes are derived from the first directory under `src/configurations`.
  For example, changes in `src/configurations/javascript/plugins/unicorn.ts` use `javascript`,
  and changes in `src/configurations/browser/rules/unicorn.ts` use `browser`.
- A single plugin, or even core ESLint rules, may be used across multiple configuration scopes.
  Place each rule in the configuration that matches the rule's domain instead of assuming one plugin belongs to one scope.
- Within each configuration file, keep rules in the order used by the plugin's own rule documentation or rule export index.
  Release notes define the update processing order, not the final ordering inside config files.
- Path aliases follow a local convention: `#` aliases map to concrete files, and `~` aliases map to directories.
  Preserve this convention when changing imports or runtime loaders.
- Rule entries follow the local style:
  - a short comment describing the rule, preferably copied from upstream rule docs;
  - rewrite the upstream description only when it is objectively unclear, inaccurate, outdated, or contains an error;
  - start the rule description with a capital letter;
  - mark autofix support in the description with `(autofixable)` or `(partially autofixable)` when the rule supports it;
  - a link to the upstream rule documentation;
  - an optional `Note:` or `Reason:` comment only when it explains a non-obvious local decision:
    disabling a rule, using `no-autofix/`, choosing non-default options,
    adding a TODO, handling compatibility or type-system issues, or documenting known false positives;
  - do not add `Note:` or `Reason:` comments that merely restate what the rule does
    or justify routine `warn` severity for stylistic preference rules;
  - the rule configuration. When a rule accepts options (`meta.schema` is non-empty
    or upstream docs describe options), always use the option-bearing config form
    and list the final value for every option that affects the rule's behavior,
    even when the value matches the plugin-provided default or the rule is configured as `off`.
    Use plugin-provided defaults as researched values, not as permission to omit options.
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

## Rule research

- For every new or changed rule, inspect rule metadata from the installed package, not only release notes:
  - `meta.docs.description`;
  - `meta.type`;
  - `meta.fixable` and `meta.hasSuggestions`;
  - `meta.schema` and `meta.defaultOptions`;
  - whether the rule requires type information.
- If packaged Markdown docs are absent, use runtime plugin exports or rule source as the primary source.
- Verify browser and runtime API availability before enabling rules that introduce newer platform APIs.
  Compare the API against the package's supported engines and compatibility baseline.
  If the API is too new, keep the rule `off` and add a dated TODO for reconsideration when the API is Widely Available.

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
- Treat `error` as a consumer-facing breaking change.
- Prefer `error` for problem rules that catch likely runtime bugs, invalid API usage, or security-sensitive patterns.
- Prefer `warn` for suggestion or preference rules that improve readability, modernity, or maintainability
  but may need migration time.
- Use `off` only when the rule is too opinionated, noisy, redundant with another configured rule,
  or incompatible with the repository's style.
- Also use `off` for compatibility-sensitive modern APIs, public API shape choices, broad syntax preferences,
  and type-aware rules in shared configs that also target non-type-aware files.
- Do not assume an autofix is safe because the rule is marked fixable.
  Use the `no-autofix/` wrapper when the fix:
  - moves code across branches or control-flow boundaries;
  - changes scheduling, evaluation order, or number of calls;
  - rewrites public API shapes;
  - may obscure intentional test or development scaffolding.
- Keep options explicit when they document an intentional compromise, even if the option value equals the upstream default.
  Example: `unicorn/no-array-reverse` and `unicorn/no-array-sort` use `allowExpressionStatement: true`
  to allow in-place mutation statements while warning on using the returned array value.
- For new or changed rules with options, verify the final rule entry against `meta.schema` before committing.
  If an option is intentionally not configured because it is mode-specific, unavailable for the chosen config shape,
  or otherwise inapplicable, document that reason in the rule comment or commit summary.
- For renamed rules, update the rule id and documentation link in the same commit,
  preserving the existing severity and options when still valid.
- For dropped rules, remove the old rule and add the upstream replacement in separate commits unless the replacement is a direct rename.
- For option renames, make the smallest possible commit that changes only the affected option names and any necessary comments.

## Verification

- Run changed-file ESLint for the files touched by the current task.
- Run `pnpm exec vitest run __tests__/no-bad-rules.test.ts` after completing each coherent rule-coverage step.
  Use broader test runs when the update changes shared helper logic, build output, or runtime behavior.
- Expect dependency-only intermediate commits to fail `no-bad-rules` when the bumped plugin exposes new active rules.
  The final state after all rules for the processed release are handled must pass tests.
- If a plugin update reveals unconfigured rules from other already-installed plugins, finish the requested plugin first,
  then handle the remaining rule-coverage failures separately so the final repository state is green.
- Before committing, stage only files/lines that belong to the planned commit.
- If a pre-commit hook blocks a deliberately partial commit because a later commit in the same planned series fixes it,
  confirm the reason and use `--no-verify` only for that already-approved commit.
