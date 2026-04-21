import Link from 'next/link';
import React from 'react';
import { Crumbs, PageHero } from '@/components/PageParts';

export default function PflichtbeihilfePage() {
  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Vorsorge', href: '/vorsorge/pflichtbeihilfe' }, { label: 'Pflichtbeihilfe' }]} />
      <PageHero
        kicker="Vorsorge · Tariflich verankert"
        title="Die Pflichtbeihilfe — die tarifliche Zusatzrente fürs Steinmetzhandwerk."
        lede="Eine branchenweite, faire, automatische Zusatzrente. Kein Versicherungsvertrag, kein Kleingedrucktes: das Pflichtsystem für alle Steinmetzbetriebe und ihre Angestellten."
      />

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <div className="glance">
            <div><span>Für wen</span><b>Angestellte in Steinmetzbetrieben</b></div>
            <div><span>Was kostet's</span><b>0 € für Arbeitnehmer</b></div>
            <div><span>Was bekomme ich</span><b>Bis 116 €/Monat</b></div>
            <div><span>Ab wann</span><b>Regelaltersgrenze</b></div>
          </div>
        </div>
      </section>

      <section className="zvk-section-sm" style={{ background: 'var(--zvk-sand-50)' }}>
        <div className="zvk-container">
          <span className="zvk-kicker">So funktioniert es</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 28 }}>Vom Beitrag zur Auszahlung.</h2>
          <div className="flow">
            {['Arbeitgeber zahlt ein', 'Beitragsmonate sammeln', 'Anwartschaft wächst', 'Auszahlung im Alter'].map((t, i, arr) => (
              <React.Fragment key={i}>
                <div className="flow__n">
                  <div className="flow__circle">{i + 1}</div>
                  <div className="flow__t">{t}</div>
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
            <h3 className="zvk-display zvk-display-sm" style={{ marginTop: 12, marginBottom: 14 }}>Sie zahlen nichts, Sie bekommen etwas.</h3>
            <ul className="bullets">
              <li>Automatisch versichert, ohne Antrag</li>
              <li>Portabel innerhalb der Branche</li>
              <li>Quartalsweise Auszahlung im Ruhestand</li>
            </ul>
          </div>
          <div className="zvk-card" style={{ padding: 32, background: 'var(--zvk-schiefer-900)', borderColor: 'transparent', color: 'white' }}>
            <span className="zvk-kicker" style={{ color: 'var(--zvk-sandstein)' }}>Für Betriebe</span>
            <h3 className="zvk-display zvk-display-sm" style={{ marginTop: 12, marginBottom: 14, color: 'white' }}>Pflicht — aber fair aufgebaut.</h3>
            <ul className="bullets bullets--light">
              <li>Festgelegter Prozentsatz der Lohnsumme</li>
              <li>Kein Vertriebsaufschlag, keine versteckten Kosten</li>
              <li>BaFin-beaufsichtigt</li>
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
            {[
              { n: '0 %', l: 'Vertriebskosten' },
              { n: 'BaFin', l: 'beaufsichtigt' },
              { n: '1970', l: 'tarifvertraglich verankert' },
            ].map((x, i) => (
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
