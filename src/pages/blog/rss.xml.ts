import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { BLOG_TITLE, BLOG_DESCRIPTION } from "../../site.config.ts";
import OtherPosts from "@data/other-posts.json";
import type { APIContext } from "astro";
import { sortByDate } from "../../utils/sortByDate";

export async function GET(context: APIContext) {
  const BlogPosts = (
    await getCollection("blog", ({ data }) => data.draft !== true)
  ).map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    link: `/blog/${post.id}/`,
  }));

  // combine other posts with blog posts
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
    site: context.site || "",
    items: posts.sort(sortByDate),
  });
}
