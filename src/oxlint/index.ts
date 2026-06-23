import { type OxlintConfig, defineConfig as oxDefineConfig } from 'oxlint'

export function defineConfig(options?: OxlintConfig): OxlintConfig {
  return oxDefineConfig({
    ...options,
    categories: {
      correctness: 'error',
      suspicious: 'error',
      ...options?.categories,
    },
    options: {
      reportUnusedDisableDirectives: 'error',
      typeAware: true,
      typeCheck: true,
      ...options?.options,
    },
    rules: {
      eqeqeq: 'error',
      ...options?.rules,
    },
  })
}
