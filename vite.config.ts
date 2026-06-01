import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile({ removeViteModuleLoader: true })],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
  },
});
