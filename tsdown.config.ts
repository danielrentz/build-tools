import { defineConfig } from './src/tsdown/index.ts'

export default defineConfig({
  entry: 'src/*/index.ts',
  copy: { from: 'src/tsconfig/*.json', to: 'dist/tsconfig', verbose: true },
})
