import type { Block } from 'payload';

export const StepsBlock: Block = {
  slug: 'steps',
  labels: { singular: 'Schritte', plural: 'Schritte' },
  admin: {
    components: { Label: '@/components/admin/blocks/StepsLabel' },
  },
  fields: [
    { name: 'kicker', label: 'Kicker (optional)', type: 'text' },
    { name: 'title', label: 'Überschrift', type: 'text' },
    {
      name: 'steps',
      label: 'Schritte',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 't', label: 'Schritttitel', type: 'text', required: true },
        { name: 'd', label: 'Beschreibung', type: 'textarea' },
      ],
    },
  ],
};
