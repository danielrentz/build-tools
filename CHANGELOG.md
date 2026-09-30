# Changelog

## [Unreleased]

## [0.0.8] - 2026-09-30

- Added: GitHub action `pnpm-build` to set up pnpm and nodejs, and to run audit, peers check, build, lint, and test
- Added: GitHub action `npm-publish` to publish a package to npm via trusted publishing
- Fixed: [oxlint] Find `oxlint-tsgolint` without hoisting it in consumer projects
- Documentation: Extended `README.md` with all provided commands, configurations, and GitHub actions

## [0.0.7] - 2026-09-08

- Added: Install `oxlint`, `oxfmt`, and `tsdown`
- Added: Bin scripts to call these tools

## [0.0.6] - 2026-08-18

- Added: [oxlint] Activate plugins `import` and `promise` and a few more rules

## [0.0.5] - 2026-08-18

- Chore: Move commands to peer dependencies
- Chore: Bump all dependencies

## [0.0.4] - 2026-06-23

- Fixed: Missing export for `tsconfig.json`
- Chore: Add unit tests to catch build errors

## [0.0.3] - 2026-06-23

- Added: [tsdown] Generate `exports` field in `package.json`
- Added: [tsdown] Generate declaration sourcemaps
- Added: [tsconfig] Set `resolveJsonModule: true` in configuration
- Chore: Bump all dependencies

## [0.0.2] - 2026-04-02

- Chore: First release published via GitHub workflow with npm trusted publishing (no changes)

## [0.0.1] - 2026-04-02

- Added: Base configuration for `tsdown`
- Added: Base configuration for `oxlint`
- Added: Base configuration for `oxfmt`
- Added: Base `tsconfig.json` configuration

[Unreleased]: https://github.com/danielrentz/build-tools/compare/v0.0.8...HEAD
[0.0.8]: https://github.com/danielrentz/build-tools/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/danielrentz/build-tools/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/danielrentz/build-tools/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/danielrentz/build-tools/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/danielrentz/build-tools/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/danielrentz/build-tools/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/danielrentz/build-tools/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/danielrentz/build-tools/releases/tag/v0.0.1
