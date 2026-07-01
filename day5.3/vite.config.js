import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Adds React support to Vite.
export default defineConfig({
  plugins: [react()]
});
