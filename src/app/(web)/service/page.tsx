import StubPage from '@/components/StubPage';

export default function Page() {
  return <StubPage title="Service-Übersicht" crumbs={[{ label: "Start", href: "/" }, { label: "Service-Übersicht" }]} />;
}
