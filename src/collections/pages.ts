import type { CollectionConfig } from 'payload';
import { HeroBlock } from '@/blocks/hero';
import { TextBlock } from '@/blocks/text';
import { CardsBlock } from '@/blocks/cards';
import { StepsBlock } from '@/blocks/steps';
import { ContactBlock } from '@/blocks/contact';
import { DownloadsBlock } from '@/blocks/downloads';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'showInNav', 'published'],
    description: 'Erstellen Sie hier neue Seiten. Sie sind sofort unter /[slug] erreichbar.',
  },
  access: { read: () => true },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', label: 'Seitentitel', type: 'text', required: true },
        {
          name: 'slug',
          label: 'URL-Pfad (z.B. foerderung-2026)',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          admin: { description: 'Nur Kleinbuchstaben, Zahlen und Bindestriche. Erscheint unter /[slug].' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'published', label: 'Veröffentlicht', type: 'checkbox', defaultValue: true },
        { name: 'showInNav', label: 'In Navigation anzeigen', type: 'checkbox', defaultValue: false },
        {
          name: 'navLabel',
          label: 'Navigationsbezeichnung (falls abweichend vom Titel)',
          type: 'text',
          admin: { condition: (data) => data?.showInNav },
        },
      ],
    },
    {
      name: 'layout',
      label: 'Seiteninhalt',
      type: 'blocks',
      blocks: [HeroBlock, TextBlock, CardsBlock, StepsBlock, ContactBlock, DownloadsBlock],
      admin: {
        description: 'Bauen Sie die Seite aus Blöcken zusammen. Blöcke können per Drag & Drop sortiert werden.',
      },
    },
  ],
};

export default Pages;
