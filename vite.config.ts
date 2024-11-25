import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@typess": path.resolve(__dirname, "./src/types"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@src": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
