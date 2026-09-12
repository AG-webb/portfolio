import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  base: mode === "production" ? "/portfolio/" : "/",
  css: {
    postcss: {
      plugins: [autoprefixer(), postcssNested()],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
}));
