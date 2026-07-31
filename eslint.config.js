import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: [
      "dist/**",
      ".astro/**",
      "src/plugins/mathyml/**",
      "src/assets/fonts/stixfonts/**",
    ],
  },
  tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    // Astro's generated env.d.ts requires triple-slash references
    files: ["src/env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  {
    // dynamically parsed YAML frontmatter has no static shape
    files: ["src/plugins/astro-ipynb.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
