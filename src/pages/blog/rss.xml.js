import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../../consts.js';
import OtherPosts from "../../other-posts.json";

/**
 * @param {any} context
 * @returns {Promise<Response>}
 */
export async function GET(context) {
  /**
   * @param {any} a
   * @param {any} b
   * @returns {number}
   */
  const sortByDate = (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf();

  const BlogPosts = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
    }));

  const posts = [
    ...BlogPosts,
    ...OtherPosts.map((post) => ({
      ...post,
      pubDate: new Date(post.pubDate),
    })),
  ];

  return rss({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site: context.site,
    items: posts.sort(sortByDate)
      .map((post) => ({
        title: post.title,
        pubDate: post.pubDate,
        // description: post.description,
        // Compute RSS link from post `slug`
        // This example assumes all posts are rendered as `/blog/[slug]` routes
        link: post.link,
      })),
  });
}
