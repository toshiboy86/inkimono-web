import { useLocale } from '../src/hooks/useLocale'

const Metadata = () => {
  const page = 'service'
  const { wi18n } = useLocale()
  return (
    <>
      <title>{wi18n().t(`meta.${page}_title`)}</title>
      <meta property="og:title" content={wi18n().t(`meta.${page}_title`)} />
      <meta property="og:description" content={wi18n().t(`meta.${page}_description`)} />
      <meta name="twitter:card" content={wi18n().t(`meta.${page}_description`)}/>
      <meta name="og:image" content='/wrapper-img.jpg' />
    </>
  )
}

export default Metadata