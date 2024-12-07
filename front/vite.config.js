import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'build', // Définit le dossier de sortie pour la version construite
  }
})
