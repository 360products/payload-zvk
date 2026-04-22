import { Crumbs, PageHero } from '@/components/PageParts';
import { getGlobal } from '@/lib/globals';

export default async function MeldeportalPage() {
  const g = await getGlobal('meldeportal');
  const hero = g?.hero ?? {};
  const features: any[] = g?.features ?? [];

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Service', href: '/service' }, { label: 'Meldeportal' }]} />
      <PageHero
        kicker={hero.kicker ?? 'Für Betriebe'}
        title={hero.title ?? 'Meldeportal für Betriebe.'}
        lede={hero.lede ?? ''}
      />
      <section className="zvk-section-sm">
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="zvk-kicker">Login</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 20 }}>Anmeldung für Betriebe</h2>
            <div className="login">
              <label>Mitgliedsnummer</label>
              <input type="text" placeholder="z. B. 100-12345" />
              <label>Passwort</label>
              <input type="password" placeholder="••••••••" />
              <button className="zvk-btn zvk-btn--primary" style={{ marginTop: 18, width: '100%', justifyContent: 'center' }}>Anmelden</button>
              <div style={{ fontSize: 13, color: 'var(--zvk-steingrau)', marginTop: 14, display: 'flex', justifyContent: 'space-between' }}>
                <a href="#">Passwort vergessen?</a>
                <a href="#">Erstanmeldung</a>
              </div>
            </div>
          </div>
          <div>
            <span className="zvk-kicker">Das finden Sie im Portal</span>
            <ul className="bullets" style={{ marginTop: 16 }}>
              {features.map((f: any, i: number) => <li key={i}>{f.text}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
