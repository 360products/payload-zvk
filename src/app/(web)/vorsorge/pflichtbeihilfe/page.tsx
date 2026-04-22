import Link from 'next/link';
import React from 'react';
import { Crumbs, PageHero } from '@/components/PageParts';
import { getGlobal } from '@/lib/globals';

export default async function PflichtbeihilfePage() {
  const g = await getGlobal('pflichtbeihilfe');

  const hero = g?.hero ?? {};
  const glance: any[] = g?.glance ?? [];
  const flow: any[] = g?.flow ?? [];
  const arbeitnehmer = g?.arbeitnehmer ?? {};
  const betriebe = g?.betriebe ?? {};
  const transparency: any[] = g?.transparency ?? [];

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Vorsorge', href: '/vorsorge/pflichtbeihilfe' }, { label: 'Pflichtbeihilfe' }]} />
      <PageHero
        kicker={hero.kicker ?? 'Vorsorge · Tariflich verankert'}
        title={hero.title ?? 'Die Pflichtbeihilfe — die tarifliche Zusatzrente fürs Steinmetzhandwerk.'}
        lede={hero.lede ?? ''}
      />

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <div className="glance">
            {glance.map((x: any, i: number) => (
              <div key={i}><span>{x.label}</span><b>{x.value}</b></div>
            ))}
          </div>
        </div>
      </section>

      <section className="zvk-section-sm" style={{ background: 'var(--zvk-sand-50)' }}>
        <div className="zvk-container">
          <span className="zvk-kicker">So funktioniert es</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 28 }}>Vom Beitrag zur Auszahlung.</h2>
          <div className="flow">
            {flow.map((step: any, i: number, arr: any[]) => (
              <React.Fragment key={i}>
                <div className="flow__n">
                  <div className="flow__circle">{i + 1}</div>
                  <div className="flow__t">{step.text}</div>
                </div>
                {i < arr.length - 1 && <div className="flow__line" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div className="zvk-card" style={{ padding: 32 }}>
            <span className="zvk-kicker">Für Arbeitnehmer</span>
            <h3 className="zvk-display zvk-display-sm" style={{ marginTop: 12, marginBottom: 14 }}>{arbeitnehmer.title ?? 'Sie zahlen nichts, Sie bekommen etwas.'}</h3>
            <ul className="bullets">
              {(arbeitnehmer.bullets ?? []).map((b: any, i: number) => <li key={i}>{b.text}</li>)}
            </ul>
          </div>
          <div className="zvk-card" style={{ padding: 32, background: 'var(--zvk-schiefer-900)', borderColor: 'transparent', color: 'white' }}>
            <span className="zvk-kicker" style={{ color: 'var(--zvk-sandstein)' }}>Für Betriebe</span>
            <h3 className="zvk-display zvk-display-sm" style={{ marginTop: 12, marginBottom: 14, color: 'white' }}>{betriebe.title ?? 'Pflicht — aber fair aufgebaut.'}</h3>
            <ul className="bullets bullets--light">
              {(betriebe.bullets ?? []).map((b: any, i: number) => <li key={i}>{b.text}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="zvk-section-sm" style={{ background: 'white', borderTop: '1px solid var(--zvk-line)', borderBottom: '1px solid var(--zvk-line)' }}>
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48 }}>
          <div>
            <span className="zvk-kicker">Transparenz</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12 }}>Non-profit. Und das ist Programm.</h2>
          </div>
          <div className="zvk-grid zvk-grid-3">
            {transparency.map((x: any, i: number) => (
              <div key={i} style={{ borderLeft: '2px solid var(--zvk-sandstein)', paddingLeft: 16 }}>
                <div style={{ fontSize: 32, fontWeight: 300, color: 'var(--zvk-tiefschwarz)', letterSpacing: '-0.02em' }}>{x.n}</div>
                <div style={{ fontSize: 14, color: 'var(--zvk-steingrau)', marginTop: 8 }}>{x.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <div className="teaser">
            <div>
              <span className="zvk-kicker">Unterschied zu ZukunftStein</span>
              <h3 className="zvk-display zvk-display-sm" style={{ marginTop: 10 }}>Zwei Produkte, klar getrennt.</h3>
              <p style={{ marginTop: 14, color: 'var(--zvk-schiefer-800)', maxWidth: '52ch' }}>
                Pflichtbeihilfe ist automatisch. ZukunftStein ist freiwillig und kann darauf aufgesetzt werden.
              </p>
            </div>
            <Link href="/vorsorge/vergleich" className="zvk-btn zvk-btn--primary">Vergleich ansehen <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
