import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { typst } from "astro-typst";
import rehypeKatex from "rehype-katex";
// @ts-expect-error
import rehypeWrapAll from "rehype-wrap-all";
import remarkDirective from "remark-directive";
import remarkMath from "remark-math";
import mathMacros from "./src/math-macros.json";
import { ipynb } from "./src/plugins/astro-ipynb.ts";
import { rehypeRewriteLinks } from "./src/plugins/rehype-rewrite-links.ts";
import remarkFencedDivs from "./src/plugins/remark-fenced-divs.ts";
import remarkTikzjax from "./src/plugins/remark-tikzjax.ts";

/**
 * options for rehypeWrapAll
 * - add wrappers for responsive design
 */
const rehypeWrapAllOptions = [
  { selector: "table", wrapper: "div.responsive" },
  // { selector: "img", wrapper: "div.responsive" },
  // { selector: "video", wrapper: "div.responsive" },
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
    ipynb({
      nbconvert: {
        cmd: "uvx jupyter nbconvert",
        template: "src/templates/ipynb",
      },
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
        "@plugins": "/src/plugins",
        "@assets": "/src/assets",
        "@data": "/src/data",
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
      [
        rehypeKatex,
        {
          macros: mathMacros,
          strict: "error",
          output: "html",
        },
      ],
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
