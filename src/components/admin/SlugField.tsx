'use client';
import { useEffect, useRef } from 'react';
import { useField, useFormFields } from '@payloadcms/ui';

function slugify(text: string): string {
  return (text || '')
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9/]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function SlugField({ path, label, required }: any) {
  const { value: slug, setValue } = useField<string>({ path });
  // auto mode only when the slug is empty (= new document)
  const autoMode = useRef<boolean>(!slug);

  const titleValue = useFormFields(([fields]) => fields['title']?.value as string | undefined);

  useEffect(() => {
    if (autoMode.current && titleValue !== undefined) {
      setValue(slugify(titleValue));
    }
  }, [titleValue]);

  return (
    <div style={{ marginBottom: 24 }}>
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '.04em' }}>
        {label ?? 'URL-Pfad'}{required && <span style={{ color: '#e2474b', marginLeft: 4 }}>*</span>}
      </label>
      <input
        type="text"
        value={slug ?? ''}
        style={{
          width: '100%', padding: '8px 12px', border: '1px solid #333',
          borderRadius: 4, fontSize: 14, fontFamily: 'monospace',
          background: '#1b1b1b', color: '#fff', boxSizing: 'border-box',
        }}
        onChange={(e) => {
          autoMode.current = false;
          setValue(e.target.value);
        }}
        onBlur={(e) => {
          const clean = slugify(e.target.value);
          if (clean !== e.target.value) setValue(clean);
        }}
      />
      <p style={{ marginTop: 6, fontSize: 12, color: '#888', margin: '4px 0 0' }}>
        {autoMode.current
          ? 'Wird automatisch aus dem Titel generiert — kann überschrieben werden'
          : `Seite erreichbar unter: /${slug}`}
      </p>
    </div>
  );
}
