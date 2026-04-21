'use client';

import { useState, useMemo } from 'react';
import RichText, { plainText } from './RichText';

type FaqItem = { question: string; answer: any };
type FaqData = Record<string, FaqItem[]>;

export default function FaqClient({ data }: { data: FaqData }) {
  const clusters = Object.keys(data);
  const [cluster, setCluster] = useState(clusters[0] || 'Betriebe');
  const [q, setQ] = useState('');
  const [openIdx, setOpenIdx] = useState(0);

  const filtered = useMemo(() => {
    const items = data[cluster] || [];
    if (!q) return items;
    const qq = q.toLowerCase();
    return items.filter((it) =>
      it.question.toLowerCase().includes(qq) ||
      plainText(it.answer).toLowerCase().includes(qq)
    );
  }, [cluster, q, data]);

  return (
    <>
      <div className="faq-controls">
        <div className="faq-tabs">
          {clusters.map((c) => (
            <button
              key={c}
              className={'faq-tab' + (cluster === c ? ' is-active' : '')}
              onClick={() => { setCluster(c); setOpenIdx(0); }}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          className="faq-search"
          type="search"
          placeholder="In allen FAQ suchen…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="faq-list">
        {filtered.length === 0 && (
          <div style={{ padding: 40, color: 'var(--zvk-steingrau)', textAlign: 'center' }}>
            Keine Treffer. Probieren Sie einen anderen Suchbegriff.
          </div>
        )}
        {filtered.map((it, i) => (
          <div className={'faq-item' + (openIdx === i ? ' is-open' : '')} key={i}>
            <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
              <span>{it.question}</span>
              <span className="faq-plus">{openIdx === i ? '−' : '+'}</span>
            </button>
            {openIdx === i && (
              <div className="faq-a">
                {typeof it.answer === 'string' ? it.answer : <RichText data={it.answer} />}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
