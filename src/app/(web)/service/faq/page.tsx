import { Crumbs, PageHero } from '@/components/PageParts';
import FaqClient from '@/components/FaqClient';
import { getFaqsByCluster } from '@/lib/faq-fallback';

export default async function FaqPage() {
  const [betriebe, versicherte, rentner] = await Promise.all([
    getFaqsByCluster('Betriebe'),
    getFaqsByCluster('Versicherte'),
    getFaqsByCluster('Rentner'),
  ]);

  const data = {
    Betriebe: betriebe,
    Versicherte: versicherte,
    Rentner: rentner,
  };

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: 'Service', href: '/service' }, { label: 'FAQ / ZVK A–Z' }]} />
      <PageHero
        kicker="Wissen · FAQ & ZVK A–Z"
        title="Antworten — geclustert nach Zielgruppe."
        lede="Wählen Sie unten, ob Sie Arbeitgeber, Versicherte:r oder Rentner:in sind. Alternativ suchen Sie direkt."
      />
      <section className="zvk-section-sm">
        <div className="zvk-container">
          <FaqClient data={data} />
        </div>
      </section>
    </main>
  );
}
