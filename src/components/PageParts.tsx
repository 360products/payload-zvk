import Link from 'next/link';

export type Crumb = { label: string; href?: string };

export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="zvk-container">
      <div className="zvk-crumbs">
        {items.map((it, i) => (
          <span key={i}>
            {i > 0 && <span>›</span>}
            {it.href ? <Link href={it.href}>{it.label}</Link> : <span className="current">{it.label}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="zvk-phero">
      <div className="zvk-container">
        <div className="zvk-phero__kicker">{kicker}</div>
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
        {children && <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>{children}</div>}
      </div>
    </section>
  );
}

export function ContactStrip({
  group = 'Allgemein',
  person = 'Petra Kaiser',
  role = 'Betriebe & Meldeportal',
  tel = '0761 · 123 45 · 20',
  mail = 'kontakt@zvk-steinmetz.de',
}: {
  group?: string;
  person?: string;
  role?: string;
  tel?: string;
  mail?: string;
}) {
  return (
    <div className="cs">
      <div className="zvk-ph zvk-ph--schiefer cs__photo">Foto</div>
      <div style={{ flex: 1 }}>
        <div className="zvk-kicker">Ihr Ansprechpartner · {group}</div>
        <div style={{ fontSize: 22, color: 'var(--zvk-tiefschwarz)', fontWeight: 500, marginTop: 6, letterSpacing: '-0.01em' }}>{person}</div>
        <div style={{ fontSize: 14, color: 'var(--zvk-steingrau)', marginTop: 2 }}>{role}</div>
      </div>
      <div className="cs__contact">
        <a href={'tel:' + tel.replace(/\s|·/g, '')} className="zvk-btn zvk-btn--primary">☎ {tel}</a>
        <a href={'mailto:' + mail} className="zvk-btn zvk-btn--secondary">E-Mail schreiben</a>
      </div>
    </div>
  );
}
