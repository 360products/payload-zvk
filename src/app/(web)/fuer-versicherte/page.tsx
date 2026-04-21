import Link from 'next/link';
import { Crumbs, PageHero, ContactStrip } from '@/components/PageParts';
import MiniFaq from '@/components/MiniFaq';
import { getFaqsByCluster } from '@/lib/faq-fallback';

export default async function VersichertePage() {
  const faqs = await getFaqsByCluster('Versicherte');

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Für Versicherte' }]} />
      <PageHero
        kicker="Für Angestellte im Steinmetzhandwerk"
        title="Ihre Rente ist schon auf dem Weg."
        lede="Sie arbeiten in einem Steinmetzbetrieb? Dann sind Sie über uns bereits zusätzlich versichert — ohne einen einzigen Antrag. Hier erfahren Sie, was Sie haben und wie Sie mit ZukunftStein mehr herausholen."
      >
        <Link href="/vorsorge/zukunftstein" className="zvk-btn zvk-btn--primary">ZukunftStein prüfen <span className="arrow">→</span></Link>
        <Link href="#renteninfo" className="zvk-btn zvk-btn--secondary">Renteninformation verstehen</Link>
      </PageHero>

      <section className="zvk-section-sm">
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="zvk-kicker">Automatisch · Pflichtbeihilfe</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12 }}>Das bekommen Sie — ohne etwas dafür zu tun.</h2>
            <ul className="bullets">
              <li><b>116 € monatlich</b> als Vollrente — nach 360 Beitragsmonaten</li>
              <li><b>Quartalsweise ausgezahlt</b> ab Renteneintritt, auf Ihr Konto</li>
              <li><b>Keine Beiträge von Ihnen</b> — der Betrieb zahlt ein</li>
              <li><b>Bleibt bestehen</b>, auch bei Betriebswechsel innerhalb der Branche</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <Link href="/vorsorge/pflichtbeihilfe" className="zvk-btn zvk-btn--ghost">Wie funktioniert das genau? <span className="arrow">→</span></Link>
            </div>
          </div>
          <div className="zvk-ph home-hero__img" style={{ aspectRatio: '4/5', borderRadius: 'var(--zvk-radius-xl)' }}>Bild · Angestellter im Betrieb</div>
        </div>
      </section>

      <section className="zvk-section-sm" style={{ background: 'white', borderTop: '1px solid var(--zvk-line)', borderBottom: '1px solid var(--zvk-line)' }}>
        <div className="zvk-container">
          <span className="zvk-kicker">Ihre Lebenssituation</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 28 }}>Was passiert, wenn sich etwas ändert?</h2>
          <div className="zvk-grid zvk-grid-4">
            {[
              { t: 'Jobwechsel', d: 'Beiträge bleiben. Solange der neue Arbeitgeber im Handwerk ist.' },
              { t: 'Krankheit', d: 'Bei Krankengeld läuft Ihr Anspruch weiter — melden Sie uns den Bezug.' },
              { t: 'Elternzeit', d: 'Bis zu 3 Jahre anrechenbar. Für jedes Kind separat geprüft.' },
              { t: 'Umzug / Ausland', d: 'Adressänderung bitte melden. Auszahlung ins EU-Ausland möglich.' },
            ].map((x, i) => (
              <div className="zvk-card" key={i} style={{ padding: 22, minHeight: 160 }}>
                <div style={{ fontSize: 16, color: 'var(--zvk-tiefschwarz)', fontWeight: 500, marginBottom: 8 }}>{x.t}</div>
                <div style={{ fontSize: 14, color: 'var(--zvk-schiefer-800)', lineHeight: 1.55 }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="renteninfo" className="zvk-section-sm">
        <div className="zvk-container">
          <span className="zvk-kicker">Ihre Renteninformation</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 28 }}>Das Schreiben, das jährlich bei Ihnen ankommt.</h2>
          <div className="letter">
            <div className="letter__paper">
              <div className="letter__head">
                <span>ZVK Steinmetz</span>
                <span>Renteninformation 2026</span>
              </div>
              <div className="letter__body">
                <div className="letter__row"><span>Beitragsmonate bisher</span><b>144</b></div>
                <div className="letter__row letter__row--mark" data-mark="A"><span>Anwartschaft aktueller Stand</span><b>46,40 €/Monat</b></div>
                <div className="letter__row"><span>Prognose bei 360 Monaten</span><b>116,00 €/Monat</b></div>
                <div className="letter__row letter__row--mark" data-mark="B"><span>Voraussichtlicher Rentenbeginn</span><b>01.08.2042</b></div>
              </div>
            </div>
            <div className="letter__marks">
              <div><span>A</span><div><b>Anwartschaft</b><p>Was Sie heute schon „im Topf" haben — basiert auf Ihren Beitragsmonaten.</p></div></div>
              <div><span>B</span><div><b>Rentenbeginn</b><p>Wir rechnen mit Ihrer Regelaltersgrenze. Flexible Varianten auf Anfrage.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <ContactStrip group="Versicherte" person="Jonas Weber" role="Beiträge, Anwartschaften" tel="0761 · 123 45 · 30" mail="versicherte@zvk-steinmetz.de" />
        </div>
      </section>

      <MiniFaq cluster="Versicherte" items={faqs} />
    </main>
  );
}
