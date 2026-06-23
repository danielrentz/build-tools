import { defineConfig } from './src/tsdown/index.ts'

export default defineConfig({
  entry: 'src/*/index.ts',
  copy: { from: 'src/tsconfig/tsconfig.json', to: 'dist/tsconfig', verbose: true },
  exports: {
    customExports: {
      './tsconfig.json': './dist/tsconfig/tsconfig.json',
    },
  },
})
