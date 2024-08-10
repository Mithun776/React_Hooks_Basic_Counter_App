import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React_Hooks_Basic_Counter_App/',
  plugins: [react()],
})