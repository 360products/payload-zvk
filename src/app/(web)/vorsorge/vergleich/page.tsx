import Link from 'next/link';
import { Crumbs, PageHero } from '@/components/PageParts';
import { getGlobal } from '@/lib/globals';

export default async function VergleichPage() {
  const g = await getGlobal('vergleich');
  const hero = g?.hero ?? {};
  const rows: any[] = g?.rows ?? [];

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Vorsorge', href: '/vorsorge/pflichtbeihilfe' }, { label: 'Vergleich' }]} />
      <PageHero
        kicker={hero.kicker ?? 'Vorsorge · Vergleich'}
        title={hero.title ?? 'Pflichtbeihilfe & ZukunftStein — im Vergleich.'}
        lede={hero.lede ?? ''}
      />
      <section className="zvk-section-sm">
        <div className="zvk-container">
          <table className="compare">
            <thead>
              <tr><th></th><th>Pflichtbeihilfe</th><th>ZukunftStein</th></tr>
            </thead>
            <tbody>
              {rows.map((r: any, i: number) => (
                <tr key={i}>
                  <td className="compare__k">{r.key}</td>
                  <td>{r.pflicht}</td>
                  <td>{r.zukunft}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <Link href="/vorsorge/pflichtbeihilfe" className="zvk-btn zvk-btn--secondary">Zur Pflichtbeihilfe</Link>
            <Link href="/vorsorge/zukunftstein" className="zvk-btn zvk-btn--primary">Zu ZukunftStein <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
