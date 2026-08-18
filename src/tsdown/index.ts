import type { UserConfig } from 'tsdown'
import * as tsdown from 'tsdown'

export function defineConfig(options?: UserConfig): UserConfig {
  return tsdown.defineConfig({
    entry: 'src/index.ts',
    tsconfig: 'src/tsconfig.json',
    deps: { neverBundle: true },
    dts: { sourcemap: true },
    exports: true,
    publint: true,
    attw: { profile: 'esm-only', level: 'error' },
    ...options,
  })
}
