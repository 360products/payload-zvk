'use client';
import React from 'react';

const S = {
  wrap: {
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '6px 0', width: '100%',
  } as React.CSSProperties,
  thumb: {
    flexShrink: 0, width: 80, height: 44, borderRadius: 4,
    background: '#FAF8F3', border: '1px solid #E6E1D6',
    display: 'flex', flexDirection: 'column' as const,
    justifyContent: 'center', gap: 5, padding: '4px 8px',
    overflow: 'hidden',
  } as React.CSSProperties,
  row: {
    display: 'flex', alignItems: 'center', gap: 5,
  } as React.CSSProperties,
  num: {
    width: 12, height: 12, borderRadius: '50%',
    background: '#B89868', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 6, color: '#fff', fontWeight: 700,
  } as React.CSSProperties,
  meta: { display: 'flex', flexDirection: 'column' as const, gap: 2 },
  name: { fontSize: 12, fontWeight: 600, color: '#e8e4dc', lineHeight: 1 },
  desc: { fontSize: 11, color: '#838582', lineHeight: 1.3 },
};

export default function StepsLabel({ data }: { data?: any }) {
  const count = data?.steps?.length ?? 3;
  const visible = Math.min(count, 3);
  return (
    <div style={S.wrap}>
      <div style={S.thumb}>
        {Array.from({ length: visible }).map((_, i) => (
          <div key={i} style={S.row}>
            <div style={S.num}>{i + 1}</div>
            <div style={{ height: 3, background: '#30363F', borderRadius: 1, flex: 1 }} />
          </div>
        ))}
      </div>
      <div style={S.meta}>
        <span style={S.name}>Schritte — {count} Schritt{count !== 1 ? 'e' : ''}</span>
        <span style={S.desc}>Nummerierte Prozess-Liste · Kicker · Titel</span>
      </div>
    </div>
  );
}
