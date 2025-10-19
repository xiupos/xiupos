import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
import remarkFencedDivs from "./plugins/remark-fenced-divs.ts";
import rehypeMathML from "@daiji256/rehype-mathml";
// @ts-ignore
import physicsMacros from "katex-physics";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
// @ts-ignore
import rehypeWrapAll from "rehype-wrap-all";
import { typst } from "astro-typst";

import icon from "astro-icon";

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

const mathMacros = {
  ...physicsMacros,
  "\\div": "{\\grad\\vdot}",
  "\\slashed": "{{{ #1 } \\!\\!\\! / }}",
  "\\ce": "{\\mathrm{ #1 }}",
  "\\si": "{\\textrm{ #1 }}",
  "\\SI": "{{ #1 } \\textrm{ #2 }}",
  "\\micro": "{μ}",
  "\\ohm": "{Ω}",
  "\\num": "{ #1 }",
};

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
    remarkPlugins: [remarkMath, remarkDirective, remarkFencedDivs],
    rehypePlugins: [
      [rehypeMathML, { macros: mathMacros }],
      [rehypeWrapAll, rehypeWrapAllOptions],
      rehypeHeadingIds,
    ],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
