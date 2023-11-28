import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/P5WithBrush.tsx"),
      name: "ReactP5Brush",
    },
    rollupOptions: {
      external: ["react", "react-dom", "p5"],
      output: {
        dir: path.resolve(__dirname, "dist"),
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          p5: "p5",
        },
      },
    },
  },
});
