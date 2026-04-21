import { Crumbs, PageHero } from '@/components/PageParts';
import { findAll } from '@/lib/payload';

const FALLBACK_TEAM = [
  ['Andrea Rockel', 'Geschäftsführung', '· 10'],
  ['Markus Mathes', 'Vorstand', '· 11'],
  ['Carsten Mayer', 'Vorstand', '· 12'],
  ['Petra Kaiser', 'Betriebe', '· 20'],
  ['Jonas Weber', 'Rentenbezug', '· 30'],
  ['Sabine Lehmann', 'Versicherte', '· 40'],
  ['Klaus Hoffmann', 'ZukunftStein', '· 50'],
  ['Lina Becker', 'Finanzen & IT', '· 60'],
];

export default async function UeberUnsPage() {
  const cms = await findAll('team', { sort: 'order' });
  const team = cms.length > 0
    ? cms.map((m: any) => [m.name, m.role, m.phone || ''])
    : FALLBACK_TEAM;

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Über die ZVK' }]} />
      <PageHero
        kicker="Wer wir sind"
        title="Für das Handwerk. Aus dem Handwerk. Seit 1970."
        lede="Die Zusatzversorgungskasse des Steinmetz- und Steinbildhauerhandwerks VVaG ist ein non-profit Versicherungsverein auf Gegenseitigkeit — tarifvertraglich verankert und BaFin-beaufsichtigt."
      />

      <section className="zvk-section-sm">
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <span className="zvk-kicker">Auftrag & Geschichte</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12 }}>Ein Auftrag, den wir uns nicht selbst gegeben haben.</h2>
            <p style={{ marginTop: 18, color: 'var(--zvk-schiefer-800)' }}>
              1970 von den Tarifparteien des Steinmetzhandwerks gegründet — damit Handwerker im Ruhestand
              mehr haben als die gesetzliche Rente. Wir sind keine private Versicherung, sondern eine
              branchenweite Gemeinschaftslösung.
            </p>
          </div>
          <div className="timeline">
            {[
              { y: '1970', t: 'Gründung durch Tarifvertrag' },
              { y: '1988', t: 'Pflichtmitgliedschaft aller Steinmetzbetriebe' },
              { y: '2015', t: 'BaFin-Aufsicht als VVaG' },
              { y: '2023', t: 'Einführung ZukunftStein' },
              { y: '2026', t: 'Rebranding & neuer digitaler Service' },
            ].map((x, i) => (
              <div className="timeline__item" key={i}>
                <div className="timeline__y">{x.y}</div>
                <div className="timeline__t">{x.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="zvk-section-sm" style={{ background: 'white', borderTop: '1px solid var(--zvk-line)', borderBottom: '1px solid var(--zvk-line)' }}>
        <div className="zvk-container">
          <span className="zvk-kicker">Unser Team</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 28 }}>Die Menschen hinter der ZVK.</h2>
          <div className="zvk-grid zvk-grid-4">
            {team.map((p: any, i: number) => (
              <div className="home-people__card" key={i}>
                <div className="zvk-ph zvk-ph--schiefer home-people__photo">Foto</div>
                <div style={{ padding: '16px 2px 2px' }}>
                  <div style={{ fontSize: 17, color: 'var(--zvk-tiefschwarz)', fontWeight: 500 }}>{p[0]}</div>
                  <div style={{ fontSize: 13, color: 'var(--zvk-steingrau)', marginTop: 4 }}>{p[1]}</div>
                  {p[2] && <div style={{ fontSize: 13, color: 'var(--zvk-schiefergrau)', marginTop: 6, fontFamily: 'var(--zvk-font-mono)' }}>{p[2].startsWith('0') ? p[2] : `0761 · 123 45 ${p[2]}`}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="aufsicht" className="zvk-section-sm">
        <div className="zvk-container">
          <span className="zvk-kicker">Aufsicht & Transparenz</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 24 }}>Kontrolliert, öffentlich, nachvollziehbar.</h2>
          <div className="zvk-grid zvk-grid-3">
            {[
              { t: 'BaFin-Aufsicht', d: 'Als VVaG unterliegen wir der Aufsicht der Bundesanstalt für Finanzdienstleistungsaufsicht.' },
              { t: 'Tarifparteien', d: 'Getragen von den Arbeitgeberverbänden und der IG BAU.' },
              { t: 'Aufsichtsrat', d: 'Paritätisch besetzt — aus Arbeitgebern, Arbeitnehmern und Vorstand.' },
              { t: 'Jahresabschluss', d: 'Öffentlich verfügbar. Letzter testierter Bericht 2024.' },
              { t: 'AVB', d: 'Allgemeine Versicherungsbedingungen als PDF herunterladbar.' },
              { t: 'Nachhaltigkeit', d: 'Kapitalanlagen nach ESG-Kriterien, jährlicher Bericht.' },
            ].map((x, i) => (
              <div className="zvk-card" key={i} style={{ padding: 22 }}>
                <div style={{ fontSize: 16, color: 'var(--zvk-tiefschwarz)', fontWeight: 500, marginBottom: 8 }}>{x.t}</div>
                <div style={{ fontSize: 14, color: 'var(--zvk-schiefer-800)', lineHeight: 1.55 }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
