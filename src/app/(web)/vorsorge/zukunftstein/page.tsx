import Link from 'next/link';
import { Crumbs, ContactStrip } from '@/components/PageParts';
import ZukunftsteinCalc from '@/components/ZukunftsteinCalc';

export default function ZukunftsteinPage() {
  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Vorsorge', href: '/vorsorge/pflichtbeihilfe' }, { label: 'ZukunftStein' }]} />

      <section className="zs-hero">
        <div className="zvk-container zs-hero__grid">
          <div>
            <span className="zvk-kicker">Freiwillig · Zusatzrente</span>
            <h1 className="zvk-display zvk-display-xl" style={{ marginTop: 16 }}>ZukunftStein.<br />Freiwillig mehr vorsorgen.</h1>
            <p className="zvk-lede" style={{ marginTop: 18 }}>
              Mit ZukunftStein wandeln Sie Bruttolohn in zusätzliche Rente um — ohne Vertriebskosten,
              ohne Provisionsanteil. Für Angestellte, die mehr wollen. Und für Betriebe, die ein echtes
              Argument suchen.
            </p>
          </div>
          <div className="zvk-ph zvk-ph--warm zs-hero__img">Bildplatzhalter</div>
        </div>
      </section>

      <section className="zvk-section-sm" style={{ background: 'white', borderTop: '1px solid var(--zvk-line)', borderBottom: '1px solid var(--zvk-line)' }}>
        <div className="zvk-container">
          <span className="zvk-kicker">Rechenbeispiel</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 28 }}>Was kostet es Sie heute — was bringt es später?</h2>
          <ZukunftsteinCalc />
          <p style={{ fontSize: 12, color: 'var(--zvk-steingrau)', marginTop: 14, maxWidth: '60ch' }}>
            Unverbindliche Beispielrechnung, Steuerklasse IV, ohne Abgabenänderungen. Genaue Prognose im persönlichen Gespräch.
          </p>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <span className="zvk-kicker">Für Arbeitnehmer</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12 }}>So sprechen Sie Ihren Chef an.</h2>
            <p style={{ marginTop: 18, color: 'var(--zvk-schiefer-800)' }}>
              ZukunftStein muss vom Betrieb angeboten werden. Das ist kein Aufwand für Ihren Arbeitgeber —
              und kein Kostenpunkt. Hier ein kurzer Leitfaden für das Gespräch.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#" className="zvk-btn zvk-btn--primary">Leitfaden als PDF ↓</a>
              <a href="#" className="zvk-btn zvk-btn--ghost">Flyer zum Weitergeben</a>
            </div>
          </div>
          <div className="quote">
            <div style={{ fontSize: 48, color: 'var(--zvk-sandstein)', fontFamily: 'Georgia, serif', lineHeight: 1 }}>„</div>
            <p style={{ fontSize: 20, color: 'var(--zvk-tiefschwarz)', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.005em' }}>
              Ich habe meinen Chef einfach gefragt, ob er das anbieten kann. Es war weniger Aufwand als
              gedacht — und ich habe jetzt monatlich 80 € mehr fürs Alter.
            </p>
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="zvk-ph zvk-ph--warm" style={{ width: 40, height: 40, borderRadius: 4 }}>—</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--zvk-tiefschwarz)' }}>Thomas K.</div>
                <div style={{ fontSize: 12, color: 'var(--zvk-steingrau)' }}>Steinmetzgeselle · 34 Jahre</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zvk-section-sm" style={{ background: 'var(--zvk-schiefer-900)', color: 'white' }}>
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="zvk-kicker" style={{ color: 'var(--zvk-sandstein)' }}>Für Betriebe</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 300, letterSpacing: '-0.01em', marginTop: 12, color: 'white' }}>
              Warum sich Anbieten auszahlt.
            </h2>
          </div>
          <ul className="bullets bullets--light" style={{ fontSize: 16 }}>
            <li>Minimaler Verwaltungsaufwand — über das bekannte Meldeportal</li>
            <li>Attraktivitätsmerkmal im Wettbewerb um Fachkräfte</li>
            <li>Keine Kosten für den Betrieb, keine Versicherungspflicht</li>
            <li>Auf Wunsch mit AG-Zuschuss kombinierbar</li>
          </ul>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <span className="zvk-kicker">So kommen Sie rein</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 28 }}>In drei Schritten zum ZukunftStein.</h2>
          <div className="steps">
            {[
              { n: '01', t: 'Beratungstermin', d: 'Kostenlose Beratung durch unsere Spezialisten — telefonisch oder beim Betrieb.' },
              { n: '02', t: 'Abschluss über Betrieb', d: 'Der Arbeitgeber meldet Sie im Meldeportal an. Keine externen Formulare.' },
              { n: '03', t: 'Zahlung startet', d: 'Der gewählte Betrag wird direkt vom Bruttolohn abgeführt — ab dem Folgemonat.' },
            ].map((s, i) => (
              <div className="steps__item" key={i}>
                <div className="steps__n">{s.n}</div>
                <div className="steps__t">{s.t}</div>
                <div className="steps__d">{s.d}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/service/kontakt" className="zvk-btn zvk-btn--primary">Beratungstermin anfragen <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <ContactStrip group="ZukunftStein" person="Andrea Rockel" role="Beratung & Vertrieb Zusatzvorsorge" tel="0761 · 123 45 · 10" mail="zukunftstein@zvk-steinmetz.de" />
        </div>
      </section>
    </main>
  );
}
