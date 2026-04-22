'use client';
import React from 'react';

const S = {
  wrap: {
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '6px 0', width: '100%',
  } as React.CSSProperties,
  thumb: {
    flexShrink: 0, width: 80, height: 44, borderRadius: 4,
    background: '#1C2026', border: '1px solid #30363F',
    display: 'flex', flexDirection: 'column' as const,
    alignItems: 'center', justifyContent: 'center', gap: 4, padding: 6,
    overflow: 'hidden',
  } as React.CSSProperties,
  kicker: {
    width: 28, height: 2, background: '#B89868', borderRadius: 1,
  } as React.CSSProperties,
  title: {
    width: 52, height: 5, background: '#e8e4dc', borderRadius: 2,
  } as React.CSSProperties,
  sub: {
    width: 44, height: 3, background: '#49515C', borderRadius: 1,
  } as React.CSSProperties,
  btn: {
    width: 28, height: 8, background: '#49515C', borderRadius: 2,
  } as React.CSSProperties,
  meta: { display: 'flex', flexDirection: 'column' as const, gap: 2 },
  name: { fontSize: 12, fontWeight: 600, color: '#e8e4dc', lineHeight: 1 },
  desc: { fontSize: 11, color: '#838582', lineHeight: 1.3 },
};

export default function HeroLabel({ data }: { data?: any }) {
  const title = data?.title || 'Hero-Block';
  return (
    <div style={S.wrap}>
      <div style={S.thumb}>
        <div style={S.kicker} />
        <div style={S.title} />
        <div style={S.sub} />
        <div style={{ display: 'flex', gap: 4, marginTop: 2 }}>
          <div style={S.btn} />
          <div style={{ ...S.btn, background: 'transparent', border: '1px solid #49515C' }} />
        </div>
      </div>
      <div style={S.meta}>
        <span style={S.name}>Hero — {title}</span>
        <span style={S.desc}>Vollbreite-Banner · Kicker · Titel · Buttons</span>
      </div>
    </div>
  );
}
