#!/usr/bin/env node

import { createRequire } from 'node:module'
import run from './_run.js'

const require = createRequire(import.meta.url)

// oxlint looks for `tsgolint` in `node_modules/.bin` of the current project only, which does not
// contain transitive dependencies (e.g. with pnpm without hoisting), therefore pass the path
// to the native executable of the own dependency `oxlint-tsgolint`
if (!process.env.OXLINT_TSGOLINT_PATH) {
  const tsgolintRequire = createRequire(require.resolve('oxlint-tsgolint/package.json'))
  const exeName = process.platform === 'win32' ? 'tsgolint.exe' : 'tsgolint'
  const exePath = `@oxlint-tsgolint/${process.platform}-${process.arch}/${exeName}`
  process.env.OXLINT_TSGOLINT_PATH = tsgolintRequire.resolve(exePath)
}

await run(require.resolve('oxlint/package.json'))
