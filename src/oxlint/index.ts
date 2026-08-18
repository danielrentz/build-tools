import type { OxlintConfig } from 'oxlint'
import * as oxlint from 'oxlint'

export function defineConfig(options?: OxlintConfig): OxlintConfig {
  return oxlint.defineConfig({
    ...options,
    categories: {
      correctness: 'error',
      suspicious: 'error',
      ...options?.categories,
    },
    plugins: ['import', 'promise', ...(options?.plugins ?? [])],
    options: {
      reportUnusedDisableDirectives: 'error',
      typeAware: true,
      typeCheck: true,
      ...options?.options,
    },
    rules: {
      eqeqeq: 'error',
      'import/first': 'error',
      'import/no-anonymous-default-export': 'error',
      'import/no-cycle': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-default': 'error',
      'import/unambiguous': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/prefer-catch': 'error',
      ...options?.rules,
    },
  })
}
