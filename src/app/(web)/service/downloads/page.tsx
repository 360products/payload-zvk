import { Crumbs, PageHero } from '@/components/PageParts';

export default function DownloadsPage() {
  const groups: [string, string[]][] = [
    ['Betriebe', [
      'Beitragssatz-Tabelle 2026 (PDF · 120 KB)',
      'CSV-Vorlage Lohnsummenmeldung (XLSX · 18 KB)',
      'Flyer „Pflichtbeihilfe erklärt" (PDF · 420 KB)',
      'Plakat A3 für die Werkstatt (PDF · 1,2 MB)',
    ]],
    ['Versicherte', [
      'Merkblatt Renteninformation (PDF · 280 KB)',
      'Antrag Rentenbeginn (PDF · 95 KB)',
      'Checkliste Jobwechsel (PDF · 110 KB)',
    ]],
    ['Rentner', [
      'Formular Adressänderung (PDF · 40 KB)',
      'Formular Bankverbindung (PDF · 45 KB)',
      'Checkliste Hinterbliebene (PDF · 180 KB)',
    ]],
    ['Rechtliches', [
      'AVB (Allgemeine Versicherungsbedingungen) (PDF · 1,8 MB)',
      'Jahresabschluss 2024 (PDF · 3,2 MB)',
      'Satzung ZVK Steinmetz VVaG (PDF · 420 KB)',
    ]],
  ];
  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Service', href: '/service' }, { label: 'Downloads' }]} />
      <PageHero kicker="Formulare & Dokumente" title="Downloads — nach Zielgruppe sortiert." />
      <section className="zvk-section-sm">
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {groups.map(([g, items]) => (
            <div key={g} className="zvk-card" style={{ padding: 28 }}>
              <span className="zvk-kicker">{g}</span>
              <div style={{ marginTop: 12 }}>
                {items.map((it, i) => (
                  <a key={i} href="#" className="dl-row">
                    <span>{it}</span>
                    <span style={{ color: 'var(--zvk-schiefergrau)' }}>↓</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
