import { type UserConfig, defineConfig as tsDefineConfig } from 'tsdown'

export function defineConfig(options?: UserConfig): UserConfig {
  return tsDefineConfig({
    entry: 'src/index.ts',
    tsconfig: 'src/tsconfig.json',
    deps: { skipNodeModulesBundle: true },
    dts: { sourcemap: true },
    exports: true,
    publint: true,
    attw: { profile: 'esm-only', level: 'error' },
    ...options,
  })
}
