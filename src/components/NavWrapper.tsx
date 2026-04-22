import { getNavPages } from '@/lib/payload';
import Nav from './Nav';

export default async function NavWrapper() {
  const cmsPages = await getNavPages();
  return <Nav cmsPages={cmsPages} />;
}
