import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

export default async function run(packageJsonPath) {
  const require = createRequire(import.meta.url)
  const { bin } = require(packageJsonPath)
  const [binPath] = Object.values(bin)

  await import(pathToFileURL(join(dirname(packageJsonPath), binPath)).href)
}
