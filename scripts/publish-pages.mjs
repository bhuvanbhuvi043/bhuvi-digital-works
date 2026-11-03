import { cp, readdir, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = join(root, 'dist')

await rm(join(root, 'assets'), { recursive: true, force: true })

for (const entry of await readdir(output)) {
  await cp(join(output, entry), join(root, entry), { recursive: true, force: true })
}

console.log('Copied the production build to the GitHub Pages branch root.')
