import { CollectionConfig } from 'payload/types';

const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
    {
      name: 'cluster',
      label: 'Audience cluster (Betriebe, Versicherte, Rentner)',
      type: 'select',
      options: [
        { label: 'Betriebe', value: 'Betriebe' },
        { label: 'Versicherte', value: 'Versicherte' },
        { label: 'Rentner', value: 'Rentner' },
      ],
      required: true,
    },
    {
      name: 'order',
      label: 'Display order within cluster',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
};

export default FAQ;
