import { Crumbs } from '@/components/PageParts';
import MiniFaq from '@/components/MiniFaq';
import { getFaqsByCluster } from '@/lib/faq-fallback';

export default async function RentnerPage() {
  const faqs = await getFaqsByCluster('Rentner');

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Für Rentner' }]} />
      <section className="rentner-hero">
        <div className="zvk-container rentner-hero__grid">
          <div>
            <span className="zvk-kicker">Für Rentnerinnen und Rentner</span>
            <h1 style={{ fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 300, letterSpacing: '-0.02em', marginTop: 12, color: 'var(--zvk-tiefschwarz)' }}>
              Wir sind telefonisch für Sie da.
            </h1>
            <p style={{ fontSize: 19, color: 'var(--zvk-schiefer-800)', marginTop: 18, maxWidth: '52ch', lineHeight: 1.6 }}>
              Rufen Sie uns einfach an. Unsere Mitarbeiter kennen Ihren Vorgang und helfen Ihnen persönlich weiter — ohne Menüansagen, ohne Weiterleitung.
            </p>
          </div>
          <div className="rentner-hero__phone">
            <div className="zvk-kicker">Rentenbezug</div>
            <div className="rentner-hero__tel">0761 · 123 45 · 30</div>
            <div style={{ fontSize: 15, color: 'var(--zvk-schiefer-800)', marginTop: 12 }}>
              Mo–Do 08:00–16:30 · Fr 08:00–14:00
            </div>
            <a href="tel:0761123450" className="zvk-btn zvk-btn--primary" style={{ marginTop: 20 }}>Jetzt anrufen ☎</a>
          </div>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <span className="zvk-kicker">Auszahlungstermine 2026</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 24 }}>Quartalsweise auf Ihr Konto.</h2>
          <div className="quarters">
            {[
              { q: 'Q1', d: '31. März 2026' },
              { q: 'Q2', d: '30. Juni 2026' },
              { q: 'Q3', d: '30. September 2026' },
              { q: 'Q4', d: '22. Dezember 2026' },
            ].map((x, i) => (
              <div className="quarters__card" key={i}>
                <div className="quarters__q">{x.q}</div>
                <div className="quarters__d">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="aenderungen" className="zvk-section-sm" style={{ background: 'white', borderTop: '1px solid var(--zvk-line)', borderBottom: '1px solid var(--zvk-line)' }}>
        <div className="zvk-container">
          <span className="zvk-kicker">Änderungen melden</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 24 }}>Was möchten Sie uns mitteilen?</h2>
          <div className="zvk-grid zvk-grid-3">
            {[
              { t: 'Adresse ändern', d: 'Formular ausfüllen oder anrufen.', tel: '0761 · 123 45 · 30' },
              { t: 'Bankverbindung ändern', d: 'Aus Sicherheitsgründen nur schriftlich.', tel: '0761 · 123 45 · 30' },
              { t: 'Todesfall melden', d: 'Wir begleiten Angehörige behutsam.', tel: '0761 · 123 45 · 31' },
            ].map((x, i) => (
              <div className="zvk-card" key={i} style={{ padding: 26 }}>
                <div style={{ fontSize: 20, color: 'var(--zvk-tiefschwarz)', fontWeight: 500, marginBottom: 10 }}>{x.t}</div>
                <div style={{ fontSize: 15, color: 'var(--zvk-schiefer-800)', lineHeight: 1.55, marginBottom: 16 }}>{x.d}</div>
                <div style={{ fontFamily: 'var(--zvk-font-mono)', fontSize: 15, color: 'var(--zvk-tiefschwarz)', padding: '10px 0', borderTop: '1px solid var(--zvk-line)' }}>{x.tel}</div>
                <a href="#" style={{ fontSize: 13.5, color: 'var(--zvk-schiefergrau)', fontWeight: 500 }}>Formular herunterladen ↓</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MiniFaq cluster="Rentner" items={faqs} />
    </main>
  );
}
