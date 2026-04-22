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
    display: 'flex', alignItems: 'center', gap: 6,
    padding: '6px 8px', overflow: 'hidden',
  } as React.CSSProperties,
  avatar: {
    width: 22, height: 22, borderRadius: '50%',
    background: '#B89868', flexShrink: 0,
  } as React.CSSProperties,
  lines: {
    display: 'flex', flexDirection: 'column' as const, gap: 3, flex: 1,
  } as React.CSSProperties,
  meta: { display: 'flex', flexDirection: 'column' as const, gap: 2 },
  name: { fontSize: 12, fontWeight: 600, color: '#e8e4dc', lineHeight: 1 },
  desc: { fontSize: 11, color: '#838582', lineHeight: 1.3 },
};

export default function ContactLabel({ data }: { data?: any }) {
  const person = data?.person || 'Ansprechpartner';
  return (
    <div style={S.wrap}>
      <div style={S.thumb}>
        <div style={S.avatar} />
        <div style={S.lines}>
          <div style={{ width: '80%', height: 3, background: '#e8e4dc', borderRadius: 1 }} />
          <div style={{ width: '60%', height: 2, background: '#49515C', borderRadius: 1 }} />
          <div style={{ width: '70%', height: 2, background: '#B89868', borderRadius: 1 }} />
        </div>
      </div>
      <div style={S.meta}>
        <span style={S.name}>Kontakt — {person}</span>
        <span style={S.desc}>Kontaktstreifen · Name · Telefon · E-Mail</span>
      </div>
    </div>
  );
}
