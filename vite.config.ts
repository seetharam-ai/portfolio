import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works on GitHub Pages regardless of repo name
// (username.github.io or username.github.io/<repo>/).
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: { port: 5503 },
});
