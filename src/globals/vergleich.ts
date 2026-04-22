import type { GlobalConfig } from 'payload';

const VergleichGlobal: GlobalConfig = {
  slug: 'vergleich',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Vorsorge · Vergleich' },
        { name: 'title', type: 'text', defaultValue: 'Pflichtbeihilfe & ZukunftStein — im Vergleich.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Beides ist ZVK. Beides ist non-profit. Aber eben nicht dasselbe — hier die wichtigsten Unterschiede nebeneinander.' },
      ],
    },
    {
      name: 'rows',
      type: 'array',
      labels: { singular: 'Zeile', plural: 'Zeilen' },
      fields: [
        { name: 'key', label: 'Merkmal', type: 'text', required: true },
        { name: 'pflicht', label: 'Pflichtbeihilfe', type: 'text', required: true },
        { name: 'zukunft', label: 'ZukunftStein', type: 'text', required: true },
      ],
      defaultValue: [
        { key: 'Pflicht oder freiwillig?', pflicht: 'Pflicht (tarifvertraglich)', zukunft: 'Freiwillig' },
        { key: 'Wer zahlt?', pflicht: 'Arbeitgeber', zukunft: 'Arbeitnehmer (Bruttoumwandlung)' },
        { key: 'Für Arbeitnehmer kostet', pflicht: '0 €', zukunft: '~ 62 % vom Bruttobetrag netto' },
        { key: 'Zusätzliche Rente', pflicht: 'Bis 116 €/Monat Vollrente', zukunft: 'Abhängig vom Einzahlungsbetrag' },
        { key: 'Abschluss nötig', pflicht: 'Nein — automatisch', zukunft: 'Ja, über den Betrieb' },
        { key: 'Vertriebskosten', pflicht: 'Keine', zukunft: 'Keine' },
        { key: 'Aufsicht', pflicht: 'BaFin', zukunft: 'BaFin' },
      ],
    },
  ],
};

export default VergleichGlobal;
