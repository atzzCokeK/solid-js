import solid from "solid-start/vite";
// @ts-ignore
import vercel from "solid-start-vercel";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    solid({ ssr: false, adapter: vercel({ edge: false }) }),
    checker({
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
    }),
  ],
});
