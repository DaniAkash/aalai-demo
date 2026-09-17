# Conventions

- Runtime is Bun. Tests are `bun test`.
- Plain functions and named exports only. No classes, no default exports.
- Every exported function needs a test in `test/` covering its edge cases.
- Prefer `const` and arrow functions. TypeScript strict is on.
- Never use em-dashes in comments or docs.
