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
    justifyContent: 'center', gap: 4, padding: '6px 8px',
    overflow: 'hidden',
  } as React.CSSProperties,
  meta: { display: 'flex', flexDirection: 'column' as const, gap: 2 },
  name: { fontSize: 12, fontWeight: 600, color: '#e8e4dc', lineHeight: 1 },
  desc: { fontSize: 11, color: '#838582', lineHeight: 1.3 },
  line: (w: number, dark?: boolean) => ({
    height: 3, width: `${w}%`, borderRadius: 1,
    background: dark ? '#30363F' : '#CFC7B5',
  }),
};

export default function TextLabel({ data }: { data?: any }) {
  const title = data?.title || 'Text-Block';
  return (
    <div style={S.wrap}>
      <div style={S.thumb}>
        <div style={S.line(45, true)} />
        <div style={S.line(80)} />
        <div style={S.line(95)} />
        <div style={S.line(88)} />
        <div style={S.line(60)} />
      </div>
      <div style={S.meta}>
        <span style={S.name}>Text — {title || 'Freitext'}</span>
        <span style={S.desc}>Rich-Text · Kicker · Überschrift · Schmal / Breit</span>
      </div>
    </div>
  );
}
