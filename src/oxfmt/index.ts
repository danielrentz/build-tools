import type { OxfmtConfig } from 'oxfmt'
import * as oxfmt from 'oxfmt'

export function defineConfig(options?: OxfmtConfig): OxfmtConfig {
  return oxfmt.defineConfig({
    printWidth: 320,
    semi: false,
    singleQuote: true,
    ...options,
  })
}
