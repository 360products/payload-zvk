import type { Block } from 'payload';

export const DownloadsBlock: Block = {
  slug: 'downloads',
  labels: { singular: 'Download-Liste', plural: 'Download-Listen' },
  fields: [
    { name: 'kicker', label: 'Kicker (optional)', type: 'text' },
    { name: 'title', label: 'Überschrift', type: 'text' },
    {
      name: 'items',
      label: 'Dateien',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', label: 'Dateiname', type: 'text', required: true },
        { name: 'fileinfo', label: 'Info (z.B. PDF · 120 KB)', type: 'text' },
        { name: 'url', label: 'Download-URL', type: 'text' },
      ],
    },
  ],
};
