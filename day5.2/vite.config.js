import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Enables React support in this Vite project.
export default defineConfig({
  plugins: [react()]
});
