---
name: commit-messages
description: |
  Use when proposing, rewriting, splitting, or creating Git commits in this repository, including Conventional Commit
  subjects, scopes, bodies, breaking-change notes, and atomic commit boundaries for rule, config, dependency, tooling,
  documentation, and release work.
---

# Commit Messages

Read the project `AGENTS.md` first. If the task updates dependencies, also read
`.agents/skills/update-dependencies/SKILL.md`.

## Guardrails

- Use English Conventional Commits: `type(scope)!: Subject`.
- Keep subjects concise, imperative, descriptive, sentence-case, and without a trailing period.
- Wrap package names, rule ids, config names, file names, and commands in backticks.
- Do not use backticks for version numbers.
- Add a body only for useful context, risk, migration notes, dependency release notes, or breaking changes.
- After creating, amending, or rewording a commit message, inspect the final raw message before considering it done.
  Check for unintended HTML/XML entities or escaped characters such as `&quot;`, `&amp;`, `&#39;`, and stray backslashes.

## Types

- Use `feat` for adding new rules, raising rule severity (`off` -> `warn` -> `error`), or adding repository functionality.
- Use `fix` for lowering rule severity (`error` -> `warn` -> `off`) or fixing repository behavior.
- Use `chore` for updating, adding, or removing dependencies.
- Use `refactor` for internal logic changes without intended behavior changes.
- Use `test` for test changes.
- Use `docs` for changes to documentation presented in `README.md`.
- Use `ci` for GitHub Actions and CI workflow changes.
- Use `nvm` for minor non-user-facing commits such as typo fixes.

## Scopes

- Use the first directory under `src/configurations` as the exact scope for rule changes.
- Omit scope when making changes to the repository itself rather than to rules provided by the config.

## Subject Patterns

- Use ``feat(<scope>): Add `{plugin-name}/{rule-name}` rule`` for newly enabled `warn` rules.
- Use ``feat(<scope>)!: Add `{plugin-name}/{rule-name}` rule`` for newly enabled `error` rules.
- Use ``feat(<scope>): Take account of `{plugin-name}/{rule-name}` rule`` for disabled, known-unused, or otherwise
  accounted-for rules.
- Use ``fix(<scope>): Remove deprecated `{plugin-name}/{rule-name}` rule`` when removing a deprecated configured rule.
- Use ``fix(<scope>): Replace deprecated `{old-rule}` rule with `{new-rule}` rule`` when upstream provides a replacement.
- Use ``fix(<scope>): Drop `{plugin-name}/{rule-name}` rule`` when removing a dropped upstream rule.
- Use `fix(<scope>): ...` for false-positive fixes, compatibility allowances, rule option corrections, or order corrections.
- Use `fix(<scope>)!: ...` when a fix changes consumer-visible ordering or stricter behavior.
- Use `refactor: ...` for internal rewrites with no intended consumer behavior change, usually without scope.
- Use ``chore: Bump `{package}` from {old-version} to {new-version}`` for a single dependency-only update.
- Use ``chore!: Bump `{package}` from {old-version} to {new-version}`` when a dependency bump raises peer, engine, or
  consumer requirements.
- Use `ci: ...` for GitHub Actions and CI workflow changes.
- Use `nvm: ...` only for tiny maintenance that is not user-facing.

## Breaking Changes

- Mark a change as breaking when it introduces a new error-severity rule, raises a rule to `error`, or raises peer, Node,
  parser, ESLint, or consumer requirements above the package's currently declared supported range.
- Do not mark an upstream Node support drop as breaking when the dropped version is already outside this package's
  `engines.node` range.
- For breaking changes, add `BREAKING CHANGE:` and describe consumer impact, not the implementation.
- For breaking changes caused by a new or stricter error-severity rule, use impersonal rule-centered wording:
  ``BREAKING CHANGE: With new rule `{plugin-name}/{rule-name}`, {reported pattern} now produces an error.
  {Short migration hint and, when useful, why the rule exists.}``
  Avoid conversational or reviewer-opaque phrasing such as "Consumers now get an error...".

## Atomicity

- Keep dependency bumps separate from follow-up rule, config, test, or docs changes.
- Prefer one rule addition, rule removal, option change, or known-unused decision per commit.
- Prefer separate commits when an upstream release needs both a dependency bump and consumer-visible config migration.

## Dependency Commit Bodies

For dependency-only bump commits, start the body with a concise summary of upstream changes that affect this config or
its consumers. Put release notes links after the summary. If no upstream changes affect this config or its consumers, say
that explicitly first.
