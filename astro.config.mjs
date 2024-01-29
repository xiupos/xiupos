import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/chtml';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';

// @ts-ignore
import rehypeWrapAll from 'rehype-wrap-all';

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
    ],
    rehypePlugins: [
      [rehypeMathjax, {
        tex: {
          packages: [...AllPackages, ...["physics", "boldsymbol"]],
          inlineMath: [['\\(', '\\)']],
          displayMath: [['\\[', '\\]']],
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
      }],
      rehypeHeadingIds,
      [rehypeWrapAll, [
        {selector: 'table', wrapper: 'div.responsive'},
        {selector: 'img', wrapper: 'div.responsive'},
        {selector: 'video', wrapper: 'div.responsive'},
      ]],
    ],
    shikiConfig: {
      theme: 'one-dark-pro',
    }
  },
  image: {
    service: squooshImageService(),
  },
});
