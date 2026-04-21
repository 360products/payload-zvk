import { Crumbs, PageHero } from '@/components/PageParts';
import ContactForm from '@/components/ContactForm';

export default function KontaktPage() {
  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Service', href: '/service' }, { label: 'Kontakt' }]} />
      <PageHero kicker="So erreichen Sie uns" title="Wir sind persönlich erreichbar." lede="Telefon, Mail oder Termin vor Ort — wählen Sie den Weg, der Ihnen liegt." />
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
              {[
                ['Zentrale', '0761 · 123 45 · 00'],
                ['Betriebe / Meldungen', '0761 · 123 45 · 20'],
                ['Versicherte', '0761 · 123 45 · 40'],
                ['Rentenbezug', '0761 · 123 45 · 30'],
                ['ZukunftStein · Beratung', '0761 · 123 45 · 50'],
                ['Presse', '0761 · 123 45 · 80'],
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--zvk-line)' }}>
                  <span style={{ color: 'var(--zvk-schiefergrau)' }}>{r[0]}</span>
                  <span style={{ fontFamily: 'var(--zvk-font-mono)', color: 'var(--zvk-tiefschwarz)' }}>{r[1]}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, padding: 20, background: 'var(--zvk-sand-50)', borderRadius: 8 }}>
              <div className="zvk-kicker">Adresse</div>
              <div style={{ marginTop: 10, color: 'var(--zvk-tiefschwarz)', fontSize: 15, lineHeight: 1.6 }}>
                ZVK Steinmetz VVaG<br />
                Musterstraße 12<br />
                79098 Freiburg im Breisgau
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
