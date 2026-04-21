import type { CollectionConfig } from 'payload';

const Partners: CollectionConfig = {
  slug: 'partners',
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'short', type: 'text', required: true, maxLength: 10, admin: { description: 'BBW, BIV, IG BAU ...' } },
    { name: 'tag', type: 'text', admin: { description: 'Aus- & Weiterbildung, Gewerkschaft, ...' } },
    { name: 'description', type: 'textarea', required: true },
    { name: 'url', type: 'text', required: true },
    { name: 'host', type: 'text', admin: { description: 'bbw-steinmetz.de (nur Domain)' } },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
};

export default Partners;
