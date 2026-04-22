import type { Block } from 'payload';

export const CardsBlock: Block = {
  slug: 'cards',
  labels: { singular: 'Karten-Raster', plural: 'Karten-Raster' },
  admin: {
    description: 'Raster aus Infoboxen — 2, 3 oder 4 Spalten. Karten können optional verlinkt werden.',
    components: { Label: '@/components/admin/blocks/CardsLabel' },
  },
  fields: [
    { name: 'kicker', label: 'Kicker (optional)', type: 'text' },
    { name: 'title', label: 'Überschrift', type: 'text' },
    {
      name: 'columns',
      label: 'Spalten',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 Spalten', value: '2' },
        { label: '3 Spalten', value: '3' },
        { label: '4 Spalten', value: '4' },
      ],
    },
    {
      name: 'cards',
      label: 'Karten',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', label: 'Kartentitel', type: 'text', required: true },
        { name: 'text', label: 'Kartentext', type: 'textarea' },
        { name: 'href', label: 'Link (optional)', type: 'text' },
      ],
    },
  ],
};
