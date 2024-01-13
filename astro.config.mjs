import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/browser';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

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
        tex: { inlineMath: [['\\(', '\\)']], displayMath: [['\\[', '\\]']] }
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
