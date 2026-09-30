# build-tools

The package bundles [oxlint](https://oxc.rs/docs/guide/usage/linter), [oxfmt](https://oxc.rs/docs/guide/usage/formatter), and [tsdown](https://tsdown.dev) together with opinionated base configurations for them and for TypeScript. The repository additionally contains reusable GitHub actions for building and publishing packages.

## Installation

```sh
pnpm add -D @daniel.rentz/build-tools
```

The tools `oxlint` (including `oxlint-tsgolint` for type-aware linting), `oxfmt`, and `tsdown` (including `publint` and `@arethetypeswrong/core`) are regular dependencies of this package, and do not need to be installed separately.

## Commands

The package provides the following executables which forward to the bundled tools:

| Command  | Tool                                               |
| -------- | -------------------------------------------------- |
| `oxlint` | [oxlint](https://oxc.rs/docs/guide/usage/linter)   |
| `oxfmt`  | [oxfmt](https://oxc.rs/docs/guide/usage/formatter) |
| `tsdown` | [tsdown](https://tsdown.dev)                       |

Example scripts in `package.json`:

```json
{
  "scripts": {
    "build": "tsdown",
    "fmt": "oxfmt",
    "lint": "oxlint",
    "prepack": "pnpm build",
    "test": "vitest run",
    "verify": "pnpm audit && pnpm peers check && pnpm build && pnpm lint && pnpm test"
  }
}
```

## Configurations

Each configuration module exports a function `defineConfig` that returns the base configuration, and accepts an optional object with custom settings to be merged into it.

### TypeScript

Strict compiler settings for ESM projects that are built with a bundler (`module: "esnext"`, `moduleResolution: "bundler"`, `noEmit: true`, `allowImportingTsExtensions: true`), including `strict`, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`, `noPropertyAccessFromIndexSignature`, `noUnusedLocals`, `noUnusedParameters`, and more.

`tsconfig.json`:

```json
{
  "extends": "@daniel.rentz/build-tools/tsconfig.json",
  "include": ["./*.ts"]
}
```

### oxlint

- Categories `correctness` and `suspicious` are reported as errors.
- Plugins `import` and `promise` are activated, with a few additional rules (`eqeqeq`, `import/first`, `import/no-cycle`, `import/no-duplicates`, `promise/param-names`, `promise/prefer-catch`, etc.).
- Type-aware linting and type checking are enabled.
- Unused `oxlint-disable` directives are reported as errors.

`oxlint.config.ts`:

```ts
import { defineConfig } from '@daniel.rentz/build-tools/oxlint'

export default defineConfig()
```

Custom settings in `categories`, `options`, and `rules` are merged into the base settings, and custom `plugins` are added to the base plugins. All other settings replace the base settings.

### oxfmt

No semicolons, single quotes, and a print width of 320 characters.

`oxfmt.config.ts`:

```ts
import { defineConfig } from '@daniel.rentz/build-tools/oxfmt'

export default defineConfig()
```

Custom settings replace the base settings.

### tsdown

- Builds the entry point `src/index.ts`, using the TypeScript configuration `src/tsconfig.json`.
- Does not bundle any dependencies.
- Generates declaration files with sourcemaps.
- Generates the `exports` field in `package.json`.
- Validates the package with [publint](https://publint.dev) and [Are the Types Wrong?](https://arethetypeswrong.github.io) (profile `esm-only`, failing on errors).

`tsdown.config.ts`:

```ts
import { defineConfig } from '@daniel.rentz/build-tools/tsdown'

export default defineConfig()
```

Custom settings replace the base settings (top-level only, nested objects are not merged).

## GitHub Actions

The repository contains composite actions that can be used in GitHub workflows of other repositories. They are not part of the npm package.

### `pnpm-build`

Sets up pnpm and Node.js via [`pnpm/setup`](https://github.com/pnpm/setup), then runs `pnpm audit`, `pnpm peers check`, `pnpm build`, `pnpm lint`, and `pnpm test`.

| Input     | Description                             | Default   |
| --------- | --------------------------------------- | --------- |
| `runtime` | The Node.js runtime to install via pnpm | `node@24` |

### `npm-publish`

Publishes the package to npm with provenance. Fails if the version of the Git tag (`v1.2.3`) does not match the version in `package.json`. Requires [trusted publishing](https://docs.npmjs.com/trusted-publishers) to be configured for the package on npm, and the permission `id-token: write` in the workflow job.

### Example workflow

`.github/workflows/build.yml`:

```yaml
name: Build

on: push

jobs:
  build-publish:
    runs-on: ubuntu-latest
    permissions:
      id-token: write # required for OIDC
      contents: read
    steps:
      - name: Checkout repository
        uses: actions/checkout@v7

      - name: Build package
        uses: danielrentz/build-tools/.github/actions/pnpm-build@main

      - name: Publish package
        if: startsWith(github.event.ref, 'refs/tags/v')
        uses: danielrentz/build-tools/.github/actions/npm-publish@main
```

## License

[MIT](LICENSE)
