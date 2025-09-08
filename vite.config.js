import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // On Netlify, serve from site root "/" to avoid broken asset paths
  const isNetlify = process.env.NETLIFY === 'true'
  const base = isNetlify ? '/' : (mode === 'production' ? '/Dev-Portofolio/' : '/')

  return {
    root: 'viteproject',
    plugins: [react(), tailwindcss()],
    base,
  }
})
