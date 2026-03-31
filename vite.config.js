import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      // Dev-only: redirect /Portfolio → /Portfolio/ so refresh always works
      name: "base-trailing-slash",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/Portfolio") {
            req.url = "/Portfolio/";
          }
          next();
        });
      },
    },
  ],
  base: "/Portfolio/",
  build: {
    outDir: "docs",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react":  ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-d3":     ["d3"],
          "vendor-md":     ["react-markdown"],
        },
      },
    },
  },
});