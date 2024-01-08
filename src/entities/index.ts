export type TLocale = 'en' | 'ja'
export type TI18n = Record<string, any> // TODO: Define type from /dictionaries/[lang].json
export type TMetadataProps = {
  params: { lang: TLocale }
}