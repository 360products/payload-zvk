import Link from 'next/link';
import { findAll } from '@/lib/payload';

function aiImg(prompt: string, opts: { w?: number; h?: number; seed?: number } = {}) {
  const { w = 600, h = 800, seed = 7 } = opts;
  const p = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${p}?width=${w}&height=${h}&seed=${seed}&model=flux&nologo=true&enhance=true`;
}

const FALLBACK_TEAM = [
  { name: 'Andrea Rockel', role: 'Geschäftsführerin', phone: '0761 · 123 45 · 10', photo: null, id: 'a', order: 1 },
  { name: 'Markus Mathes', role: 'Vorstand', phone: '0761 · 123 45 · 11', photo: null, id: 'b', order: 2 },
  { name: 'Petra Kaiser', role: 'Betriebe & Meldeportal', phone: '0761 · 123 45 · 20', photo: null, id: 'c', order: 3 },
  { name: 'Jonas Weber', role: 'Rentenbezug', phone: '0761 · 123 45 · 30', photo: null, id: 'd', order: 4 },
];

export default async function People() {
  const cmsTeam = await findAll('team', { sort: 'order', limit: 4 });
  const team = cmsTeam.length > 0 ? cmsTeam.slice(0, 4) : FALLBACK_TEAM;

  return (
    <section className="zvk-section home-people">
      <div className="zvk-container">
        <div className="home-people__head">
          <div>
            <span className="zvk-kicker">Keine Warteschleife</span>
            <h2 className="zvk-display zvk-display-md" style={{ marginTop: 14 }}>Menschen, die rangehen.</h2>
          </div>
          <Link href="/ueber-uns#team" className="zvk-btn zvk-btn--ghost">Ganzes Team ansehen <span className="arrow">→</span></Link>
        </div>
        <div className="home-people__grid">
          {team.map((p: any, i: number) => {
            const photoUrl = p.photo || aiImg(
              'portrait photo of a friendly german office worker at desk, natural light, warm neutral background, professional but approachable, documentary style, shallow depth of field, no text',
              { seed: 21 + i }
            );
            return (
              <div className="home-people__card" key={p.id || i}>
                <img className="home-people__photo" src={photoUrl} alt={p.name} />
                <div style={{ padding: '18px 2px 2px' }}>
                  <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--zvk-sand-600)', fontWeight: 600 }}>{p.role}</div>
                  <div style={{ fontFamily: 'var(--zvk-font-serif)', fontSize: 22, marginTop: 6, color: 'var(--zvk-tiefschwarz)', fontWeight: 400, letterSpacing: '-0.01em' }}>{p.name}</div>
                  {p.phone && <div style={{ fontSize: 13, marginTop: 8, color: 'var(--zvk-steingrau)', fontFamily: 'var(--zvk-font-mono)' }}>{p.phone}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
