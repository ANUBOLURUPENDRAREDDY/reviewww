import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/eventtmanagement/',   // <-- Add this line (your repo name)
  plugins: [react()],
  server: {
    port: 2000
  }
})
