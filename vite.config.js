import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Moves node_modules dependencies to a separate file
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increases the warning limit for chunk sizes
  },
})
