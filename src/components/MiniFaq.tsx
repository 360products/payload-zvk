'use client';

import Link from 'next/link';
import { useState } from 'react';
import RichText, { plainText } from './RichText';

export type FaqItem = { question: string; answer: any };

export default function MiniFaq({ cluster, items }: { cluster: string; items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  const data = items.slice(0, 4);
  if (!data.length) return null;

  return (
    <section className="zvk-section-sm">
      <div className="zvk-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <span className="zvk-kicker">Häufige Fragen · {cluster}</span>
            <h2 className="zvk-stitle" style={{ marginTop: 12 }}>Die Top-Fragen auf einen Blick.</h2>
          </div>
          <Link href="/service/faq" className="zvk-btn zvk-btn--ghost">Alle Fragen <span className="arrow">→</span></Link>
        </div>
        <div className="faq-list">
          {data.map((f, i) => (
            <div className={'faq-item' + (open === i ? ' is-open' : '')} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.question}</span>
                <span className="faq-plus">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="faq-a">
                  {typeof f.answer === 'string' ? f.answer : <RichText data={f.answer} />}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
