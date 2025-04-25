import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { BLOG_TITLE, BLOG_DESCRIPTION } from "../../consts.ts";
import OtherPosts from "../../other-posts.json";

export async function GET(context: any): Promise<Response> {
  const sortByDate = (a: any, b: any): number =>
    b.pubDate.valueOf() - a.pubDate.valueOf();

  const BlogPosts = (
    await getCollection("blog", ({ data }) => data.draft !== true)
  ).map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    // description: post.description,
    // Compute RSS link from post `slug`
    // This example assumes all posts are rendered as `/blog/[slug]` routes
    link: `/blog/${post.slug}/`,
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
    site: context.site,
    items: posts.sort(sortByDate),
  });
}
