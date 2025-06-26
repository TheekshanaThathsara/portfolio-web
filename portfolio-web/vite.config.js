import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'log-netlify-url',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          next();
        });
        
        const originalPrintUrls = server.printUrls;
        server.printUrls = () => {
          originalPrintUrls();
          console.log('\n  🚀 Production site: \x1b[36m%s\x1b[0m', 'https://thathsara.netlify.app');
          console.log();
        };
      }
    }
  ],
})
