import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  preview: {
    host: true,
    strictPort: true,
    port: 80,
  },
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
})
