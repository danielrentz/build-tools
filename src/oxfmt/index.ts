import { type OxfmtConfig, defineConfig as oxDefineConfig } from 'oxfmt'

export function defineConfig(options?: OxfmtConfig): OxfmtConfig {
  return oxDefineConfig({
    printWidth: 320,
    semi: false,
    singleQuote: true,
    ...options,
  })
}
