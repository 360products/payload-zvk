import StubPage from '@/components/StubPage';

export default function Page() {
  return <StubPage title="Pflichtbeihilfe" crumbs={[{ label: "Start", href: "/" }, { label: "vorsorge", href: "/vorsorge" }, { label: "Pflichtbeihilfe" }]} />;
}
