import type { GlobalConfig } from 'payload';

const ZukunftsteinGlobal: GlobalConfig = {
  slug: 'zukunftstein-page',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Freiwillig · Zusatzrente' },
        { name: 'title', type: 'text', defaultValue: 'ZukunftStein.\nFreiwillig mehr vorsorgen.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Mit ZukunftStein wandeln Sie Bruttolohn in zusätzliche Rente um — ohne Vertriebskosten, ohne Provisionsanteil. Für Angestellte, die mehr wollen. Und für Betriebe, die ein echtes Argument suchen.' },
      ],
    },
    {
      name: 'quote',
      type: 'group',
      fields: [
        { name: 'text', type: 'textarea', defaultValue: 'Ich habe meinen Chef einfach gefragt, ob er das anbieten kann. Es war weniger Aufwand als gedacht — und ich habe jetzt monatlich 80 € mehr fürs Alter.' },
        { name: 'author', type: 'text', defaultValue: 'Thomas K.' },
        { name: 'role', type: 'text', defaultValue: 'Steinmetzgeselle · 34 Jahre' },
      ],
    },
    {
      name: 'steps',
      type: 'array',
      labels: { singular: 'Schritt', plural: 'Schritte' },
      fields: [
        { name: 'n', label: 'Nummer', type: 'text', required: true },
        { name: 't', label: 'Titel', type: 'text', required: true },
        { name: 'd', label: 'Beschreibung', type: 'textarea', required: true },
      ],
      defaultValue: [
        { n: '01', t: 'Beratungstermin', d: 'Kostenlose Beratung durch unsere Spezialisten — telefonisch oder beim Betrieb.' },
        { n: '02', t: 'Abschluss über Betrieb', d: 'Der Arbeitgeber meldet Sie im Meldeportal an. Keine externen Formulare.' },
        { n: '03', t: 'Zahlung startet', d: 'Der gewählte Betrag wird direkt vom Bruttolohn abgeführt — ab dem Folgemonat.' },
      ],
    },
    {
      name: 'betriebeBullets',
      label: 'Vorteile für Betriebe',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
      defaultValue: [
        { text: 'Minimaler Verwaltungsaufwand — über das bekannte Meldeportal' },
        { text: 'Attraktivitätsmerkmal im Wettbewerb um Fachkräfte' },
        { text: 'Keine Kosten für den Betrieb, keine Versicherungspflicht' },
        { text: 'Auf Wunsch mit AG-Zuschuss kombinierbar' },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        { name: 'person', type: 'text', defaultValue: 'Andrea Rockel' },
        { name: 'role', type: 'text', defaultValue: 'Beratung & Vertrieb Zusatzvorsorge' },
        { name: 'tel', type: 'text', defaultValue: '0761 · 123 45 · 10' },
        { name: 'mail', type: 'email', defaultValue: 'zukunftstein@zvk-steinmetz.de' },
      ],
    },
  ],
};

export default ZukunftsteinGlobal;
