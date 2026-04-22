import { notFound } from 'next/navigation';
import { Crumbs } from '@/components/PageParts';
import RenderBlocks from '@/components/blocks';
import { findAll } from '@/lib/payload';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function CmsPage({ params }: Props) {
  const { slug } = await params;
  const fullSlug = slug.join('/');

  const results = await findAll('pages', {
    where: {
      slug: { equals: fullSlug },
      published: { equals: true },
    },
    limit: 1,
  });

  const page = results[0];
  if (!page) notFound();

  return (
    <main className="zvk-page">
      <Crumbs items={[{ label: 'Start', href: '/' }, { label: page.title }]} />
      <RenderBlocks blocks={page.layout ?? []} />
    </main>
  );
}

export async function generateStaticParams() {
  const pages = await findAll('pages', { where: { published: { equals: true } } });
  return pages.map((p: any) => ({ slug: p.slug.split('/') }));
}
