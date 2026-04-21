import { Crumbs, PageHero } from '@/components/PageParts';
import { findAll } from '@/lib/payload';

const FALLBACK = [
  { id: 'a', tag: 'Rentenanpassung', date: '04/2026', title: 'Beihilfe steigt zum 1. Juli auf 118 €/Monat' },
  { id: 'b', tag: 'Messe', date: '06/2026', title: 'ZVK auf der Stone-tec 2026 in Nürnberg' },
  { id: 'c', tag: 'Service', date: '03/2026', title: 'Neues Meldeportal — einfacher, mobilfähig, schneller' },
  { id: 'd', tag: 'ZukunftStein', date: '02/2026', title: 'Neue Tarife ab Q2 — bis zu 15 % mehr Leistung' },
  { id: 'e', tag: 'Transparenz', date: '01/2026', title: 'Jahresabschluss 2024 veröffentlicht' },
  { id: 'f', tag: 'BBW', date: '12/2025', title: 'Kooperation mit Berufsbildungswerk verlängert' },
];

function formatShortDate(d: string | Date) {
  const date = typeof d === 'string' ? new Date(d) : d;
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${m}/${date.getFullYear()}`;
}

export default async function NewsPage() {
  const cms = await findAll('news', { sort: '-publishedDate', where: { published: { equals: true } } });
  const news = cms.length > 0
    ? cms.map((n: any) => ({
        id: n.id,
        tag: n.tag,
        date: formatShortDate(n.publishedDate),
        title: n.title,
        image: n.image,
        slug: n.slug,
      }))
    : FALLBACK;

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'News & Aktuelles' }]} />
      <PageHero
        kicker="Aus der ZVK"
        title="News & Aktuelles."
        lede="Mitteilungen, Messetermine, Änderungen an Beiträgen und Leistungen — chronologisch."
      />
      <section className="zvk-section-sm">
        <div className="zvk-container">
          <div className="zvk-grid zvk-grid-3">
            {news.map((n: any) => (
              <a href={n.slug ? `/news/${n.slug}` : '#'} key={n.id} className="home-news__card">
                {n.image
                  ? <img className="home-news__img" src={n.image} alt={n.title} />
                  : <div className="zvk-ph home-news__img">Bild</div>
                }
                <div style={{ padding: '18px 2px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="zvk-tag">{n.tag}</span>
                    <span style={{ fontSize: 12, color: 'var(--zvk-steingrau)' }}>{n.date}</span>
                  </div>
                  <div style={{ fontSize: 19, marginTop: 14, color: 'var(--zvk-tiefschwarz)', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{n.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
