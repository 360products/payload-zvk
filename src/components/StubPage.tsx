import Link from 'next/link';

type Crumb = { label: string; href?: string };

export default function StubPage({
  title,
  kicker = 'In Arbeit',
  crumbs = [],
  lede = 'Diese Seite wird gerade aufgebaut — Inhalte kommen als nächstes aus dem CMS.',
}: {
  title: string;
  kicker?: string;
  crumbs?: Crumb[];
  lede?: string;
}) {
  return (
    <main className="zvk-page">
      {crumbs.length > 0 && (
        <div className="zvk-container">
          <div className="zvk-crumbs">
            {crumbs.map((c, i) => (
              <span key={i}>
                {i > 0 && <span>›</span>}
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="current">{c.label}</span>}
              </span>
            ))}
          </div>
        </div>
      )}
      <section className="zvk-phero">
        <div className="zvk-container">
          <div className="zvk-phero__kicker">{kicker}</div>
          <h1>{title}</h1>
          {lede && <p>{lede}</p>}
        </div>
      </section>
      <section className="zvk-section-sm">
        <div className="zvk-container">
          <div className="zvk-card" style={{ padding: 40, textAlign: 'center', color: 'var(--zvk-steingrau)' }}>
            Platzhalter · Seite wird als nächstes gebaut
          </div>
        </div>
      </section>
    </main>
  );
}
