---
name: update-dependencies
description: |
  Use when updating dependencies in this shared ESLint config package, including dependencies, devDependencies,
  peerDependencies, ESLint core, rule providers, parsers, resolvers, runtime helpers, CLI dependencies, type packages,
  toolchain packages, lockfiles, release-note review, and dependency-specific commit bodies.
---

# Update Dependencies

Read the project `AGENTS.md` first for repository layout, local conventions, published entrypoints, and project-specific
checks. Use `.agents/skills/commit-messages/SKILL.md` for general commit-message rules.

## Workflow

1. Identify the package role: peer dependency, ESLint core, rule provider, parser, resolver, runtime helper, CLI
   dependency, type package, dev tool, release tool, or transitive-only lockfile update.
1. Check the installed version in `package.json` and `pnpm-lock.yaml`.
1. Check the target version from the package registry when the task asks for latest or current updates.
1. Read upstream release notes from oldest to newest release in the update range.
1. If a rule-provider update depends on a parser update, update the parser first, finish its inspection and validation,
   then update the rule provider.
1. Install or update exactly one direct package when the lockfile needs to change.
1. Inspect the installed package when behavior, exports, rules, options, peer ranges, or engines may have changed.
1. Adjust configuration, tests, docs, or package metadata only when the update requires it.
1. Run validation that matches the package role and the files touched.
1. For multi-package tasks, finish the full update cycle for one direct package before touching the next one: research,
   installation, inspection, validation, and the dependency-only commit.
1. If that package requires follow-up repository changes, such as new rule coverage, renamed options, config edits, tests,
   or documentation, make those focused follow-up commits immediately after the dependency-only commit and before moving
   to the next package.

Do not update multiple direct packages in one install/update command, and do not batch dependency commits at the end of a
larger update run. Each direct package update must leave the repository committed before the next direct package is
installed. Sequential updates make lockfile and transitive changes attributable to a specific direct package.

## Package-Specific Guardrails

- Do not update `eslint-plugin-sonarjs` and `@release-it/conventional-changelog` during broad
  or routine dependency updates unless the user explicitly asks to update them by name.
- Keep `@types/node` on the same major version as the repository's declared Node.js engine support in
  `package.json#engines.node`. For example, when `engines.node` is `>=22.x`, update `@types/node` only within major 22
  unless the engine range is changed intentionally first.

## Dependency Roles

- **ESLint core and peer dependencies**: verify flat config API compatibility, rule metadata shape, declared peer ranges,
  Node engine requirements, and consumer upgrade impact.
- **Rule providers**: inspect new, changed, renamed, deprecated, and removed rules.
  Account for each exposed rule through config, tests, or a deliberate known-unused decision.
- **Parsers, language integrations, and resolvers**: verify parser exports, parser options, syntax support, file-extension
  handling, resolver settings, peer coupling, and config shape changes.
- **Runtime helpers and CLI dependencies**: inspect changed exports, ESM/CJS shape, Node engine changes, thrown errors,
  prompts, formatting, package-manager detection, semver handling, and behavior used by `src/cli`.
- **Published export dependencies**: verify that `src/parsers.ts`, `src/plugins.ts`, package exports, and generated
  declaration surfaces remain valid.
- **Dev, build, test, and release tools**: verify affected tool entrypoints, config compatibility, generated output
  expectations, hooks, CI behavior, and release flow.
- **Type packages**: verify compile-time compatibility and remove types that become obsolete because upstream ships them.
- **Transitive-only lockfile updates**: keep the change lockfile-scoped unless release notes reveal a direct action.

## Release Research

- Prefer primary sources:
  - npm metadata for latest version, peer dependencies, engines, package type, and exports;
  - GitHub release API or raw changelog files for complete release notes;
  - upstream docs, package source, or runtime exports for exact behavior.
- GitHub release pages can collapse long rule lists, so use the API or raw release data when completeness matters.
- Track changes that affect shared configs:
  - rule additions, removals, renames, deprecations, option changes, and default changes;
  - parser, resolver, syntax, or platform support changes;
  - package export and module format changes;
  - peer dependency, Node engine, and package manager requirement changes;
  - CLI, config, build, test, or release-tool changes.

## Rule-Provider Updates

- Work from earlier provider releases to later provider releases.
- For every new or changed rule, inspect rule metadata from the installed package, not only release notes:
  - `meta.docs.description`;
  - `meta.type`;
  - `meta.fixable` and `meta.hasSuggestions`;
  - `meta.schema` and `meta.defaultOptions`;
  - deprecation metadata and replacement rule;
  - whether the rule requires type information.
- If packaged Markdown docs are absent, use runtime provider exports or rule source as the primary source.
- Verify browser and runtime API availability before enabling rules that introduce newer platform APIs.
  Compare the API against the package's supported engines and compatibility baseline.
  If the API is too new, keep the rule `off` and add a dated TODO for reconsideration when the API is Widely Available.
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
- For new or changed rules with options, verify the final rule entry against `meta.schema` before committing.
  If an option is intentionally not configured because it is mode-specific, unavailable for the chosen config shape,
  or otherwise inapplicable, document that reason in the rule comment or commit summary.
- For renamed rules, update the rule id and documentation link together, preserving the existing severity and options
  when still valid.
- For dropped rules, remove the old rule and add the upstream replacement in separate commits unless upstream documents a
  direct rename.
- For option renames, make the smallest possible commit that changes only the affected option names and necessary comments.

## Rule Entry Style

- Add a short comment describing the rule, preferably copied from upstream rule docs.
- Rewrite the upstream description only when it is objectively unclear, inaccurate, outdated, or contains an error.
- Start the rule description with a capital letter.
- Mark autofix support in the description with `(autofixable)` or `(partially autofixable)` when the rule supports it.
- Add a link to the upstream rule documentation.
- Add an optional `Note:` or `Reason:` comment only when it explains a non-obvious local decision:
  disabling a rule, using `no-autofix/`, choosing non-default options, adding a TODO, handling compatibility or
  type-system issues, or documenting known false positives.
- Do not add `Note:` or `Reason:` comments that merely restate what the rule does or justify routine `warn` severity for
  stylistic preference rules.
- When a rule is disabled because a required runtime API is not Widely Available yet, a dated compatibility TODO is
  enough. Do not add a separate `Reason:` comment that only repeats the same compatibility limitation.
- When a rule accepts options (`meta.schema` is non-empty or upstream docs describe options), use the option-bearing
  config form and list the final value for every option that affects the rule's behavior, even when the value matches the
  provider default or the rule is configured as `off`. Use provider defaults as researched values, not as permission to
  omit options.

## Commit And Verification Notes

- Keep each direct package bump in its own dependency-only commit.
- Keep dependency-only bumps separate from behavior, rule, configuration, test, or documentation changes.
- Keep each rule, rename, option change, known-unused decision, config change, test change, or docs change focused.
- Expect a dependency-only intermediate commit to fail `no-bad-rules` when the bumped provider exposes new active rules.
- For dependency-only commits, write the body with the summary first and release notes links after it.
  Start with a concise summary of upstream changes that affect this config or its consumers; if none are relevant, say so
  first.
  Do not include process justifications or temporary validation-state notes, such as an expected `no-bad-rules` failure.
  Keep the body limited to information that helps review the dependency change itself.
- Run `pnpm exec vitest run __tests__/no-bad-rules.test.ts` after completing each coherent rule-coverage step.
- Run `pnpm build` when dependency changes touch published entrypoints, parser/plugin exports, package metadata, or the CLI.
- The final state for the processed update must pass focused checks for the changed dependency role.
