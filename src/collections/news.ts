import type { CollectionConfig } from 'payload';

const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'publishedDate', 'published'],
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'tag', type: 'text', admin: { description: 'z.B. Zum 1. Juli, Messe, Neu' } },
    { name: 'publishedDate', type: 'date', required: true },
    { name: 'excerpt', type: 'textarea' },
    { name: 'content', type: 'richText' },
    { name: 'image', type: 'text', admin: { description: 'Bild-URL' } },
    { name: 'published', type: 'checkbox', defaultValue: true },
  ],
  timestamps: true,
};

export default News;
