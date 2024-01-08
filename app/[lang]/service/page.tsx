import { Metadata } from 'next'
import ServicePage from './service-page'
import { TLocale, TMetadataProps } from '../../../src/entities'
import { getDictionary } from '../dictionaries'

export async function generateMetadata(
  { params }: TMetadataProps,
): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return {
    title: dict['translation']['meta']['service_title'],
    description: dict['translation']['meta']['service_description'],
    openGraph: {
      images: [dict['translation']['meta']['og_images']],
    },
  }
}

export default function Page(params: { params: { lang: TLocale } }) {
    // TODO: params is added by next.js
  const locale = (params as any).params.lang as TLocale
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ServicePage lang={locale}/>
    </>
  )
}