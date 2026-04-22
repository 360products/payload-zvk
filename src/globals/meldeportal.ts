import type { GlobalConfig } from 'payload';

const MeldeportalGlobal: GlobalConfig = {
  slug: 'meldeportal',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Für Betriebe' },
        { name: 'title', type: 'text', defaultValue: 'Meldeportal für Betriebe.' },
        { name: 'lede', type: 'textarea', defaultValue: 'Lohnsummen und Mitarbeitermeldungen zentral, jederzeit, mobilfähig. Ab 2026 mit vereinfachtem Login und CSV-Upload.' },
      ],
    },
    {
      name: 'features',
      type: 'array',
      labels: { singular: 'Feature', plural: 'Features' },
      fields: [{ name: 'text', type: 'text', required: true }],
      defaultValue: [
        { text: 'Lohnsummen-Meldung (manuell oder CSV)' },
        { text: 'Mitarbeiter anlegen, ändern, ausmelden' },
        { text: 'ZukunftStein für Angestellte aktivieren' },
        { text: 'Rechnungen, Beitragsnachweise, Jahreslisten' },
        { text: 'Mahn- und Zahlungshistorie' },
      ],
    },
  ],
};

export default MeldeportalGlobal;
