import { getPayload } from 'payload';
import config from '@payload-config';

export async function getGlobal(slug: string): Promise<any> {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug });
  } catch {
    return {};
  }
}
