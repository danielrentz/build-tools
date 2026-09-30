import { execFileSync, spawnSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const require = createRequire(import.meta.url)

describe.each([
  ['oxfmt', 'oxfmt'],
  ['oxlint', 'oxlint'],
  ['tsdown', 'tsdown'],
])('bin/%s.js', (script, pkg) => {
  it(`invokes the ${pkg} CLI`, () => {
    const { version } = require(`${pkg}/package.json`)
    const binPath = fileURLToPath(new URL(`../bin/${script}.js`, import.meta.url))
    const output = execFileSync(process.execPath, [binPath, '--version'], { encoding: 'utf8' })
    expect(output).toContain(version)
  })
})

describe('bin/oxlint.js', () => {
  it('finds tsgolint outside of the current project', () => {
    // run oxlint in an empty temporary project without `node_modules` (like a pnpm consumer project without
    // hoisting), the type error TS2322 can only be reported if the tsgolint executable has been found
    const cwd = mkdtempSync(join(tmpdir(), 'build-tools-'))
    try {
      writeFileSync(join(cwd, 'tsconfig.json'), JSON.stringify({ include: ['*.ts'] }))
      writeFileSync(join(cwd, 'index.ts'), "export const x: number = 'str'\n")
      const binPath = fileURLToPath(new URL('../bin/oxlint.js', import.meta.url))
      const env = { ...process.env, OXLINT_TSGOLINT_PATH: '' }
      const result = spawnSync(process.execPath, [binPath, '--type-aware', '--type-check'], { cwd, env, encoding: 'utf8' })
      expect(result.stdout + result.stderr).toContain('TS2322')
    } finally {
      rmSync(cwd, { recursive: true, force: true })
    }
  })
})
