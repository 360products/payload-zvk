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
