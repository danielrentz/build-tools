import { type OxlintConfig, defineConfig as oxDefineConfig } from 'oxlint'

export function defineConfig(options?: Pick<OxlintConfig, 'rules'>): OxlintConfig {
  return oxDefineConfig({
    categories: {
      correctness: 'error',
      suspicious: 'error',
    },
    options: {
      reportUnusedDisableDirectives: 'error',
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      eqeqeq: 'error',
      ...options?.rules,
    },
  })
}
