import Link from 'next/link';
import { findAll } from '@/lib/payload';

function aiImg(prompt: string, opts: { w?: number; h?: number; seed?: number } = {}) {
  const { w = 900, h = 600, seed = 7 } = opts;
  const p = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${p}?width=${w}&height=${h}&seed=${seed}&model=flux&nologo=true&enhance=true`;
}

const FALLBACK_NEWS = [
  { id: 'a', title: 'Beihilfe steigt auf 118 € pro Monat', tag: 'Zum 1. Juli', publishedDate: '2026-04-01', image: null, slug: 'beihilfe-anpassung-2026', prompt: 'stack of euro banknotes on a wooden workshop table with stone dust, warm natural light, documentary photography, muted earth tones, no text', seed: 51 },
  { id: 'b', title: 'Treffen Sie uns auf der Stone-tec in Nürnberg', tag: 'Messe', publishedDate: '2026-06-01', image: null, slug: 'stone-tec-2026', prompt: 'large trade fair hall with booths for stone and masonry industry, natural stone sculpture on display, warm lighting, photography, no text', seed: 52 },
  { id: 'c', title: 'Meldeportal neu — einfacher, auch vom Handy', tag: 'Neu', publishedDate: '2026-03-01', image: null, slug: 'meldeportal-relaunch', prompt: 'hands of craftsman holding a smartphone showing a simple web form, workshop background slightly blurred, natural warm light, documentary photography, no text', seed: 53 },
];

function formatDate(d: string | Date) {
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
}

export default async function News() {
  const cmsNews = await findAll('news', { sort: '-publishedDate', limit: 3, where: { published: { equals: true } } });
  const news = cmsNews.length > 0 ? cmsNews : FALLBACK_NEWS;

  return (
    <section className="zvk-section-sm home-news">
      <div className="zvk-container">
        <div className="home-news__head">
          <div>
            <span className="zvk-kicker">Aus der ZVK</span>
            <h2 className="zvk-display zvk-display-md" style={{ marginTop: 14 }}>Was gerade läuft.</h2>
          </div>
          <Link href="/news" className="zvk-btn zvk-btn--ghost">Alle Neuigkeiten <span className="arrow">→</span></Link>
        </div>
        <div className="home-news__grid">
          {news.map((n: any) => {
            const imgUrl = n.image || aiImg(n.prompt || 'workshop scene, warm natural light, documentary photography', { seed: n.seed || 50 });
            const href = n.slug ? `/news/${n.slug}` : '/news';
            return (
              <Link href={href} key={n.id} className="home-news__card">
                <img className="home-news__img" src={imgUrl} alt={n.title} />
                <div style={{ padding: '20px 2px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="zvk-tag">{n.tag}</span>
                    <span style={{ fontSize: 12, color: 'var(--zvk-steingrau)' }}>{formatDate(n.publishedDate)}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--zvk-font-serif)', fontSize: 22, marginTop: 16, color: 'var(--zvk-tiefschwarz)', fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.2 }}>{n.title}</div>
                  <div style={{ marginTop: 16, fontSize: 13, color: 'var(--zvk-schiefergrau)', fontWeight: 600, letterSpacing: '.02em' }}>Mehr lesen →</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
