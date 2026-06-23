import { describe, it, expect } from 'vitest'
import { defineConfig } from '@daniel.rentz/build-tools/oxfmt'

describe('function defineConfig', () => {
  it('defines an oxfmt configuration', () => {
    const config = defineConfig()
    expect(config).toMatchObject({ printWidth: 320, semi: false, singleQuote: true })
  })
  it('accepts override options', () => {
    const config = defineConfig({ ignorePatterns: ['**/test.*'], semi: true })
    expect(config).toMatchObject({ ignorePatterns: ['**/test.*'], printWidth: 320, semi: true, singleQuote: true })
  })
})
