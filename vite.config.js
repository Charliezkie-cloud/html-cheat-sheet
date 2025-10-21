import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
    optimizeDeps: {
        include: ["monaco-editor"]
    },
    base: "/html-cheat-sheet/"
});