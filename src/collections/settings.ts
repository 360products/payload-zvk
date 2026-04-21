import { CollectionConfig } from 'payload/types';

const Settings: CollectionConfig = {
  slug: 'settings',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'ZVK Steinmetz',
    },
    {
      name: 'contactPhone',
      label: 'Zentrale Telefon',
      type: 'text',
      defaultValue: '0761 · 123 45 · 00',
    },
    {
      name: 'contactEmail',
      label: 'Kontakt E-Mail',
      type: 'email',
      defaultValue: 'kontakt@zvk-steinmetz.de',
    },
    {
      name: 'address',
      label: 'Adresse',
      type: 'text',
      defaultValue: 'ZVK Steinmetz VVaG, Musterstraße 12, 79098 Freiburg im Breisgau',
    },
    {
      name: 'logo',
      type: 'text',
      label: 'Logo URL',
      defaultValue: '/prototyp/assets/logo-zvk.png',
    },
  ],
};

export default Settings;
