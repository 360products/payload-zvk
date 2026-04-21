import { Crumbs, PageHero } from '@/components/PageParts';

export default function MeldeportalPage() {
  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Service', href: '/service' }, { label: 'Meldeportal' }]} />
      <PageHero kicker="Für Betriebe" title="Meldeportal für Betriebe." lede="Lohnsummen und Mitarbeitermeldungen zentral, jederzeit, mobilfähig. Ab 2026 mit vereinfachtem Login und CSV-Upload." />
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
              <li>Lohnsummen-Meldung (manuell oder CSV)</li>
              <li>Mitarbeiter anlegen, ändern, ausmelden</li>
              <li>ZukunftStein für Angestellte aktivieren</li>
              <li>Rechnungen, Beitragsnachweise, Jahreslisten</li>
              <li>Mahn- und Zahlungshistorie</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
