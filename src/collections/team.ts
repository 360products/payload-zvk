import type { CollectionConfig } from 'payload';

const Team: CollectionConfig = {
  slug: 'team',
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    { name: 'phone', type: 'text', admin: { description: 'z.B. 0761 · 123 45 · 10' } },
    { name: 'email', type: 'email' },
    { name: 'photo', type: 'text', admin: { description: 'Foto-URL' } },
    { name: 'bio', type: 'textarea' },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
};

export default Team;
