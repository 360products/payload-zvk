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
    justifyContent: 'center', gap: 1, padding: '5px 8px',
    overflow: 'hidden',
  } as React.CSSProperties,
  row: {
    display: 'flex', alignItems: 'center', gap: 4,
    padding: '2px 0', borderBottom: '1px solid #E6E1D6',
  } as React.CSSProperties,
  meta: { display: 'flex', flexDirection: 'column' as const, gap: 2 },
  name: { fontSize: 12, fontWeight: 600, color: '#e8e4dc', lineHeight: 1 },
  desc: { fontSize: 11, color: '#838582', lineHeight: 1.3 },
};

const DocIcon = () => (
  <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
    <rect x="0" y="0" width="6" height="8" rx="1" fill="#BCAC93" />
    <path d="M5 0 L8 3 L5 3 Z" fill="#9A8B73" />
  </svg>
);

export default function DownloadsLabel({ data }: { data?: any }) {
  const count = data?.items?.length ?? 3;
  const visible = Math.min(count, 3);
  return (
    <div style={S.wrap}>
      <div style={S.thumb}>
        {Array.from({ length: visible }).map((_, i) => (
          <div key={i} style={S.row}>
            <DocIcon />
            <div style={{ flex: 1, height: 3, background: '#30363F', borderRadius: 1 }} />
            <div style={{ fontSize: 8, color: '#B89868', fontWeight: 700, lineHeight: 1 }}>↓</div>
          </div>
        ))}
      </div>
      <div style={S.meta}>
        <span style={S.name}>Downloads — {count} Datei{count !== 1 ? 'en' : ''}</span>
        <span style={S.desc}>Download-Liste · Dateiname · Typ · Link</span>
      </div>
    </div>
  );
}
