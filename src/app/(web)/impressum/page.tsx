import StubPage from '@/components/StubPage';

export default function Page() {
  return <StubPage title="Impressum" crumbs={[{ label: "Start", href: "/" }, { label: "Impressum" }]} />;
}
