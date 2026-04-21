import { CollectionConfig } from 'payload/types';

const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      label: 'Job title / Role',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      label: 'Direct phone (e.g. 0761 · 123 45 · 10)',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'photo',
      label: 'Photo URL',
      type: 'text',
      defaultValue: '/prototyp/assets/placeholder.jpg',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'order',
      label: 'Display order',
      type: 'number',
      defaultValue: 0,
    },
  ],
};

export default Team;
