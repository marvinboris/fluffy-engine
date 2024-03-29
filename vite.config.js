import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/ts/app.ts"],
            refresh: true,
        }),
        react(),
    ],
    build: {
        sourcemap: true,
    },
});
