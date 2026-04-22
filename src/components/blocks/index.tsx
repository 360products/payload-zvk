import Link from 'next/link';
import { ContactStrip, PageHero } from '@/components/PageParts';
import RichText from '@/components/RichText';

function HeroBlockRenderer({ kicker, title, lede, ctas }: any) {
  return (
    <PageHero kicker={kicker} title={title} lede={lede}>
      {(ctas ?? []).map((cta: any, i: number) => (
        <Link key={i} href={cta.href} className={`zvk-btn zvk-btn--${cta.variant ?? 'primary'}`}>
          {cta.label} {cta.variant !== 'secondary' && <span className="arrow">→</span>}
        </Link>
      ))}
    </PageHero>
  );
}

function TextBlockRenderer({ kicker, title, body, columns }: any) {
  return (
    <section className="zvk-section-sm">
      <div className="zvk-container">
        <div style={{ maxWidth: columns === 'narrow' ? '68ch' : undefined }}>
          {kicker && <span className="zvk-kicker">{kicker}</span>}
          {title && <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 20 }}>{title}</h2>}
          {body && (
            <div style={{ color: 'var(--zvk-schiefer-800)', lineHeight: 1.7 }}>
              <RichText data={body} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CardsBlockRenderer({ kicker, title, columns = '3', cards }: any) {
  return (
    <section className="zvk-section-sm">
      <div className="zvk-container">
        {kicker && <span className="zvk-kicker">{kicker}</span>}
        {title && <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 24 }}>{title}</h2>}
        <div className={`zvk-grid zvk-grid-${columns}`}>
          {(cards ?? []).map((card: any, i: number) =>
            card.href ? (
              <Link key={i} href={card.href} className="zvk-card zvk-card--link" style={{ padding: 24 }}>
                <div style={{ fontSize: 17, color: 'var(--zvk-tiefschwarz)', fontWeight: 500, marginBottom: 10 }}>{card.title}</div>
                {card.text && <div style={{ fontSize: 14, color: 'var(--zvk-schiefer-800)', lineHeight: 1.6 }}>{card.text}</div>}
                <div style={{ marginTop: 16, fontSize: 13, color: 'var(--zvk-schiefergrau)', fontWeight: 600 }}>→</div>
              </Link>
            ) : (
              <div key={i} className="zvk-card" style={{ padding: 24 }}>
                <div style={{ fontSize: 17, color: 'var(--zvk-tiefschwarz)', fontWeight: 500, marginBottom: 10 }}>{card.title}</div>
                {card.text && <div style={{ fontSize: 14, color: 'var(--zvk-schiefer-800)', lineHeight: 1.6 }}>{card.text}</div>}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function StepsBlockRenderer({ kicker, title, steps }: any) {
  return (
    <section className="zvk-section-sm">
      <div className="zvk-container">
        {kicker && <span className="zvk-kicker">{kicker}</span>}
        {title && <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 32 }}>{title}</h2>}
        <div className="steps">
          {(steps ?? []).map((s: any, i: number) => (
            <div className="steps__item" key={i}>
              <div className="steps__n">{String(i + 1).padStart(2, '0')}</div>
              <div className="steps__t">{s.t}</div>
              {s.d && <div className="steps__d">{s.d}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBlockRenderer({ group, person, role, tel, mail }: any) {
  return (
    <section className="zvk-section-sm">
      <div className="zvk-container">
        <ContactStrip group={group} person={person} role={role} tel={tel} mail={mail} />
      </div>
    </section>
  );
}

function DownloadsBlockRenderer({ kicker, title, items }: any) {
  return (
    <section className="zvk-section-sm">
      <div className="zvk-container">
        {kicker && <span className="zvk-kicker">{kicker}</span>}
        {title && <h2 className="zvk-stitle" style={{ marginTop: 12, marginBottom: 20 }}>{title}</h2>}
        <div className="zvk-card" style={{ padding: 28 }}>
          {(items ?? []).map((item: any, i: number) => (
            <a key={i} href={item.url ?? '#'} className="dl-row">
              <span>{item.title}{item.fileinfo ? ` (${item.fileinfo})` : ''}</span>
              <span style={{ color: 'var(--zvk-schiefergrau)' }}>↓</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const RENDERERS: Record<string, React.ComponentType<any>> = {
  hero: HeroBlockRenderer,
  text: TextBlockRenderer,
  cards: CardsBlockRenderer,
  steps: StepsBlockRenderer,
  contact: ContactBlockRenderer,
  downloads: DownloadsBlockRenderer,
};

export default function RenderBlocks({ blocks }: { blocks: any[] }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((block, i) => {
        const Renderer = RENDERERS[block.blockType];
        if (!Renderer) return null;
        return <Renderer key={block.id ?? i} {...block} />;
      })}
    </>
  );
}
