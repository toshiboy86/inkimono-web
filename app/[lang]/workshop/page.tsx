import { Metadata } from 'next';
import * as repositories from '../../../src/repositories';
import { getDictionary } from '../dictionaries';
import { TLocale, TMetadataProps } from '../../../src/entities';
import WorkshopPage from './workshop-page';

export async function generateMetadata({
  params,
}: TMetadataProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  const [workshop] = await repositories.fetchPageByPageType('workshop');
  console.log(workshop.fields[`meta_title_${params.lang}`]);
  console.log(workshop.fields[`meta_description_${params.lang}`]);
  return {
    title: workshop.fields[`meta_title_${params.lang}`],
    description: workshop.fields[`meta_description_${params.lang}`],
    openGraph: {
      images: [
        (workshop?.fields?.image_1 as unknown as string) ||
          dict['translation']['meta']['og_images'],
      ],
    },
  };
}

export default function Page(params: { params: { lang: TLocale } }) {
  const locale = (params as any).params.lang as TLocale;
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <WorkshopPage lang={locale} />
    </>
  );
}
