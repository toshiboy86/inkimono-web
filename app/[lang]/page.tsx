import { Metadata } from 'next'
import HomePage from './home-page'
import { getDictionary } from './dictionaries'
import { TLocale, TMetadataProps } from '../../src/entities'

export async function generateMetadata(
  { params }: TMetadataProps,
): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return {
    title: dict['translation']['meta']['title'],
    description: dict['translation']['meta']['description'],
    openGraph: {
      images: [dict['translation']['meta']['og_images']],
    },
  }
}

export default function Page(params: { params: { lang: TLocale } }) {
  const locale = (params as any).params.lang as TLocale
  return (
    <>
    {/* @ts-expect-error Server Component */}
      <HomePage lang={locale}/>
    </>
  )
}