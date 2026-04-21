import { CollectionConfig } from 'payload/types';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
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
      name: 'kicker',
      label: 'Kicker (small label)',
      type: 'text',
    },
    {
      name: 'lede',
      label: 'Lead paragraph',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'route',
      label: 'Route path (e.g. /ueber-uns)',
      type: 'text',
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
};

export default Pages;
