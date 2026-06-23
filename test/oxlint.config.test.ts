import { describe, it, expect } from 'vitest'
import { defineConfig } from '@daniel.rentz/build-tools/oxlint'

describe('function defineConfig', () => {
  it('defines an oxlint configuration', () => {
    const config = defineConfig()
    expect(config).toMatchObject({ categories: { correctness: 'error' }, options: { typeAware: true }, rules: { eqeqeq: 'error' } })
  })
  it('accepts override options', () => {
    const config = defineConfig({ ignorePatterns: ['**/test.*'], options: { maxWarnings: 1 }, rules: { eqeqeq: 'warn', curly: 'off' } })
    expect(config).toMatchObject({ ignorePatterns: ['**/test.*'], categories: { correctness: 'error' }, options: { typeAware: true, maxWarnings: 1 }, rules: { eqeqeq: 'warn', curly: 'off' } })
  })
})
