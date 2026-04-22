import type { CollectionConfig } from 'payload';
import { HeroBlock } from '@/blocks/hero';
import { TextBlock } from '@/blocks/text';
import { CardsBlock } from '@/blocks/cards';
import { StepsBlock } from '@/blocks/steps';
import { ContactBlock } from '@/blocks/contact';
import { DownloadsBlock } from '@/blocks/downloads';

function slugify(text: string): string {
  return (text || '')
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9/]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'showInNav', 'published'],
    description: 'Erstellen Sie hier neue Seiten. Sie sind sofort unter /[slug] erreichbar.',
  },
  access: { read: () => true },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data;
        if (!data.slug && data.title) {
          data.slug = slugify(data.title);
        } else if (data.slug) {
          data.slug = slugify(data.slug);
        }
        return data;
      },
    ],
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', label: 'Seitentitel', type: 'text', required: true },
        {
          name: 'slug',
          label: 'URL-Pfad',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          admin: {
            components: {
              Field: '@/components/admin/SlugField',
            },
          },
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
