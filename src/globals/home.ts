import type { GlobalConfig } from 'payload';

const HomeGlobal: GlobalConfig = {
  slug: 'home',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Zusatzrente fürs Steinmetzhandwerk' },
        { name: 'title', type: 'text', defaultValue: 'Sicher in den\nRuhestand.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Wir sind die Zusatzkasse für alle, die im Steinmetz- und Steinbildhauerhandwerk arbeiten. Ihr Betrieb zahlt ein, Sie bekommen später Rente dazu. Einfach, tarifvertraglich geregelt, seit 1970.' },
        { name: 'cta1', type: 'text', defaultValue: 'Ich führe einen Betrieb' },
        { name: 'cta2', type: 'text', defaultValue: 'Ich bin Steinmetz:in' },
        { name: 'stickerLine1', type: 'text', defaultValue: 'Seit 55 Jahren' },
        { name: 'stickerLine2', type: 'text', defaultValue: 'Getragen von den Betrieben selbst.' },
      ],
    },
    {
      name: 'kpis',
      type: 'array',
      labels: { singular: 'KPI', plural: 'KPIs' },
      fields: [
        { name: 'n', label: 'Zahl', type: 'text', required: true },
        { name: 'l', label: 'Bezeichnung', type: 'text', required: true },
        { name: 's', label: 'Subtext', type: 'text' },
      ],
      defaultValue: [
        { n: '16.000', l: 'Versicherte', s: 'in Betrieben in ganz Deutschland' },
        { n: '3.500', l: 'Rentner', s: 'beziehen jeden Monat Geld von uns' },
        { n: '116 €', l: 'Beihilfe pro Monat', s: 'Vollrente nach 360 Beitragsmonaten' },
        { n: '1970', l: 'Seit', s: 'vom Tarifvertrag festgeschrieben' },
      ],
    },
    {
      name: 'audiences',
      type: 'array',
      labels: { singular: 'Karte', plural: 'Karten' },
      fields: [
        { name: 'kicker', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea', required: true },
        { name: 'top', type: 'text' },
        { name: 'link', type: 'text', required: true },
        { name: 'tone', type: 'select', options: ['warm', 'sand', 'schiefer'], defaultValue: 'warm' },
      ],
      defaultValue: [
        { kicker: '01 · Betrieb', title: 'Für Betriebe', text: 'Lohnsummen melden, neue Mitarbeiter anmelden, Beiträge im Blick halten — alles, was Sie jeden Monat brauchen.', link: '/fuer-betriebe', top: 'Direkt ins Meldeportal', tone: 'warm' },
        { kicker: '02 · Steinmetz:in', title: 'Für Versicherte', text: 'Was steht Ihnen zu, wenn Sie einmal aufhören? Und wie holen Sie mit ZukunftStein noch mehr raus?', link: '/fuer-versicherte', top: 'Meinen Rentenbescheid verstehen', tone: 'sand' },
        { kicker: '03 · Im Ruhestand', title: 'Für Rentner', text: 'Auszahlung, Bescheide, Adressänderungen. Große Schrift, echte Durchwahl — kein Kleingedrucktes.', link: '/fuer-rentner', top: 'Änderung melden', tone: 'schiefer' },
      ],
    },
    {
      name: 'services',
      type: 'array',
      labels: { singular: 'Service-Karte', plural: 'Service-Karten' },
      fields: [
        { name: 'icon', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea', required: true },
        { name: 'link', type: 'text', required: true },
      ],
      defaultValue: [
        { icon: '↗', title: 'Meldeportal', text: 'Monatliche Lohnmeldung und Mitarbeiter-An- und Abmeldung online.', link: '/service/meldeportal' },
        { icon: '?', title: 'Fragen & Antworten', text: 'Häufige Fragen — sortiert nach Betrieb, Versicherten und Rentnern.', link: '/service/faq' },
        { icon: '⤓', title: 'Formulare', text: 'Anmeldebogen, Beitrittserklärung, Merkblätter. Zum Ausdrucken.', link: '/service/downloads' },
        { icon: '☎', title: 'Ansprechpartner', text: 'Echte Menschen mit Durchwahl — keine Warteschlangen, kein Bandsalat.', link: '/service/kontakt' },
      ],
    },
    {
      name: 'zukunftstein',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Mehr rausholen — direkt vom Lohn.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Neben der Pflicht-Beihilfe, die der Betrieb für Sie einzahlt, können Sie selbst noch etwas drauflegen — direkt aus dem Bruttolohn, über Ihren Betrieb. Das Finanzamt und die Sozialkasse sind erstmal draußen.' },
        {
          name: 'bullets',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
          defaultValue: [
            { text: 'Zahlt der Betrieb direkt vom Lohn ein — kein Papierkram für Sie' },
            { text: 'Steuer- und sozialabgabenfrei bis zur Beitragsbemessungsgrenze' },
            { text: 'Die ZVK gehört den Betrieben selbst — kein Konzern dahinter' },
          ],
        },
      ],
    },
  ],
};

export default HomeGlobal;
