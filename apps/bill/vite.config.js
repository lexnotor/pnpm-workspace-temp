import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "index.js"),
      formats: ["es"],
    },
    rollupOptions: { external: ["react", "react-dom", "react-router-dom"] },
  },
});
