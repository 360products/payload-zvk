import Hero from '@/components/home/Hero';
import { Kpis, Audiences, Services, ZukunftStein } from '@/components/home/StaticSections';
import People from '@/components/home/People';
import News from '@/components/home/News';
import Partners from '@/components/home/Partners';

export default function HomePage() {
  return (
    <main className="zvk-page">
      <Hero />
      <Kpis />
      <Audiences />
      <Services />
      <ZukunftStein />
      <People />
      <News />
      <Partners />
    </main>
  );
}
