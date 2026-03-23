import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, '..')

console.log('[v0] Installing framer-motion...')
try {
  execSync('pnpm add framer-motion', { cwd: projectRoot, stdio: 'inherit' })
  console.log('[v0] Successfully installed framer-motion')
} catch (error) {
  console.error('[v0] Error installing framer-motion:', error.message)
  process.exit(1)
}
