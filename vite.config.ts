import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Portfolio/", // ✅ REQUIRED for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),      // ✅ Alias for imports like "@/App"
      "/src": path.resolve(__dirname, "./src"),   // ✅ Alias for index.html entry point
    },
  },
}));
