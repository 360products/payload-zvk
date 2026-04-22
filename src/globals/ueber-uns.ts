import type { GlobalConfig } from 'payload';

const UeberUnsGlobal: GlobalConfig = {
  slug: 'ueber-uns',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Wer wir sind' },
        { name: 'title', type: 'text', defaultValue: 'Für das Handwerk. Aus dem Handwerk. Seit 1970.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Die Zusatzversorgungskasse des Steinmetz- und Steinbildhauerhandwerks VVaG ist ein non-profit Versicherungsverein auf Gegenseitigkeit — tarifvertraglich verankert und BaFin-beaufsichtigt.' },
      ],
    },
    {
      name: 'history',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Ein Auftrag, den wir uns nicht selbst gegeben haben.' },
        { name: 'text', type: 'textarea', defaultValue: '1970 von den Tarifparteien des Steinmetzhandwerks gegründet — damit Handwerker im Ruhestand mehr haben als die gesetzliche Rente. Wir sind keine private Versicherung, sondern eine branchenweite Gemeinschaftslösung.' },
      ],
    },
    {
      name: 'timeline',
      type: 'array',
      labels: { singular: 'Eintrag', plural: 'Einträge' },
      fields: [
        { name: 'y', label: 'Jahr', type: 'text', required: true },
        { name: 't', label: 'Ereignis', type: 'text', required: true },
      ],
      defaultValue: [
        { y: '1970', t: 'Gründung durch Tarifvertrag' },
        { y: '1988', t: 'Pflichtmitgliedschaft aller Steinmetzbetriebe' },
        { y: '2015', t: 'BaFin-Aufsicht als VVaG' },
        { y: '2023', t: 'Einführung ZukunftStein' },
        { y: '2026', t: 'Rebranding & neuer digitaler Service' },
      ],
    },
    {
      name: 'aufsicht',
      type: 'array',
      labels: { singular: 'Karte', plural: 'Karten' },
      fields: [
        { name: 't', label: 'Titel', type: 'text', required: true },
        { name: 'd', label: 'Beschreibung', type: 'textarea', required: true },
      ],
      defaultValue: [
        { t: 'BaFin-Aufsicht', d: 'Als VVaG unterliegen wir der Aufsicht der Bundesanstalt für Finanzdienstleistungsaufsicht.' },
        { t: 'Tarifparteien', d: 'Getragen von den Arbeitgeberverbänden und der IG BAU.' },
        { t: 'Aufsichtsrat', d: 'Paritätisch besetzt — aus Arbeitgebern, Arbeitnehmern und Vorstand.' },
        { t: 'Jahresabschluss', d: 'Öffentlich verfügbar. Letzter testierter Bericht 2024.' },
        { t: 'AVB', d: 'Allgemeine Versicherungsbedingungen als PDF herunterladbar.' },
        { t: 'Nachhaltigkeit', d: 'Kapitalanlagen nach ESG-Kriterien, jährlicher Bericht.' },
      ],
    },
  ],
};

export default UeberUnsGlobal;
