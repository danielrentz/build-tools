import { type UserConfig, defineConfig as tsDefineConfig } from 'tsdown'

export function defineConfig(options?: UserConfig) {
  return tsDefineConfig({
    entry: 'src/index.ts',
    format: 'esm',
    deps: { skipNodeModulesBundle: true },
    dts: { tsconfig: 'src/tsconfig.json' },
    publint: true,
    attw: { profile: 'esm-only', level: 'error' },
    ...options,
  })
}
