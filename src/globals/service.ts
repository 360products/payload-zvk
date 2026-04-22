import type { GlobalConfig } from 'payload';

const ServiceGlobal: GlobalConfig = {
  slug: 'service',
  admin: { group: 'Seiteninhalte' },
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'kicker', type: 'text', defaultValue: 'Service-Hub' },
        { name: 'title', type: 'text', defaultValue: 'Was möchten Sie tun?' },
        { name: 'lede', type: 'textarea', defaultValue: 'Ein einziger Ort für alle transaktionalen Dinge — sortiert nach Aufgaben, nicht nach Abteilung.' },
      ],
    },
    {
      name: 'tasks',
      type: 'array',
      labels: { singular: 'Aufgabe', plural: 'Aufgaben' },
      fields: [
        { name: 't', label: 'Titel', type: 'text', required: true },
        { name: 'g', label: 'Gruppe', type: 'text', required: true },
        { name: 'link', label: 'Link', type: 'text', required: true },
      ],
      defaultValue: [
        { t: 'Lohnsumme melden', g: 'Betriebe', link: '/service/meldeportal' },
        { t: 'Mitarbeiter anlegen', g: 'Betriebe', link: '/service/meldeportal' },
        { t: 'Adresse ändern', g: 'Rentner', link: '/fuer-rentner#aenderungen' },
        { t: 'Bankverbindung ändern', g: 'Rentner', link: '/fuer-rentner#aenderungen' },
        { t: 'Bescheid anfordern', g: 'Rentner', link: '/service/kontakt' },
        { t: 'Renteninformation verstehen', g: 'Versicherte', link: '/fuer-versicherte#renteninfo' },
        { t: 'Beratung zu ZukunftStein', g: 'ZukunftStein', link: '/vorsorge/zukunftstein' },
        { t: 'Rente beantragen', g: 'Versicherte', link: '/service/kontakt' },
      ],
    },
  ],
};

export default ServiceGlobal;
