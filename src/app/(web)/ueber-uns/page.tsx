import { Crumbs, PageHero } from '@/components/PageParts';
import { findAll } from '@/lib/payload';
import { getGlobal } from '@/lib/globals';

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
  const [cms, g] = await Promise.all([
    findAll('team', { sort: 'order' }),
    getGlobal('ueber-uns'),
  ]);

  const team = cms.length > 0
    ? cms.map((m: any) => [m.name, m.role, m.phone || ''])
    : FALLBACK_TEAM;

  const hero = g?.hero ?? {};
  const history = g?.history ?? {};
  const timeline: any[] = g?.timeline ?? [];
  const aufsicht: any[] = g?.aufsicht ?? [];

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Über die ZVK' }]} />
      <PageHero
        kicker={hero.kicker ?? 'Wer wir sind'}
        title={hero.title ?? 'Für das Handwerk. Aus dem Handwerk. Seit 1970.'}
        lede={hero.lede ?? ''}
      />

      <section className="zvk-section-sm">
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <span className="zvk-kicker">Auftrag & Geschichte</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12 }}>{history.title ?? 'Ein Auftrag, den wir uns nicht selbst gegeben haben.'}</h2>
            <p style={{ marginTop: 18, color: 'var(--zvk-schiefer-800)' }}>{history.text ?? ''}</p>
          </div>
          <div className="timeline">
            {timeline.map((x: any, i: number) => (
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
            {aufsicht.map((x: any, i: number) => (
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
