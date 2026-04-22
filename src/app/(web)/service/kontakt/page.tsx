import { Crumbs, PageHero } from '@/components/PageParts';
import ContactForm from '@/components/ContactForm';
import { getGlobal } from '@/lib/globals';

export default async function KontaktPage() {
  const g = await getGlobal('kontakt');
  const hero = g?.hero ?? {};
  const phones: any[] = g?.phones ?? [];
  const address: string = g?.address ?? 'ZVK Steinmetz VVaG\nMusterstraße 12\n79098 Freiburg im Breisgau';

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Service', href: '/service' }, { label: 'Kontakt' }]} />
      <PageHero
        kicker={hero.kicker ?? 'So erreichen Sie uns'}
        title={hero.title ?? 'Wir sind persönlich erreichbar.'}
        lede={hero.lede ?? ''}
      />
      <section className="zvk-section-sm">
        <div className="zvk-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <span className="zvk-kicker">Schreiben Sie uns</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 20 }}>Kontaktformular</h2>
            <ContactForm />
          </div>
          <div>
            <span className="zvk-kicker">Durchwahlen</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 20 }}>Direkt zum richtigen Ansprechpartner.</h2>
            <div className="zvk-grid" style={{ gap: 12 }}>
              {phones.map((p: any, i: number) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--zvk-line)' }}>
                  <span style={{ color: 'var(--zvk-schiefergrau)' }}>{p.label}</span>
                  <span style={{ fontFamily: 'var(--zvk-font-mono)', color: 'var(--zvk-tiefschwarz)' }}>{p.number}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, padding: 20, background: 'var(--zvk-sand-50)', borderRadius: 8 }}>
              <div className="zvk-kicker">Adresse</div>
              <div style={{ marginTop: 10, color: 'var(--zvk-tiefschwarz)', fontSize: 15, lineHeight: 1.6 }}>
                {address.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
