import Link from 'next/link';

function aiImg(prompt: string, opts: { w?: number; h?: number; seed?: number } = {}) {
  const { w = 1200, h = 900, seed = 7 } = opts;
  const p = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${p}?width=${w}&height=${h}&seed=${seed}&model=flux&nologo=true&enhance=true`;
}

export default function Hero() {
  const heroImg = aiImg(
    'german stonemason at work in workshop, hands shaping natural sandstone with chisel, warm afternoon light through dusty window, documentary photography, muted earth tones, sandstone beige and slate grey, shallow depth of field, editorial, calm and dignified, no text, no logo',
    { w: 1200, h: 1500, seed: 41 }
  );
  return (
    <section className="home-hero">
      <div className="zvk-container home-hero__grid">
        <div className="home-hero__text">
          <span className="zvk-kicker">Zusatzrente fürs Steinmetzhandwerk</span>
          <h1 className="zvk-display zvk-display-xl" style={{ marginTop: 20 }}>
            Sicher in den<br />Ruhestand.
          </h1>
          <p className="zvk-lede" style={{ marginTop: 24 }}>
            Wir sind die Zusatzkasse für alle, die im Steinmetz- und Steinbildhauer&shy;handwerk
            arbeiten. Ihr Betrieb zahlt ein, Sie bekommen später Rente dazu.
            Einfach, tarifvertraglich geregelt, seit 1970.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Link href="/fuer-betriebe" className="zvk-btn zvk-btn--primary">
              Ich führe einen Betrieb <span className="arrow">→</span>
            </Link>
            <Link href="/fuer-versicherte" className="zvk-btn zvk-btn--secondary">
              Ich bin Steinmetz:in
            </Link>
          </div>
        </div>
        <div className="home-hero__visual">
          <img className="home-hero__img" src={heroImg} alt="Steinmetz bei der Arbeit am Werkstein" />
          <div className="home-hero__sticker">
            <div className="zvk-kicker zvk-kicker--plain" style={{ color: 'white', opacity: .75 }}>Seit 55 Jahren</div>
            <div style={{ marginTop: 6, fontSize: 19, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.25 }}>Getragen von<br />den Betrieben selbst.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
