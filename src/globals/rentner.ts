import type { GlobalConfig } from 'payload';

const RentnerGlobal: GlobalConfig = {
  slug: 'rentner',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Für Rentnerinnen und Rentner' },
        { name: 'title', type: 'text', defaultValue: 'Wir sind telefonisch für Sie da.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Rufen Sie uns einfach an. Unsere Mitarbeiter kennen Ihren Vorgang und helfen Ihnen persönlich weiter — ohne Menüansagen, ohne Weiterleitung.' },
        { name: 'tel', type: 'text', defaultValue: '0761 · 123 45 · 30' },
        { name: 'hours', type: 'text', defaultValue: 'Mo–Do 08:00–16:30 · Fr 08:00–14:00' },
      ],
    },
    {
      name: 'quarters',
      type: 'array',
      labels: { singular: 'Quartal', plural: 'Quartale' },
      fields: [
        { name: 'q', label: 'Quartal', type: 'text', required: true },
        { name: 'd', label: 'Datum', type: 'text', required: true },
      ],
      defaultValue: [
        { q: 'Q1', d: '31. März 2026' },
        { q: 'Q2', d: '30. Juni 2026' },
        { q: 'Q3', d: '30. September 2026' },
        { q: 'Q4', d: '22. Dezember 2026' },
      ],
    },
    {
      name: 'aenderungen',
      type: 'array',
      labels: { singular: 'Änderungstyp', plural: 'Änderungstypen' },
      fields: [
        { name: 't', label: 'Titel', type: 'text', required: true },
        { name: 'd', label: 'Beschreibung', type: 'textarea', required: true },
        { name: 'tel', label: 'Telefon', type: 'text' },
      ],
      defaultValue: [
        { t: 'Adresse ändern', d: 'Formular ausfüllen oder anrufen.', tel: '0761 · 123 45 · 30' },
        { t: 'Bankverbindung ändern', d: 'Aus Sicherheitsgründen nur schriftlich.', tel: '0761 · 123 45 · 30' },
        { t: 'Todesfall melden', d: 'Wir begleiten Angehörige behutsam.', tel: '0761 · 123 45 · 31' },
      ],
    },
  ],
};

export default RentnerGlobal;
