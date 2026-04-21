// Fallback FAQ content when CMS has no entries yet
export const FALLBACK_FAQ: Record<string, { question: string; answer: string }[]> = {
  Betriebe: [
    { question: 'Wie melde ich monatlich meine Lohnsummen?', answer: 'Über das Meldeportal — bis zum 15. des Folgemonats. Sie können die Summe direkt eingeben oder per CSV-Upload hochladen.' },
    { question: 'Wer zahlt die Beiträge — ich oder mein Mitarbeiter?', answer: 'Der Arbeitgeber. Arbeitnehmer zahlen nichts aus eigener Tasche (außer sie wählen freiwillig ZukunftStein).' },
    { question: 'Ich bin Ein-Mann-Betrieb — was gilt für mich?', answer: 'Derzeit ist die ZVK nur für Betriebe mit Angestellten relevant. Ein Produkt für Selbstständige ist in Prüfung.' },
    { question: 'Was passiert, wenn ich nicht zahle?', answer: 'Mahnlauf, Säumniszuschläge und ggf. gerichtliche Geltendmachung — wir sind ein Pflichtsystem.' },
    { question: 'Wie melde ich einen neuen Mitarbeiter an?', answer: 'Im Meldeportal unter „Mitarbeiter · Neu". Erforderlich sind Name, Geburtsdatum und SV-Nummer.' },
    { question: 'Kann ich ZukunftStein anbieten — und was habe ich davon?', answer: 'Ja. Attraktivitätsmerkmal im Fachkräftewettbewerb, minimaler Aufwand.' },
  ],
  Versicherte: [
    { question: 'Bin ich automatisch versichert?', answer: 'Ja, sobald Sie in einem Steinmetzbetrieb angestellt sind. Kein Antrag nötig.' },
    { question: 'Wie viel Rente bekomme ich später?', answer: 'Bis zu 116 €/Monat als Vollrente nach 360 Beitragsmonaten. Ihr aktueller Stand steht in der jährlichen Renteninformation.' },
    { question: 'Was ist mit meinen Beiträgen, wenn ich den Job wechsle?', answer: 'Sie bleiben erhalten. Bei einem Wechsel innerhalb der Branche zahlen Sie einfach weiter.' },
    { question: 'Elternzeit, Krankheit, Auslandsaufenthalt — was passiert?', answer: 'Krankengeldbezug und bis zu 3 Jahre Elternzeit werden anerkannt. Auslandsarbeit wird individuell geprüft.' },
    { question: 'Kann ich selbst mehr einzahlen?', answer: 'Über ZukunftStein — per Entgeltumwandlung aus dem Bruttolohn. Ansprache über Ihren Betrieb.' },
    { question: 'Wann und wie beantrage ich meine Rente?', answer: 'Etwa 3 Monate vor Renteneintritt — schriftlich oder telefonisch. Wir schicken Ihnen alle Unterlagen rechtzeitig.' },
  ],
  Rentner: [
    { question: 'Wann wird ausgezahlt?', answer: 'Quartalsweise, jeweils zum Quartalsende. Termine stehen auf der Rentner-Seite.' },
    { question: 'Wie ändere ich meine Bankverbindung?', answer: 'Aus Sicherheitsgründen nur schriftlich — Formular online oder per Post.' },
    { question: 'Was bedeuten die Zahlen in meinem Bescheid?', answer: 'Die wichtigsten Felder sind auf der Rentner-Seite erklärt — mit Visualisierung.' },
    { question: 'Ich bin umgezogen — was muss ich tun?', answer: 'Einfach anrufen oder das Adressformular nutzen. Die Auszahlung läuft ohne Unterbrechung weiter.' },
    { question: 'Muss ich meine Rente versteuern?', answer: 'Ja, wie jede Leistung aus der betrieblichen Altersvorsorge. Details klären wir mit Ihrem Steuerberater.' },
  ],
};

export async function getFaqsByCluster(cluster: string) {
  const { findAll } = await import('./payload');
  const cms = await findAll('faq', {
    where: { cluster: { equals: cluster }, published: { equals: true } },
    sort: 'order',
  });
  if (cms.length > 0) {
    return cms.map((d: any) => ({ question: d.question, answer: d.answer }));
  }
  return FALLBACK_FAQ[cluster] || [];
}
