import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkFencedDivs from './plugins/remark-fenced-divs.ts';
import remarkTikzjax from './plugins/remark-tikzjax.ts';
import rehypeMathjax from 'rehype-mathjax/browser';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
// @ts-ignore
import rehypeWrapAll from 'rehype-wrap-all';

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
      remarkFencedDivs,
      remarkTikzjax,
    ],
    rehypePlugins: [
      rehypeMathjax,
      [rehypeWrapAll, rehypeWrapAllOptions],
      rehypeHeadingIds,
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
