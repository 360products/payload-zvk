import type { CollectionConfig } from 'payload';

const Settings: CollectionConfig = {
  slug: 'settings',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, defaultValue: 'ZVK Steinmetz' },
    { name: 'contactPhone', type: 'text', defaultValue: '0761 · 123 45 · 00' },
    { name: 'contactEmail', type: 'email', defaultValue: 'kontakt@zvk-steinmetz.de' },
    { name: 'address', type: 'text', defaultValue: 'ZVK Steinmetz VVaG, Musterstraße 12, 79098 Freiburg' },
    { name: 'logo', type: 'text', defaultValue: '/prototyp/assets/logo-zvk.png' },
  ],
};

export default Settings;
