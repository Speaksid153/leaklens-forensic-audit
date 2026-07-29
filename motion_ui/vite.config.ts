import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    outDir: "../leaklens/motion_dist",
    emptyOutDir: true,
    lib: {
      entry: "src/main.tsx",
      formats: ["es"],
      fileName: () => "leaklens-motion.js",
    },
    rollupOptions: {
      output: { assetFileNames: "leaklens-motion.[ext]" },
    },
  },
});
