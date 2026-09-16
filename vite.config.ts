import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacidade.html',
      },
    },
  },
  base: process.env.GITHUB_ACTIONS && repository ? `/${repository}/` : '/',
})
