import StubPage from '@/components/StubPage';

export default function Page() {
  return <StubPage title="Downloads" crumbs={[{ label: "Start", href: "/" }, { label: "service", href: "/service" }, { label: "Downloads" }]} />;
}
