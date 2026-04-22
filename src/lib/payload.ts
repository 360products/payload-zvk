import { getPayload } from 'payload';
import config from '@payload-config';

export async function getPayloadClient() {
  return getPayload({ config });
}

export async function findAll(collection: string, opts: any = {}) {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({ collection: collection as any, limit: 100, ...opts });
    return res.docs || [];
  } catch (e) {
    console.error(`findAll(${collection}) failed`, e);
    return [];
  }
}

export async function getNavPages(): Promise<{ title: string; navLabel: string; slug: string }[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: 'pages' as any,
      where: { showInNav: { equals: true }, published: { equals: true } },
      limit: 20,
    });
    return (res.docs || []).map((p: any) => ({
      title: p.title,
      navLabel: p.navLabel || p.title,
      slug: p.slug,
    }));
  } catch {
    return [];
  }
}
