import StubPage from '@/components/StubPage';

export default function Page() {
  return <StubPage title="Kontakt" crumbs={[{ label: "Start", href: "/" }, { label: "service", href: "/service" }, { label: "Kontakt" }]} />;
}
