export default function Home() {
  return (
    <main style={{ padding: '48px', fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '40px auto' }}>
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>ZVK Steinmetz — Payload CMS</h1>
      <p style={{ color: '#555', lineHeight: 1.6, fontSize: 17 }}>
        Das CMS-Backend läuft. Verwalte Inhalte über die Admin-UI:
      </p>
      <a
        href="/admin"
        style={{
          display: 'inline-block',
          marginTop: 24,
          padding: '14px 24px',
          background: '#49515C',
          color: 'white',
          borderRadius: 4,
          textDecoration: 'none',
          fontWeight: 500,
        }}
      >
        → Admin öffnen
      </a>
      <h2 style={{ fontSize: 20, marginTop: 48, marginBottom: 12 }}>API-Endpoints</h2>
      <ul style={{ color: '#555', lineHeight: 1.8 }}>
        <li><code>GET /api/pages</code></li>
        <li><code>GET /api/news</code></li>
        <li><code>GET /api/team</code></li>
        <li><code>GET /api/partners</code></li>
        <li><code>GET /api/faq</code></li>
        <li><code>GET /api/settings</code></li>
      </ul>
    </main>
  );
}
