import type { Block } from 'payload';

export const TextBlock: Block = {
  slug: 'text',
  labels: { singular: 'Textabschnitt', plural: 'Textabschnitte' },
  admin: {
    components: { Label: '@/components/admin/blocks/TextLabel' },
  },
  fields: [
    { name: 'kicker', label: 'Kicker (optional)', type: 'text' },
    { name: 'title', label: 'Überschrift', type: 'text' },
    { name: 'body', label: 'Text', type: 'richText', required: true },
    {
      name: 'columns',
      label: 'Layout',
      type: 'select',
      defaultValue: 'full',
      options: [
        { label: 'Volle Breite', value: 'full' },
        { label: 'Schmal (Text-Breite)', value: 'narrow' },
      ],
    },
  ],
};
