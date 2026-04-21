import { CollectionConfig } from 'payload/types';

const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'publishedDate', 'published'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'tag',
      label: 'Tag (e.g. Zum 1. Juli, Messe, Neu)',
      type: 'text',
    },
    {
      name: 'publishedDate',
      label: 'Published Date',
      type: 'date',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'image',
      label: 'Featured image URL',
      type: 'text',
      defaultValue: '/prototyp/assets/placeholder.jpg',
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
  timestamps: true,
};

export default News;
