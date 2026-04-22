import { Crumbs, PageHero } from '@/components/PageParts';
import { getGlobal } from '@/lib/globals';

export default async function DownloadsPage() {
  const g = await getGlobal('downloads');
  const hero = g?.hero ?? {};
  const groups: any[] = g?.groups ?? [];

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Service', href: '/service' }, { label: 'Downloads' }]} />
      <PageHero
        kicker={hero.kicker ?? 'Formulare & Dokumente'}
        title={hero.title ?? 'Downloads — nach Zielgruppe sortiert.'}
      />
      <section className="zvk-section-sm">
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {groups.map((grp: any, i: number) => (
            <div key={i} className="zvk-card" style={{ padding: 28 }}>
              <span className="zvk-kicker">{grp.label}</span>
              <div style={{ marginTop: 12 }}>
                {(grp.items ?? []).map((item: any, j: number) => (
                  <a key={j} href={item.url ?? '#'} className="dl-row">
                    <span>{item.title}{item.fileinfo ? ` (${item.fileinfo})` : ''}</span>
                    <span style={{ color: 'var(--zvk-schiefergrau)' }}>↓</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
