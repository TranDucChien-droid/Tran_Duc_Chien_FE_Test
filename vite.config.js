import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "Tran_Duc_Chien_FE_Test",
  plugins: [react(), tailwindcss()],
  server: {
    port: 5176
  }
})
