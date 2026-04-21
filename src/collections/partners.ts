import { CollectionConfig } from 'payload/types';

const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Organization name',
      type: 'text',
      required: true,
    },
    {
      name: 'short',
      label: 'Short code (e.g. BBW, BIV)',
      type: 'text',
      required: true,
      maxLength: 10,
    },
    {
      name: 'tag',
      label: 'Category tag (e.g. Aus- & Weiterbildung)',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'url',
      label: 'Website URL',
      type: 'text',
      required: true,
    },
    {
      name: 'host',
      label: 'Domain only (e.g. bbw-steinmetz.de)',
      type: 'text',
    },
    {
      name: 'order',
      label: 'Display order',
      type: 'number',
      defaultValue: 0,
    },
  ],
};

export default Partners;
