import Link from 'next/link';
import { Crumbs, PageHero } from '@/components/PageParts';

export default function VergleichPage() {
  const rows = [
    ['Pflicht oder freiwillig?', 'Pflicht (tarifvertraglich)', 'Freiwillig'],
    ['Wer zahlt?', 'Arbeitgeber', 'Arbeitnehmer (Bruttoumwandlung)'],
    ['Für Arbeitnehmer kostet', '0 €', '~ 62 % vom Bruttobetrag netto'],
    ['Zusätzliche Rente', 'Bis 116 €/Monat Vollrente', 'Abhängig vom Einzahlungsbetrag'],
    ['Abschluss nötig', 'Nein — automatisch', 'Ja, über den Betrieb'],
    ['Vertriebskosten', 'Keine', 'Keine'],
    ['Aufsicht', 'BaFin', 'BaFin'],
  ];
  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Vorsorge', href: '/vorsorge/pflichtbeihilfe' }, { label: 'Vergleich' }]} />
      <PageHero kicker="Vorsorge · Vergleich" title="Pflichtbeihilfe & ZukunftStein — im Vergleich." lede="Beides ist ZVK. Beides ist non-profit. Aber eben nicht dasselbe — hier die wichtigsten Unterschiede nebeneinander." />
      <section className="zvk-section-sm">
        <div className="zvk-container">
          <table className="compare">
            <thead>
              <tr><th></th><th>Pflichtbeihilfe</th><th>ZukunftStein</th></tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="compare__k">{r[0]}</td>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
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
