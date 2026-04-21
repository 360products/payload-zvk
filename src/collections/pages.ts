import type { CollectionConfig } from 'payload';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'kicker', type: 'text', admin: { description: 'Kleine Label über dem Titel' } },
    { name: 'lede', type: 'textarea', admin: { description: 'Einleitungsabsatz' } },
    { name: 'content', type: 'richText' },
    { name: 'route', type: 'text', admin: { description: 'z.B. /ueber-uns' } },
    { name: 'published', type: 'checkbox', defaultValue: true },
  ],
};

export default Pages;
