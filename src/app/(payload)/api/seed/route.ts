import config from '@payload-config';
import { getPayload } from 'payload';
import { NextRequest, NextResponse } from 'next/server';

function para(text: string) {
  return {
    root: {
      children: [{ children: [{ detail: 0, format: 0, mode: 'normal', style: '', text, type: 'text', version: 1 }], direction: 'ltr', format: '', indent: 0, type: 'paragraph', version: 1 }],
      direction: 'ltr', format: '', indent: 0, type: 'root', version: 1,
    },
  };
}

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const validSecrets = [process.env.ADMIN_RESET_TOKEN, process.env.PAYLOAD_SECRET].filter(Boolean);
  if (!secret || !validSecrets.includes(secret)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await getPayload({ config });
  const created: Record<string, number> = {};

  // ── NEWS ──────────────────────────────────────────────────────────────
  const newsItems = [
    { title: 'Beihilfe steigt zum 1. Juli auf 118 €/Monat', slug: 'beihilfe-anpassung-2026', tag: 'Rentenanpassung', publishedDate: '2026-04-01', published: true, excerpt: 'Der tariflich festgelegte Betrag der Pflichtbeihilfe wird zum 1. Juli 2026 auf 118 Euro im Monat angehoben. Versicherte profitieren automatisch — kein Antrag erforderlich.' },
    { title: 'ZVK auf der Stone-tec 2026 in Nürnberg', slug: 'stone-tec-2026', tag: 'Messe', publishedDate: '2026-06-01', published: true, excerpt: 'Besuchen Sie uns in Nürnberg: Die ZVK Steinmetz ist auf der Stone-tec 2026 mit eigenem Stand vertreten. Persönliche Beratung und Infomaterial zu Pflichtbeihilfe und ZukunftStein.' },
    { title: 'Neues Meldeportal — einfacher, mobilfähig, schneller', slug: 'meldeportal-relaunch', tag: 'Service', publishedDate: '2026-03-01', published: true, excerpt: 'Das überarbeitete Meldeportal für Betriebe ist live. Lohnsummenmeldungen können jetzt auch vom Smartphone erledigt werden — inklusive CSV-Upload und vereinfachtem Login.' },
    { title: 'Neue Tarife ab Q2 — bis zu 15 % mehr Leistung', slug: 'neue-tarife-q2-2026', tag: 'ZukunftStein', publishedDate: '2026-02-01', published: true, excerpt: 'Die freiwillige Zusatzvorsorge ZukunftStein bekommt ab dem zweiten Quartal verbesserte Leistungsparameter. Bestehende Verträge werden automatisch angepasst.' },
    { title: 'Jahresabschluss 2024 veröffentlicht', slug: 'jahresabschluss-2024', tag: 'Transparenz', publishedDate: '2026-01-01', published: true, excerpt: 'Der testierte Jahresabschluss 2024 steht im Downloadbereich zur Verfügung. Die ZVK schließt das Geschäftsjahr solide ab — Kapitalanlage und Reserven plangemäß.' },
    { title: 'Kooperation mit Berufsbildungswerk verlängert', slug: 'bbw-kooperation-2025', tag: 'BBW', publishedDate: '2025-12-01', published: true, excerpt: 'Die ZVK Steinmetz und das Berufsbildungswerk des Steinmetz- und Steinbildhauerhandwerks verlängern ihre Kooperationsvereinbarung um weitere fünf Jahre.' },
  ];

  created.news = 0;
  for (const item of newsItems) {
    const existing = await payload.find({ collection: 'news', where: { slug: { equals: item.slug } } });
    if (existing.docs.length === 0) {
      await payload.create({ collection: 'news', data: item });
      created.news++;
    }
  }

  // ── TEAM ──────────────────────────────────────────────────────────────
  const teamMembers = [
    { name: 'Andrea Rockel', role: 'Geschäftsführerin', phone: '0761 · 123 45 · 10', order: 1 },
    { name: 'Markus Mathes', role: 'Vorstand', phone: '0761 · 123 45 · 11', order: 2 },
    { name: 'Carsten Mayer', role: 'Vorstand', phone: '0761 · 123 45 · 12', order: 3 },
    { name: 'Petra Kaiser', role: 'Betriebe & Meldeportal', phone: '0761 · 123 45 · 20', order: 4 },
    { name: 'Jonas Weber', role: 'Rentenbezug', phone: '0761 · 123 45 · 30', order: 5 },
    { name: 'Sabine Lehmann', role: 'Versicherte', phone: '0761 · 123 45 · 40', order: 6 },
    { name: 'Klaus Hoffmann', role: 'ZukunftStein · Beratung', phone: '0761 · 123 45 · 50', order: 7 },
    { name: 'Lina Becker', role: 'Finanzen & IT', phone: '0761 · 123 45 · 60', order: 8 },
  ];

  created.team = 0;
  for (const member of teamMembers) {
    const existing = await payload.find({ collection: 'team', where: { name: { equals: member.name } } });
    if (existing.docs.length === 0) {
      await payload.create({ collection: 'team', data: member });
      created.team++;
    }
  }

  // ── PARTNERS ──────────────────────────────────────────────────────────
  const partnerItems = [
    { name: 'Berufsbildungswerk des Steinmetz- und Steinbildhauerhandwerks', short: 'BBW', tag: 'Aus- & Weiterbildung', description: 'Aus- und Weiterbildung für das Handwerk — hier kommt der Nachwuchs auf Meister- und Fachniveau.', url: 'https://www.bbw-steinmetz.de', host: 'bbw-steinmetz.de', order: 1 },
    { name: 'Bundesinnungsverband des Deutschen Steinmetz- und Steinbildhauerhandwerks', short: 'BIV', tag: 'Bundesverband', description: 'Vertritt das Steinmetz- und Steinbildhauerhandwerk gegenüber Politik und Öffentlichkeit.', url: 'https://www.biv-steinmetz.de', host: 'biv-steinmetz.de', order: 2 },
    { name: 'IG Bauen-Agrar-Umwelt', short: 'IG BAU', tag: 'Gewerkschaft', description: 'Vertritt die Beschäftigten im Bau- und Steinmetzhandwerk — Tarifverträge und Arbeitsrecht.', url: 'https://www.igbau.de', host: 'igbau.de', order: 3 },
    { name: 'Naturstein-Unikat', short: 'Unikat', tag: 'Initiative', description: 'Setzt sich für das handwerklich gefertigte Grabmal aus Naturstein ein — gegen Import-Massenware.', url: 'https://www.naturstein-unikat.de', host: 'naturstein-unikat.de', order: 4 },
  ];

  created.partners = 0;
  for (const partner of partnerItems) {
    const existing = await payload.find({ collection: 'partners', where: { short: { equals: partner.short } } });
    if (existing.docs.length === 0) {
      await payload.create({ collection: 'partners', data: partner });
      created.partners++;
    }
  }

  // ── FAQ ───────────────────────────────────────────────────────────────
  const faqItems = [
    // Betriebe
    { cluster: 'Betriebe', order: 1, published: true, question: 'Wie melde ich monatlich meine Lohnsummen?', answer: para('Über das Meldeportal — bis zum 15. des Folgemonats. Sie können die Summe direkt eingeben oder per CSV-Upload hochladen.') },
    { cluster: 'Betriebe', order: 2, published: true, question: 'Wer zahlt die Beiträge — ich oder mein Mitarbeiter?', answer: para('Der Arbeitgeber. Arbeitnehmer zahlen nichts aus eigener Tasche (außer sie wählen freiwillig ZukunftStein).') },
    { cluster: 'Betriebe', order: 3, published: true, question: 'Ich bin Ein-Mann-Betrieb — was gilt für mich?', answer: para('Derzeit ist die ZVK nur für Betriebe mit Angestellten relevant. Ein Produkt für Selbstständige ist in Prüfung.') },
    { cluster: 'Betriebe', order: 4, published: true, question: 'Was passiert, wenn ich nicht zahle?', answer: para('Mahnlauf, Säumniszuschläge und ggf. gerichtliche Geltendmachung — wir sind ein Pflichtsystem.') },
    { cluster: 'Betriebe', order: 5, published: true, question: 'Wie melde ich einen neuen Mitarbeiter an?', answer: para('Im Meldeportal unter „Mitarbeiter · Neu". Erforderlich sind Name, Geburtsdatum und SV-Nummer.') },
    { cluster: 'Betriebe', order: 6, published: true, question: 'Kann ich ZukunftStein anbieten — und was habe ich davon?', answer: para('Ja. Attraktivitätsmerkmal im Fachkräftewettbewerb, minimaler Aufwand.') },
    // Versicherte
    { cluster: 'Versicherte', order: 1, published: true, question: 'Bin ich automatisch versichert?', answer: para('Ja, sobald Sie in einem Steinmetzbetrieb angestellt sind. Kein Antrag nötig.') },
    { cluster: 'Versicherte', order: 2, published: true, question: 'Wie viel Rente bekomme ich später?', answer: para('Bis zu 116 €/Monat als Vollrente nach 360 Beitragsmonaten. Ihr aktueller Stand steht in der jährlichen Renteninformation.') },
    { cluster: 'Versicherte', order: 3, published: true, question: 'Was ist mit meinen Beiträgen, wenn ich den Job wechsle?', answer: para('Sie bleiben erhalten. Bei einem Wechsel innerhalb der Branche zahlen Sie einfach weiter.') },
    { cluster: 'Versicherte', order: 4, published: true, question: 'Elternzeit, Krankheit, Auslandsaufenthalt — was passiert?', answer: para('Krankengeldbezug und bis zu 3 Jahre Elternzeit werden anerkannt. Auslandsarbeit wird individuell geprüft.') },
    { cluster: 'Versicherte', order: 5, published: true, question: 'Kann ich selbst mehr einzahlen?', answer: para('Über ZukunftStein — per Entgeltumwandlung aus dem Bruttolohn. Ansprache über Ihren Betrieb.') },
    { cluster: 'Versicherte', order: 6, published: true, question: 'Wann und wie beantrage ich meine Rente?', answer: para('Etwa 3 Monate vor Renteneintritt — schriftlich oder telefonisch. Wir schicken Ihnen alle Unterlagen rechtzeitig.') },
    // Rentner
    { cluster: 'Rentner', order: 1, published: true, question: 'Wann wird ausgezahlt?', answer: para('Quartalsweise, jeweils zum Quartalsende (31. März, 30. Juni, 30. September, 31. Dezember).') },
    { cluster: 'Rentner', order: 2, published: true, question: 'Wie ändere ich meine Bankverbindung?', answer: para('Aus Sicherheitsgründen nur schriftlich — Formular online oder per Post. Änderungen bis zum 15. eines Monats werden im Folgemonat wirksam.') },
    { cluster: 'Rentner', order: 3, published: true, question: 'Was bedeuten die Zahlen in meinem Bescheid?', answer: para('Die wichtigsten Felder sind auf der Rentner-Seite erklärt — mit Visualisierung.') },
    { cluster: 'Rentner', order: 4, published: true, question: 'Ich bin umgezogen — was muss ich tun?', answer: para('Einfach anrufen oder das Adressformular nutzen. Die Auszahlung läuft ohne Unterbrechung weiter.') },
    { cluster: 'Rentner', order: 5, published: true, question: 'Muss ich meine Rente versteuern?', answer: para('Ja, wie jede Leistung aus der betrieblichen Altersvorsorge. Details klären wir mit Ihrem Steuerberater.') },
  ];

  created.faq = 0;
  for (const item of faqItems) {
    const existing = await payload.find({ collection: 'faq', where: { question: { equals: item.question } } });
    if (existing.docs.length === 0) {
      await payload.create({ collection: 'faq', data: item });
      created.faq++;
    }
  }

  // ── SETTINGS ──────────────────────────────────────────────────────────
  const existingSettings = await payload.find({ collection: 'settings' });
  created.settings = 0;
  if (existingSettings.docs.length === 0) {
    await payload.create({
      collection: 'settings',
      data: {
        title: 'ZVK Steinmetz',
        contactPhone: '0761 · 123 45 · 00',
        contactEmail: 'kontakt@zvk-steinmetz.de',
        address: 'ZVK Steinmetz VVaG, Musterstraße 12, 79098 Freiburg im Breisgau',
        logo: '/logo-zvk.png',
      },
    });
    created.settings = 1;
  }

  return NextResponse.json({
    success: true,
    created,
    message: 'Seed complete! You can now delete this endpoint.',
    adminUrl: 'https://payload-zvk.vercel.app/admin',
  });
}
