import { Metadata } from 'next';
import { TLocale, TMetadataProps } from '../../../src/entities';
import MediaPage from './media-page';
import { getDictionary } from '../dictionaries';

export async function generateMetadata({
  params,
}: TMetadataProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict['translation']['meta']['media_title'],
    description: dict['translation']['meta']['media_description'],
    openGraph: {
      images: [dict['translation']['meta']['og_images']],
    },
    alternates: {
      canonical: '/media',
    },
  };
}

export default function Page(params: { params: { lang: TLocale } }) {
  const locale = (params as any).params.lang as TLocale;
  // @ts-expect-error Server Component
  return <MediaPage lang={locale} />;
}
