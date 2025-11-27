import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    lang: z.string().default("en"),
    draft: z.boolean().default(false),
    links: z
      .array(
        z.object({
          text: z.string(),
          href: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { blog };
