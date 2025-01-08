import { Metadata } from 'next';
import { TLocale, TMetadataProps } from '../../../src/entities';
import FaqPage from './faq-page';
import { getDictionary } from '../dictionaries';

export async function generateMetadata({
  params,
}: TMetadataProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict['translation']['meta']['faq_title'],
    description: dict['translation']['meta']['faq_description'],
    openGraph: {
      images: [dict['translation']['meta']['og_images']],
    },
    alternates: {
      canonical: '/faq',
    },
  };
}
export default function Page(params: { params: { lang: TLocale } }) {
  // TODO: params is added by next.js
  const locale = (params as any).params.lang as TLocale;
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <FaqPage lang={locale} />
    </>
  );
}
