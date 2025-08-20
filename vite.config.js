import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mon-portfolio/'  // IMPORTANT pour GitHub Pages
})
