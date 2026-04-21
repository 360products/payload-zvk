import type { CollectionConfig } from 'payload';

const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: { useAsTitle: 'question' },
  access: { read: () => true },
  fields: [
    { name: 'question', type: 'text', required: true },
    { name: 'answer', type: 'richText', required: true },
    {
      name: 'cluster',
      type: 'select',
      required: true,
      options: [
        { label: 'Betriebe', value: 'Betriebe' },
        { label: 'Versicherte', value: 'Versicherte' },
        { label: 'Rentner', value: 'Rentner' },
      ],
    },
    { name: 'order', type: 'number', defaultValue: 0 },
    { name: 'published', type: 'checkbox', defaultValue: true },
  ],
};

export default FAQ;
