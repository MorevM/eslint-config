# Agent instructions

Agent-specific workflows live in `.agents/skills`.

- Use `.agents/skills/update-dependencies/SKILL.md` for dependency updates.
- Use `.agents/skills/commit-messages/SKILL.md` when proposing, splitting, or creating Git commits.
- Source configs live under `src/configurations`.
- Rule change commit scopes are derived exactly from the first directory under `src/configurations`.
  For example, changes in `src/configurations/javascript/plugins/unicorn.ts` use `javascript`,
  and changes in `src/configurations/typescript/rules/typescript.ts` use `typescript`.
- Published runtime entrypoints include the root config, `./globs`, `./parsers`, `./plugins`, and `bin`.
  Changes affecting these imports, exports, or the CLI are consumer-facing.
- Path aliases follow a local convention: `#` aliases map to concrete files, and `~` aliases map to directories.
- A single rule provider, or even core ESLint rules, may be used across multiple configuration scopes.
  Place each rule in the configuration that matches the rule's domain instead of assuming one plugin belongs to one scope.
