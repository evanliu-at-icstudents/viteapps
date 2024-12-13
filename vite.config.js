import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  plugins: [reactRefresh()],
  build: {
    outDir,                 // Output directory for the build
    emptyOutDir: true,      // Empty the outDir before building
  },
  server: {
    // Allow serving from the src directory for dev mode
    fs: {
      allow: [root],
    },
  },
})
