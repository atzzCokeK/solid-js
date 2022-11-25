import solid from "solid-start/vite";
// @ts-ignore
import netlify from "solid-start-netlify";
// @ts-ignore
import vercel from "solid-start-vercel";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ ssr: false, adapter: vercel({ edge: false }) })],
});
