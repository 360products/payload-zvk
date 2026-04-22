import type { GlobalConfig } from 'payload';

const BetriebeGlobal: GlobalConfig = {
  slug: 'betriebe',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Für Arbeitgeber im Steinmetzhandwerk' },
        { name: 'title', type: 'text', defaultValue: 'Das System, das für Ihr Team vorsorgt — automatisch.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Als Steinmetzbetrieb zahlen Sie tariflich in die ZVK ein. Wir machen die monatliche Meldung so einfach wie möglich — und geben Ihnen Material an die Hand, um Ihren Mitarbeitern zu erklären, was sie davon haben.' },
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
        { n: '01', t: 'Anmelden', d: 'Sobald Sie einen Steinmetzbetrieb mit Angestellten führen, sind Sie automatisch Mitglied. Wir melden uns bei Ihnen, falls uns etwas fehlt.' },
        { n: '02', t: 'Monatlich melden', d: 'Lohnsummen und Mitarbeiter bequem über das Meldeportal. Der Beitrag wird berechnet und eingezogen — mehr müssen Sie nicht tun.' },
        { n: '03', t: 'Team profitiert', d: 'Ihre Mitarbeiter bauen automatisch eine tarifliche Zusatzrente auf. Auf Wunsch können sie mit ZukunftStein sogar mehr herausholen.' },
      ],
    },
    {
      name: 'fristen',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Fristen, die Sie nicht vergessen dürfen.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Melden Sie Lohnsummen und Mitarbeiter jeweils bis zum 15. des Folgemonats. Bei verspäteter Meldung entstehen Mahngebühren — fragen Sie uns lieber einmal mehr an.' },
      ],
    },
    {
      name: 'beitraege',
      type: 'array',
      labels: { singular: 'Karte', plural: 'Karten' },
      fields: [
        { name: 't', label: 'Titel', type: 'text', required: true },
        { name: 'd', label: 'Beschreibung', type: 'textarea', required: true },
      ],
      defaultValue: [
        { t: 'Wer zahlt?', d: 'Der Arbeitgeber. Für jeden tariflich beschäftigten Arbeitnehmer im Steinmetz- und Steinbildhauerhandwerk.' },
        { t: 'Wie viel?', d: 'Ein fester Prozentsatz der tariflichen Lohnsumme. Aktueller Satz und Beispielrechnungen im Downloadbereich.' },
        { t: 'Wann?', d: 'Monatlich. Meldefrist ist der 15. des Folgemonats, Abbuchung erfolgt per Lastschrift.' },
        { t: 'Was passiert bei Nichtzahlung?', d: 'Mahnlauf und ggf. gerichtliche Geltendmachung. Wir sind ein Pflichtsystem — ein Ausstieg ist nicht möglich.' },
      ],
    },
    {
      name: 'materials',
      type: 'array',
      labels: { singular: 'Material', plural: 'Materialien' },
      fields: [
        { name: 't', label: 'Titel', type: 'text', required: true },
        { name: 'f', label: 'Dateiinfo', type: 'text' },
      ],
      defaultValue: [
        { t: 'Flyer: Ihre Rente ist schon auf dem Weg', f: 'PDF · 420 KB' },
        { t: 'Plakat A3 für die Werkstatt', f: 'PDF · 1,2 MB' },
        { t: 'Erklärvideo „Pflichtbeihilfe in 2 Min."', f: 'Video · 02:11' },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        { name: 'person', type: 'text', defaultValue: 'Petra Kaiser' },
        { name: 'role', type: 'text', defaultValue: 'Meldungen, Beitragsfragen' },
        { name: 'tel', type: 'text', defaultValue: '0761 · 123 45 · 20' },
        { name: 'mail', type: 'email', defaultValue: 'betriebe@zvk-steinmetz.de' },
      ],
    },
  ],
};

export default BetriebeGlobal;
