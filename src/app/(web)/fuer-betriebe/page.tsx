import Link from 'next/link';
import { Crumbs, PageHero, ContactStrip } from '@/components/PageParts';
import MiniFaq from '@/components/MiniFaq';
import { getFaqsByCluster } from '@/lib/faq-fallback';
import { getGlobal } from '@/lib/globals';

export default async function BetriebePage() {
  const [faqs, g] = await Promise.all([
    getFaqsByCluster('Betriebe'),
    getGlobal('betriebe'),
  ]);

  const hero = g?.hero ?? {};
  const steps: any[] = g?.steps ?? [];
  const fristen = g?.fristen ?? {};
  const beitraege: any[] = g?.beitraege ?? [];
  const materials: any[] = g?.materials ?? [];
  const contact = g?.contact ?? {};

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Für Betriebe' }]} />
      <PageHero
        kicker={hero.kicker ?? 'Für Arbeitgeber im Steinmetzhandwerk'}
        title={hero.title ?? 'Das System, das für Ihr Team vorsorgt — automatisch.'}
        lede={hero.lede ?? ''}
      >
        <Link href="/service/meldeportal" className="zvk-btn zvk-btn--primary">Zum Meldeportal <span className="arrow">→</span></Link>
        <Link href="/service/kontakt" className="zvk-btn zvk-btn--secondary">Kontakt Betriebe</Link>
      </PageHero>

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <span className="zvk-kicker">Das System in 3 Schritten</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 32 }}>So läuft das jeden Monat.</h2>
          <div className="steps">
            {steps.map((s: any, i: number) => (
              <div className="steps__item" key={i}>
                <div className="steps__n">{s.n}</div>
                <div className="steps__t">{s.t}</div>
                <div className="steps__d">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="zvk-section-sm" style={{ background: 'white', borderTop: '1px solid var(--zvk-line)', borderBottom: '1px solid var(--zvk-line)' }}>
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="zvk-kicker">Ihr monatlicher Ablauf</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12 }}>{fristen.title ?? 'Fristen, die Sie nicht vergessen dürfen.'}</h2>
            <p style={{ marginTop: 18, color: 'var(--zvk-schiefer-800)', maxWidth: '52ch' }}>
              {fristen.lede ?? ''}
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/service/meldeportal" className="zvk-btn zvk-btn--primary">Jetzt melden</Link>
              <Link href="/service/faq" className="zvk-btn zvk-btn--ghost">FAQ zu Fristen</Link>
            </div>
          </div>
          <div className="cal">
            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d) => <div className="cal__h" key={d}>{d}</div>)}
            {Array.from({ length: 35 }).map((_, i) => {
              const day = i - 2;
              const isDeadline = day === 15;
              return (
                <div className={'cal__d' + (isDeadline ? ' cal__d--mark' : '') + (day < 1 || day > 31 ? ' cal__d--mute' : '')} key={i}>
                  {day > 0 && day < 32 ? day : ''}
                  {isDeadline && <span className="cal__tag">Frist</span>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <span className="zvk-kicker">Beiträge & Lohnsummen</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 24 }}>In Klartext, nicht in AVB-Sprache.</h2>
          <div className="zvk-grid zvk-grid-2">
            {beitraege.map((x: any, i: number) => (
              <div className="zvk-card" key={i} style={{ padding: 24 }}>
                <div style={{ fontSize: 18, color: 'var(--zvk-tiefschwarz)', fontWeight: 500, marginBottom: 8 }}>{x.t}</div>
                <div style={{ fontSize: 14.5, color: 'var(--zvk-schiefer-800)', lineHeight: 1.6 }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="zvk-section-sm" style={{ background: 'var(--zvk-sand-50)' }}>
        <div className="zvk-container">
          <span className="zvk-kicker">Material für Ihre Mitarbeiter</span>
          <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 24 }}>Zum Weitergeben in der Werkstatt.</h2>
          <div className="zvk-grid zvk-grid-3">
            {materials.map((m: any, i: number) => (
              <a key={i} href="#" className="zvk-card zvk-card--link" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 160 }}>
                <div className="zvk-ph" style={{ aspectRatio: '16/10', borderRadius: 4 }}>Preview</div>
                <div style={{ fontSize: 15, color: 'var(--zvk-tiefschwarz)', fontWeight: 500 }}>{m.t}</div>
                <div style={{ fontSize: 12, color: 'var(--zvk-steingrau)', marginTop: 'auto' }}>{m.f} · herunterladen ↓</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <div className="teaser">
            <div>
              <span className="zvk-kicker">ZukunftStein anbieten</span>
              <h3 className="zvk-display zvk-display-sm" style={{ marginTop: 10 }}>Machen Sie sich als Arbeitgeber attraktiver.</h3>
              <p style={{ marginTop: 14, color: 'var(--zvk-schiefer-800)', maxWidth: '52ch' }}>
                Mit ZukunftStein bieten Sie Ihren Angestellten freiwillige Entgeltumwandlung — ohne Verwaltungsaufwand, ohne Provision.
              </p>
            </div>
            <Link href="/vorsorge/zukunftstein" className="zvk-btn zvk-btn--primary">ZukunftStein im Detail <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      <section className="zvk-section-sm">
        <div className="zvk-container">
          <ContactStrip
            group="Betriebe"
            person={contact.person ?? 'Petra Kaiser'}
            role={contact.role ?? 'Meldungen, Beitragsfragen'}
            tel={contact.tel ?? '0761 · 123 45 · 20'}
            mail={contact.mail ?? 'betriebe@zvk-steinmetz.de'}
          />
        </div>
      </section>

      <MiniFaq cluster="Betriebe" items={faqs} />
    </main>
  );
}
