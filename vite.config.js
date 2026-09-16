import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.ngrok-free.dev']
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['.ngrok-free.dev']
  }
})
