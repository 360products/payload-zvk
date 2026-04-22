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
    padding: '5px 6px', gap: 4, overflow: 'hidden',
  } as React.CSSProperties,
  heading: {
    width: 40, height: 3, background: '#30363F', borderRadius: 1,
  } as React.CSSProperties,
  grid: {
    display: 'flex', gap: 3, flex: 1,
  } as React.CSSProperties,
  card: {
    flex: 1, background: '#fff', border: '1px solid #E6E1D6',
    borderRadius: 2, padding: 3, display: 'flex',
    flexDirection: 'column' as const, gap: 2,
  } as React.CSSProperties,
  meta: { display: 'flex', flexDirection: 'column' as const, gap: 2 },
  name: { fontSize: 12, fontWeight: 600, color: '#e8e4dc', lineHeight: 1 },
  desc: { fontSize: 11, color: '#838582', lineHeight: 1.3 },
};

export default function CardsLabel({ data }: { data?: any }) {
  const cols = Number(data?.columns ?? 3);
  const count = Math.min(cols, 4);
  return (
    <div style={S.wrap}>
      <div style={S.thumb}>
        <div style={S.heading} />
        <div style={S.grid}>
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} style={S.card}>
              <div style={{ width: '70%', height: 3, background: '#49515C', borderRadius: 1 }} />
              <div style={{ width: '90%', height: 2, background: '#CFC7B5', borderRadius: 1 }} />
              <div style={{ width: '60%', height: 2, background: '#CFC7B5', borderRadius: 1 }} />
            </div>
          ))}
        </div>
      </div>
      <div style={S.meta}>
        <span style={S.name}>Karten-Raster — {cols} Spalten</span>
        <span style={S.desc}>{data?.cards?.length ?? 0} Karte{(data?.cards?.length ?? 0) !== 1 ? 'n' : ''} · anklickbar oder statisch</span>
      </div>
    </div>
  );
}
