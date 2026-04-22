import { getGlobal } from '@/lib/globals';
import { findAll } from '@/lib/payload';
import Link from 'next/link';
import People from '@/components/home/People';
import News from '@/components/home/News';
import Partners from '@/components/home/Partners';

function aiImg(prompt: string, opts: { w?: number; h?: number; seed?: number } = {}) {
  const { w = 1200, h = 900, seed = 7 } = opts;
  const p = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${p}?width=${w}&height=${h}&seed=${seed}&model=flux&nologo=true&enhance=true`;
}

export default async function HomePage() {
  const g = await getGlobal('home');
  const hero = g?.hero ?? {};
  const kpis: any[] = g?.kpis ?? [];
  const audiences: any[] = g?.audiences ?? [];
  const services: any[] = g?.services ?? [];
  const zs = g?.zukunftstein ?? {};

  const heroImg = aiImg(
    'german stonemason at work in workshop, hands shaping natural sandstone with chisel, warm afternoon light through dusty window, documentary photography, muted earth tones, sandstone beige and slate grey, shallow depth of field, editorial, calm and dignified, no text, no logo',
    { w: 1200, h: 1500, seed: 41 }
  );
  const zsImg = aiImg(
    'close-up macro of weathered natural sandstone surface, soft directional side light, warm beige and ochre tones, subtle chisel marks, texture photography, editorial, no text',
    { w: 1000, h: 800, seed: 12 }
  );

  return (
    <main className="zvk-page">
      {/* Hero */}
      <section className="home-hero">
        <div className="zvk-container home-hero__grid">
          <div className="home-hero__text">
            <span className="zvk-kicker">{hero.kicker ?? 'Zusatzrente fürs Steinmetzhandwerk'}</span>
            <h1 className="zvk-display zvk-display-xl" style={{ marginTop: 20 }}>
              {(hero.title ?? 'Sicher in den\nRuhestand.').split('\n').map((line: string, i: number) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p className="zvk-lede" style={{ marginTop: 24 }}>
              {hero.lede ?? 'Wir sind die Zusatzkasse für alle, die im Steinmetz- und Steinbildhauerhandwerk arbeiten.'}
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <Link href="/fuer-betriebe" className="zvk-btn zvk-btn--primary">
                {hero.cta1 ?? 'Ich führe einen Betrieb'} <span className="arrow">→</span>
              </Link>
              <Link href="/fuer-versicherte" className="zvk-btn zvk-btn--secondary">
                {hero.cta2 ?? 'Ich bin Steinmetz:in'}
              </Link>
            </div>
          </div>
          <div className="home-hero__visual">
            <img className="home-hero__img" src={heroImg} alt="Steinmetz bei der Arbeit am Werkstein" />
            <div className="home-hero__sticker">
              <div className="zvk-kicker zvk-kicker--plain" style={{ color: 'white', opacity: .75 }}>{hero.stickerLine1 ?? 'Seit 55 Jahren'}</div>
              <div style={{ marginTop: 6, fontSize: 19, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.25 }}>{hero.stickerLine2 ?? 'Getragen von den Betrieben selbst.'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="home-kpis">
        <div className="zvk-container">
          <div className="home-kpis__grid">
            {kpis.map((it: any, i: number) => (
              <div className="home-kpis__item" key={i}>
                <div className="home-kpis__n">{it.n}</div>
                <div className="home-kpis__l">{it.l}</div>
                <div className="home-kpis__s">{it.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="zvk-section home-aud">
        <div className="zvk-container">
          <div className="home-aud__head">
            <span className="zvk-kicker">Wofür sind Sie hier?</span>
            <h2 className="zvk-display zvk-display-md" style={{ marginTop: 14 }}>Drei Wege in die ZVK.</h2>
          </div>
          <div className="home-aud__grid">
            {audiences.map((c: any, i: number) => (
              <Link href={c.link} key={i} className={'home-aud__card home-aud__card--' + c.tone}>
                <div>
                  <span className="zvk-kicker">{c.kicker}</span>
                  <h3 className="home-aud__title">{c.title}</h3>
                  <p className="home-aud__text">{c.text}</p>
                </div>
                <div className="home-aud__foot">
                  <span className="home-aud__top">Top: {c.top}</span>
                  <span className="home-aud__arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="zvk-section-sm home-svc">
        <div className="zvk-container">
          <div className="home-svc__head">
            <span className="zvk-kicker">Schnell erledigt</span>
            <h2 className="zvk-display zvk-display-md" style={{ marginTop: 14 }}>Was brauchen Sie heute?</h2>
          </div>
          <div className="home-svc__grid">
            {services.map((it: any, i: number) => (
              <Link href={it.link} key={i} className="home-svc__card zvk-card zvk-card--link">
                <div className="home-svc__icon">{it.icon}</div>
                <div className="home-svc__title">{it.title}</div>
                <div className="home-svc__text">{it.text}</div>
                <div className="home-svc__arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ZukunftStein */}
      <section className="zvk-section home-zs">
        <div className="zvk-container home-zs__grid">
          <div className="home-zs__visual">
            <img className="home-zs__img" src={zsImg} alt="Naturstein-Oberfläche" />
            <div className="home-zs__badge">
              <span className="zvk-kicker" style={{ color: 'var(--zvk-sand-600)' }}>So sieht das aus</span>
              <div className="home-zs__calc">
                <div><b>100 €</b><span>vom Brutto jeden Monat</span></div>
                <div className="home-zs__arrow">→</div>
                <div><b>~ 62 €</b><span>spüren Sie wirklich</span></div>
              </div>
            </div>
          </div>
          <div className="home-zs__text">
            <span className="zvk-kicker">ZukunftStein</span>
            <h2 className="zvk-display zvk-display-lg" style={{ marginTop: 14 }}>
              {zs.title ?? 'Mehr rausholen — direkt vom Lohn.'}
            </h2>
            <p className="zvk-lede" style={{ marginTop: 20 }}>
              {zs.lede ?? ''}
            </p>
            <ul className="home-zs__list">
              {(zs.bullets ?? []).map((b: any, i: number) => (
                <li key={i}><span>✓</span> {b.text}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <Link href="/vorsorge/zukunftstein" className="zvk-btn zvk-btn--primary">
                Wie ZukunftStein funktioniert <span className="arrow">→</span>
              </Link>
              <Link href="/vorsorge/vergleich" className="zvk-btn zvk-btn--ghost">
                Pflicht- & Zusatzrente im Vergleich
              </Link>
            </div>
          </div>
        </div>
      </section>

      <People />
      <News />
      <Partners />
    </main>
  );
}
