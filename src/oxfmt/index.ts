import { type OxfmtConfig, defineConfig as oxDefineConfig } from 'oxfmt'

export function defineConfig(options?: Pick<OxfmtConfig, 'ignorePatterns'>): OxfmtConfig {
  return oxDefineConfig({
    ...(options?.ignorePatterns ? { ignorePatterns: options?.ignorePatterns } : null),
    printWidth: 320,
    semi: false,
    singleQuote: true,
  })
}
