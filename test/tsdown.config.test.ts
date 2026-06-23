import { describe, it, expect } from 'vitest'
import { defineConfig } from '@daniel.rentz/build-tools/tsdown'

describe('function defineConfig', () => {
  it('defines a tsdown configuration', () => {
    const config = defineConfig()
    expect(config).toMatchObject({ entry: 'src/index.ts', dts: { sourcemap: true }, exports: true, publint: true })
  })
  it('accepts override options', () => {
    const config = defineConfig({ entry: 'src/*/index.ts', dts: false, banner: 'banner' })
    expect(config).toMatchObject({ entry: 'src/*/index.ts', dts: false, exports: true, publint: true, banner: 'banner' })
  })
})
