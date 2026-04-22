import type { GlobalConfig } from 'payload';

const VersicherteGlobal: GlobalConfig = {
  slug: 'versicherte',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Für Angestellte im Steinmetzhandwerk' },
        { name: 'title', type: 'text', defaultValue: 'Ihre Rente ist schon auf dem Weg.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Sie arbeiten in einem Steinmetzbetrieb? Dann sind Sie über uns bereits zusätzlich versichert — ohne einen einzigen Antrag. Hier erfahren Sie, was Sie haben und wie Sie mit ZukunftStein mehr herausholen.' },
      ],
    },
    {
      name: 'benefits',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Das bekommen Sie — ohne etwas dafür zu tun.' },
        {
          name: 'bullets',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
          defaultValue: [
            { text: '116 € monatlich als Vollrente — nach 360 Beitragsmonaten' },
            { text: 'Quartalsweise ausgezahlt ab Renteneintritt, auf Ihr Konto' },
            { text: 'Keine Beiträge von Ihnen — der Betrieb zahlt ein' },
            { text: 'Bleibt bestehen, auch bei Betriebswechsel innerhalb der Branche' },
          ],
        },
      ],
    },
    {
      name: 'lebenssituationen',
      type: 'array',
      labels: { singular: 'Situation', plural: 'Situationen' },
      fields: [
        { name: 't', label: 'Titel', type: 'text', required: true },
        { name: 'd', label: 'Beschreibung', type: 'textarea', required: true },
      ],
      defaultValue: [
        { t: 'Jobwechsel', d: 'Beiträge bleiben. Solange der neue Arbeitgeber im Handwerk ist.' },
        { t: 'Krankheit', d: 'Bei Krankengeld läuft Ihr Anspruch weiter — melden Sie uns den Bezug.' },
        { t: 'Elternzeit', d: 'Bis zu 3 Jahre anrechenbar. Für jedes Kind separat geprüft.' },
        { t: 'Umzug / Ausland', d: 'Adressänderung bitte melden. Auszahlung ins EU-Ausland möglich.' },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        { name: 'person', type: 'text', defaultValue: 'Jonas Weber' },
        { name: 'role', type: 'text', defaultValue: 'Beiträge, Anwartschaften' },
        { name: 'tel', type: 'text', defaultValue: '0761 · 123 45 · 30' },
        { name: 'mail', type: 'email', defaultValue: 'versicherte@zvk-steinmetz.de' },
      ],
    },
  ],
};

export default VersicherteGlobal;
