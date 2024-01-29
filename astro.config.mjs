import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkTikzjax from './plugins/remark-tikzjax.js';
import rehypeMathjax from 'rehype-mathjax/chtml';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
// @ts-ignore
import rehypeWrapAll from 'rehype-wrap-all';

/**
 * options for rehypeMathjax
 * - add plugins
 * - add macros
 * - TODO: add sonoisa/XyJax-v3
 */
const rehypeMathjaxOptions = {
  tex: {
    packages: [...AllPackages, ...["physics", "boldsymbol"]],
    macros:{
      bm: ["{\\boldsymbol{#1}}", 1],
      "~": ["{\\tilde{#1}}", 1],
      "^": ["{\\hat{#1}}", 1],
      "=": ["{\\bar{#1}}", 1],
      ".": ["{\\dot{#1}}", 1],
      "\"": ["{\\ddot{#1}}", 1],
    },
  },
  chtml: {
    fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
  }
};

/**
 * options for rehypeWrapAll
 * - add wrappers for responsive design
 */
const rehypeWrapAllOptions = [
  {selector: 'table', wrapper: 'div.responsive'},
  {selector: 'img', wrapper: 'div.responsive'},
  {selector: 'video', wrapper: 'div.responsive'},
];

// https://astro.build/config
export default defineConfig({
  site: 'https://xiupos.net',
  integrations: [mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
      },
    },
  },
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkDirective,
      remarkTikzjax,
    ],
    rehypePlugins: [
      [rehypeMathjax, rehypeMathjaxOptions],
      [rehypeWrapAll, rehypeWrapAllOptions],
      rehypeHeadingIds,
    ],
    shikiConfig: {
      theme: 'one-dark-pro',
    }
  },
  image: {
    service: squooshImageService(),
  },
});
