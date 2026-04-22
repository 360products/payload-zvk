import type { Block } from 'payload';

export const ContactBlock: Block = {
  slug: 'contact',
  labels: { singular: 'Kontaktstreifen', plural: 'Kontaktstreifen' },
  admin: {
    components: { Label: '@/components/admin/blocks/ContactLabel' },
  },
  fields: [
    { name: 'group', label: 'Gruppe / Abteilung', type: 'text', required: true },
    { name: 'person', label: 'Name', type: 'text', required: true },
    { name: 'role', label: 'Rolle', type: 'text' },
    { name: 'tel', label: 'Telefon', type: 'text' },
    { name: 'mail', label: 'E-Mail', type: 'email' },
  ],
};
