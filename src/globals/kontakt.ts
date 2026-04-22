import type { GlobalConfig } from 'payload';

const KontaktGlobal: GlobalConfig = {
  slug: 'kontakt',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'So erreichen Sie uns' },
        { name: 'title', type: 'text', defaultValue: 'Wir sind persönlich erreichbar.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Telefon, Mail oder Termin vor Ort — wählen Sie den Weg, der Ihnen liegt.' },
      ],
    },
    {
      name: 'phones',
      type: 'array',
      labels: { singular: 'Durchwahl', plural: 'Durchwahlen' },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'number', type: 'text', required: true },
      ],
      defaultValue: [
        { label: 'Zentrale', number: '0761 · 123 45 · 00' },
        { label: 'Betriebe / Meldungen', number: '0761 · 123 45 · 20' },
        { label: 'Versicherte', number: '0761 · 123 45 · 40' },
        { label: 'Rentenbezug', number: '0761 · 123 45 · 30' },
        { label: 'ZukunftStein · Beratung', number: '0761 · 123 45 · 50' },
        { label: 'Presse', number: '0761 · 123 45 · 80' },
      ],
    },
    {
      name: 'address',
      type: 'textarea',
      defaultValue: 'ZVK Steinmetz VVaG\nMusterstraße 12\n79098 Freiburg im Breisgau',
    },
  ],
};

export default KontaktGlobal;
