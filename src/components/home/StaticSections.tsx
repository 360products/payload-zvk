import Link from 'next/link';

function aiImg(prompt: string, opts: { w?: number; h?: number; seed?: number } = {}) {
  const { w = 1200, h = 900, seed = 7 } = opts;
  const p = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${p}?width=${w}&height=${h}&seed=${seed}&model=flux&nologo=true&enhance=true`;
}

export function Kpis() {
  const items = [
    { n: '16.000', l: 'Versicherte', s: 'in Betrieben in ganz Deutschland' },
    { n: '3.500', l: 'Rentner', s: 'beziehen jeden Monat Geld von uns' },
    { n: '116 €', l: 'Beihilfe pro Monat', s: 'Vollrente nach 360 Beitragsmonaten' },
    { n: '1970', l: 'Seit', s: 'vom Tarifvertrag festgeschrieben' },
  ];
  return (
    <section className="home-kpis">
      <div className="zvk-container">
        <div className="home-kpis__grid">
          {items.map((it, i) => (
            <div className="home-kpis__item" key={i}>
              <div className="home-kpis__n">{it.n}</div>
              <div className="home-kpis__l">{it.l}</div>
              <div className="home-kpis__s">{it.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Audiences() {
  const cards = [
    {
      kicker: '01 · Betrieb', title: 'Für Betriebe',
      text: 'Lohnsummen melden, neue Mitarbeiter anmelden, Beiträge im Blick halten — alles, was Sie jeden Monat brauchen.',
      link: '/fuer-betriebe', top: 'Direkt ins Meldeportal', tone: 'warm',
    },
    {
      kicker: '02 · Steinmetz:in', title: 'Für Versicherte',
      text: 'Was steht Ihnen zu, wenn Sie einmal aufhören? Und wie holen Sie mit ZukunftStein noch mehr raus?',
      link: '/fuer-versicherte', top: 'Meinen Rentenbescheid verstehen', tone: 'sand',
    },
    {
      kicker: '03 · Im Ruhestand', title: 'Für Rentner',
      text: 'Auszahlung, Bescheide, Adressänderungen. Große Schrift, echte Durchwahl — kein Kleingedrucktes.',
      link: '/fuer-rentner', top: 'Änderung melden', tone: 'schiefer',
    },
  ];
  return (
    <section className="zvk-section home-aud">
      <div className="zvk-container">
        <div className="home-aud__head">
          <span className="zvk-kicker">Wofür sind Sie hier?</span>
          <h2 className="zvk-display zvk-display-md" style={{ marginTop: 14 }}>Drei Wege in die ZVK.</h2>
        </div>
        <div className="home-aud__grid">
          {cards.map((c, i) => (
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
  );
}

export function Services() {
  const items = [
    { icon: '↗', title: 'Meldeportal', text: 'Monatliche Lohnmeldung und Mitarbeiter-An- und Abmeldung online.', link: '/service/meldeportal' },
    { icon: '?', title: 'Fragen & Antworten', text: 'Häufige Fragen — sortiert nach Betrieb, Versicherten und Rentnern.', link: '/service/faq' },
    { icon: '⤓', title: 'Formulare', text: 'Anmeldebogen, Beitrittserklärung, Merkblätter. Zum Ausdrucken.', link: '/service/downloads' },
    { icon: '☎', title: 'Ansprechpartner', text: 'Echte Menschen mit Durchwahl — keine Warteschlangen, kein Bandsalat.', link: '/service/kontakt' },
  ];
  return (
    <section className="zvk-section-sm home-svc">
      <div className="zvk-container">
        <div className="home-svc__head">
          <span className="zvk-kicker">Schnell erledigt</span>
          <h2 className="zvk-display zvk-display-md" style={{ marginTop: 14 }}>Was brauchen Sie heute?</h2>
        </div>
        <div className="home-svc__grid">
          {items.map((it, i) => (
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
  );
}

export function ZukunftStein() {
  const img = aiImg(
    'close-up macro of weathered natural sandstone surface, soft directional side light, warm beige and ochre tones, subtle chisel marks, texture photography, editorial, no text',
    { w: 1000, h: 800, seed: 12 }
  );
  return (
    <section className="zvk-section home-zs">
      <div className="zvk-container home-zs__grid">
        <div className="home-zs__visual">
          <img className="home-zs__img" src={img} alt="Naturstein-Oberfläche" />
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
            Mehr rausholen — direkt vom Lohn.
          </h2>
          <p className="zvk-lede" style={{ marginTop: 20 }}>
            Neben der Pflicht-Beihilfe, die der Betrieb für Sie einzahlt, können Sie
            selbst noch etwas drauflegen — direkt aus dem Bruttolohn, über Ihren Betrieb.
            Das Finanzamt und die Sozialkasse sind erstmal draußen.
          </p>
          <ul className="home-zs__list">
            <li><span>✓</span> Zahlt der Betrieb direkt vom Lohn ein — kein Papierkram für Sie</li>
            <li><span>✓</span> Steuer- und sozialabgabenfrei bis zur Beitragsbemessungsgrenze</li>
            <li><span>✓</span> Die ZVK gehört den Betrieben selbst — kein Konzern dahinter</li>
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
  );
}
