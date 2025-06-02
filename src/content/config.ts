// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    date: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    description: z.string(),
    listenOn: z.array(z.object({
      name: z.string(),
      url: z.string()
    })),
    topics: z.array(z.string()),
    sponsors: z.array(z.object({
      name: z.string(),
      description: z.string()
    })),
    links: z.array(z.object({
      label: z.string(),
      url: z.string()
    })),
    transcript: z.array(z.object({
      speaker: z.string(),
      text: z.string()
    }))
  })
});

export const collections = {
  projects: projectsCollection,
};
