import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    // GitHub Pages publica el proyecto dentro de:
    // https://MGLDUOCIT2025.github.io/LifeTrack-Formativa2/
    base: "/LifeTrack-Formativa2/"
});