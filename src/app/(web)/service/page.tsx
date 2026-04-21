import Link from 'next/link';
import { Crumbs, PageHero } from '@/components/PageParts';

export default function ServiceHubPage() {
  const tasks = [
    { t: 'Lohnsumme melden', g: 'Betriebe', link: '/service/meldeportal' },
    { t: 'Mitarbeiter anlegen', g: 'Betriebe', link: '/service/meldeportal' },
    { t: 'Adresse ändern', g: 'Rentner', link: '/fuer-rentner#aenderungen' },
    { t: 'Bankverbindung ändern', g: 'Rentner', link: '/fuer-rentner#aenderungen' },
    { t: 'Bescheid anfordern', g: 'Rentner', link: '/service/kontakt' },
    { t: 'Renteninformation verstehen', g: 'Versicherte', link: '/fuer-versicherte#renteninfo' },
    { t: 'Beratung zu ZukunftStein', g: 'ZukunftStein', link: '/vorsorge/zukunftstein' },
    { t: 'Rente beantragen', g: 'Versicherte', link: '/service/kontakt' },
  ];
  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Service' }]} />
      <PageHero kicker="Service-Hub" title="Was möchten Sie tun?" lede="Ein einziger Ort für alle transaktionalen Dinge — sortiert nach Aufgaben, nicht nach Abteilung." />
      <section className="zvk-section-sm">
        <div className="zvk-container">
          <span className="zvk-kicker">Aufgaben</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 24 }}>Direkte Wege.</h2>
          <div className="zvk-grid zvk-grid-4">
            {tasks.map((t, i) => (
              <Link href={t.link} key={i} className="zvk-card zvk-card--link" style={{ padding: 20, minHeight: 130, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span className="zvk-tag">{t.g}</span>
                <div style={{ fontSize: 17, color: 'var(--zvk-tiefschwarz)', fontWeight: 500, marginTop: 12 }}>{t.t}</div>
                <div style={{ fontSize: 13, color: 'var(--zvk-schiefergrau)', marginTop: 12 }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="zvk-section-sm" style={{ background: 'white', borderTop: '1px solid var(--zvk-line)', borderBottom: '1px solid var(--zvk-line)' }}>
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Link href="/service/meldeportal" className="portal-card">
            <span className="zvk-kicker">Betriebe</span>
            <h3 className="zvk-display zvk-display-sm" style={{ marginTop: 10 }}>Meldeportal →</h3>
            <p style={{ marginTop: 10, color: 'var(--zvk-schiefer-800)' }}>Login für Betriebe. Lohnsummen und Mitarbeitermeldungen.</p>
            <div className="portal-card__status zvk-tag" style={{ marginTop: 20 }}>Aktiv</div>
          </Link>
          <div className="portal-card portal-card--soon">
            <span className="zvk-kicker">Versicherte / Rentner</span>
            <h3 className="zvk-display zvk-display-sm" style={{ marginTop: 10 }}>Portal · bald</h3>
            <p style={{ marginTop: 10, color: 'var(--zvk-schiefer-800)' }}>Login für Privatpersonen. Bis dahin erreichen Sie uns telefonisch.</p>
            <div className="portal-card__status zvk-tag zvk-tag--sand" style={{ marginTop: 20 }}>In Vorbereitung</div>
          </div>
        </div>
      </section>
    </main>
  );
}
