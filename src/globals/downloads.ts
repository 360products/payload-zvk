import type { GlobalConfig } from 'payload';

const DownloadsGlobal: GlobalConfig = {
  slug: 'downloads',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Formulare & Dokumente' },
        { name: 'title', type: 'text', defaultValue: 'Downloads — nach Zielgruppe sortiert.' },
      ],
    },
    {
      name: 'groups',
      type: 'array',
      labels: { singular: 'Gruppe', plural: 'Gruppen' },
      fields: [
        { name: 'label', label: 'Gruppenname', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Datei', plural: 'Dateien' },
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'fileinfo', label: 'Dateiinfo', type: 'text' },
            { name: 'url', label: 'Download-URL', type: 'text' },
          ],
        },
      ],
      defaultValue: [
        {
          label: 'Betriebe',
          items: [
            { title: 'Beitragssatz-Tabelle 2026', fileinfo: 'PDF · 120 KB' },
            { title: 'CSV-Vorlage Lohnsummenmeldung', fileinfo: 'XLSX · 18 KB' },
            { title: 'Flyer „Pflichtbeihilfe erklärt"', fileinfo: 'PDF · 420 KB' },
            { title: 'Plakat A3 für die Werkstatt', fileinfo: 'PDF · 1,2 MB' },
          ],
        },
        {
          label: 'Versicherte',
          items: [
            { title: 'Merkblatt Renteninformation', fileinfo: 'PDF · 280 KB' },
            { title: 'Antrag Rentenbeginn', fileinfo: 'PDF · 95 KB' },
            { title: 'Checkliste Jobwechsel', fileinfo: 'PDF · 110 KB' },
          ],
        },
        {
          label: 'Rentner',
          items: [
            { title: 'Formular Adressänderung', fileinfo: 'PDF · 40 KB' },
            { title: 'Formular Bankverbindung', fileinfo: 'PDF · 45 KB' },
            { title: 'Checkliste Hinterbliebene', fileinfo: 'PDF · 180 KB' },
          ],
        },
        {
          label: 'Rechtliches',
          items: [
            { title: 'AVB (Allgemeine Versicherungsbedingungen)', fileinfo: 'PDF · 1,8 MB' },
            { title: 'Jahresabschluss 2024', fileinfo: 'PDF · 3,2 MB' },
            { title: 'Satzung ZVK Steinmetz VVaG', fileinfo: 'PDF · 420 KB' },
          ],
        },
      ],
    },
  ],
};

export default DownloadsGlobal;
