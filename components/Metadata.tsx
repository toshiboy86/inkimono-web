import { useLocale } from '../src/hooks/useLocale'
// import { useRouter } from 'next/router'

const Metadata = () => {
  // const router = useRouter()
  // console.log(router)
  const page = 'service'
  const { wi18n } = useLocale()
  return (
    <>
      <title>{wi18n().t(`meta.${page}_title`)}</title>
      <meta property="og:title" content={wi18n().t(`meta.${page}_title`)} />
      <meta property="og:description" content={wi18n().t(`meta.${page}_description`)} />
      <meta name="twitter:card" content={wi18n().t(`meta.${page}_description`)}/>
    </>
  )
}

export default Metadata