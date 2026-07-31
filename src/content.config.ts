import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx,typ}", base: "./src/content/blog" }),
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
    ipynb_link_type: z.enum(["colab", "ipynb", "none"]).default("none"),
  }),
});

export const collections = { blog };
