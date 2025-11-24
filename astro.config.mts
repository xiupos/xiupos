import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { typst } from "astro-typst";
import icon from "astro-icon";

import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
import remarkFencedDivs from "./plugins/remark-fenced-divs.ts";
import remarkTikzjax from "./plugins/remark-tikzjax.ts";

import rehypeKatex from "rehype-katex";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
// @ts-ignore
import rehypeWrapAll from "rehype-wrap-all";
import rehypeRewriteLinks from "./plugins/rehype-rewrite-links.ts";

import mathMacros from "./plugins/math-macros.json";

/**
 * options for rehypeWrapAll
 * - add wrappers for responsive design
 */
const rehypeWrapAllOptions = [
  { selector: "table", wrapper: "div.responsive" },
  // {selector: 'img', wrapper: 'div.responsive'},
  // {selector: 'video', wrapper: 'div.responsive'},
  { selector: 'math[display="block"]', wrapper: "div.math-wrapper" },
];

// https://astro.build/config
export default defineConfig({
  site: "https://xiupos.net",
  integrations: [
    mdx(),
    sitemap(),
    typst({
      target: () => "html",
    }),
    icon(),
  ],
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@content": "/src/content",
      },
    },
  },
  output: "static",
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkDirective,
      remarkFencedDivs,
      remarkTikzjax,
    ],
    rehypePlugins: [
      [rehypeKatex, { macros: mathMacros, strict: "error" }],
      [rehypeWrapAll, rehypeWrapAllOptions],
      rehypeHeadingIds,
      rehypeRewriteLinks,
    ],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
