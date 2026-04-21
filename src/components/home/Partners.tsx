import { findAll } from '@/lib/payload';

const FALLBACK_PARTNERS = [
  { short: 'BBW', name: 'Berufsbildungswerk', tag: 'Aus- & Weiterbildung', description: 'Aus- und Weiterbildung für das Handwerk — hier kommt der Nachwuchs auf Meister- und Fachniveau.', url: 'https://www.bbw-steinmetz.de', host: 'bbw-steinmetz.de', order: 1, id: 'a' },
  { short: 'BIV', name: 'Bundesinnungsverband', tag: 'Bundesverband', description: 'Vertritt das Steinmetz- und Steinbildhauerhandwerk gegenüber Politik und Öffentlichkeit.', url: 'https://www.biv-steinmetz.de', host: 'biv-steinmetz.de', order: 2, id: 'b' },
  { short: 'IG BAU', name: 'IG Bauen-Agrar-Umwelt', tag: 'Gewerkschaft', description: 'Vertritt die Beschäftigten im Bau- und Steinmetzhandwerk — Tarifverträge und Arbeitsrecht.', url: 'https://www.igbau.de', host: 'igbau.de', order: 3, id: 'c' },
  { short: 'Unikat', name: 'Naturstein-Unikat', tag: 'Initiative', description: 'Setzt sich für das handwerklich gefertigte Grabmal aus Naturstein ein — gegen Import-Massenware.', url: 'https://www.naturstein-unikat.de', host: 'naturstein-unikat.de', order: 4, id: 'd' },
];

export default async function Partners() {
  const cms = await findAll('partners', { sort: 'order' });
  const partners = cms.length > 0 ? cms : FALLBACK_PARTNERS;

  return (
    <section className="zvk-section home-partners">
      <div className="zvk-container">
        <div className="home-partners__head">
          <div>
            <span className="zvk-kicker" style={{ color: 'var(--zvk-sandstein)' }}>Wer noch mit dabei ist</span>
            <h2 className="zvk-display zvk-display-lg" style={{ marginTop: 14, color: 'white' }}>
              Partner im Handwerk.
            </h2>
          </div>
          <p className="home-partners__lede">
            Die ZVK steht nicht allein. Mit diesen Organisationen arbeiten wir eng zusammen —
            für Ausbildung, Tarifverträge, Interessenvertretung und Qualität am Naturstein.
          </p>
        </div>

        <div className="home-partners__grid">
          {partners.map((p: any) => (
            <a key={p.id || p.short} href={p.url} target="_blank" rel="noopener" className="home-partners__card">
              <div className="home-partners__mark">
                <span>{p.short}</span>
              </div>
              <div className="home-partners__tag">{p.tag}</div>
              <div className="home-partners__name">{p.name}</div>
              <p className="home-partners__desc">{p.description}</p>
              <div className="home-partners__link">
                {p.host} <span className="arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
