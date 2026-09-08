import { execFileSync } from 'node:child_process'
import { createRequire } from 'node:module'
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
