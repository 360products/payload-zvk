import type { GlobalConfig } from 'payload';

const PflichtbeihilfeGlobal: GlobalConfig = {
  slug: 'pflichtbeihilfe',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Vorsorge · Tariflich verankert' },
        { name: 'title', type: 'text', defaultValue: 'Die Pflichtbeihilfe — die tarifliche Zusatzrente fürs Steinmetzhandwerk.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Eine branchenweite, faire, automatische Zusatzrente. Kein Versicherungsvertrag, kein Kleingedrucktes: das Pflichtsystem für alle Steinmetzbetriebe und ihre Angestellten.' },
      ],
    },
    {
      name: 'glance',
      type: 'array',
      labels: { singular: 'Auf einen Blick', plural: 'Auf einen Blick' },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
      defaultValue: [
        { label: 'Für wen', value: 'Angestellte in Steinmetzbetrieben' },
        { label: 'Was kostet\'s', value: '0 € für Arbeitnehmer' },
        { label: 'Was bekomme ich', value: 'Bis 116 €/Monat' },
        { label: 'Ab wann', value: 'Regelaltersgrenze' },
      ],
    },
    {
      name: 'flow',
      type: 'array',
      labels: { singular: 'Schritt', plural: 'Schritte' },
      fields: [{ name: 'text', type: 'text', required: true }],
      defaultValue: [
        { text: 'Arbeitgeber zahlt ein' },
        { text: 'Beitragsmonate sammeln' },
        { text: 'Anwartschaft wächst' },
        { text: 'Auszahlung im Alter' },
      ],
    },
    {
      name: 'arbeitnehmer',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Sie zahlen nichts, Sie bekommen etwas.' },
        {
          name: 'bullets',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
          defaultValue: [
            { text: 'Automatisch versichert, ohne Antrag' },
            { text: 'Portabel innerhalb der Branche' },
            { text: 'Quartalsweise Auszahlung im Ruhestand' },
          ],
        },
      ],
    },
    {
      name: 'betriebe',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Pflicht — aber fair aufgebaut.' },
        {
          name: 'bullets',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
          defaultValue: [
            { text: 'Festgelegter Prozentsatz der Lohnsumme' },
            { text: 'Kein Vertriebsaufschlag, keine versteckten Kosten' },
            { text: 'BaFin-beaufsichtigt' },
          ],
        },
      ],
    },
    {
      name: 'transparency',
      type: 'array',
      labels: { singular: 'Kennzahl', plural: 'Kennzahlen' },
      fields: [
        { name: 'n', label: 'Zahl', type: 'text', required: true },
        { name: 'l', label: 'Bezeichnung', type: 'text', required: true },
      ],
      defaultValue: [
        { n: '0 %', l: 'Vertriebskosten' },
        { n: 'BaFin', l: 'beaufsichtigt' },
        { n: '1970', l: 'tarifvertraglich verankert' },
      ],
    },
  ],
};

export default PflichtbeihilfeGlobal;
