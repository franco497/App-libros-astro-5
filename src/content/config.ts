import { defineCollection, z } from "astro:content";

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
    buy: z.string().url(),
  }),
});

export const collections = {
  books,
};
