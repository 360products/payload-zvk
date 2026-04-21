import StubPage from '@/components/StubPage';

export default function Page() {
  return <StubPage title="Meldeportal" crumbs={[{ label: "Start", href: "/" }, { label: "service", href: "/service" }, { label: "Meldeportal" }]} />;
}
