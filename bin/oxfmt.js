#!/usr/bin/env node

import { createRequire } from 'node:module'
import run from './_run.js'

const require = createRequire(import.meta.url)

await run(require.resolve('oxfmt/package.json'))
