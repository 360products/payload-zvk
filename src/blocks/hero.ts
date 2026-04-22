import type { Block } from 'payload';

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero-Banner', plural: 'Hero-Banner' },
  admin: {
    components: { Label: '@/components/admin/blocks/HeroLabel' },
  },
  fields: [
    { name: 'kicker', label: 'Kicker (kleiner Text oben)', type: 'text' },
    { name: 'title', label: 'Titel', type: 'text', required: true },
    { name: 'lede', label: 'Einleitungstext', type: 'textarea' },
    {
      name: 'ctas',
      label: 'Buttons',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
        {
          name: 'variant',
          type: 'select',
          defaultValue: 'primary',
          options: [
            { label: 'Primär (dunkel)', value: 'primary' },
            { label: 'Sekundär (hell)', value: 'secondary' },
            { label: 'Ghost (Rahmen)', value: 'ghost' },
          ],
        },
      ],
    },
  ],
};
