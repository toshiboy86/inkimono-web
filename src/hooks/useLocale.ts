import { useRouter } from 'next/router'
import { i18n } from '../../src/i18n'

type lang = 'en' | 'ja'

export const useLocale = () => {
  const router = useRouter()

  const wi18n = () => {
    i18n.changeLanguage(router.locale)
    return i18n
  }

  const getNextLocale = (): lang => {
    const locales = router.locales as lang[]
    const lang = locales.filter((lng) => lng !== router.locale)
    return lang[0]
  }

  const getCurrentLocale = (): lang => {
    const locale = router.locale as lang
    return locale || 'en'
  }
  return {
    getCurrentLocale,
    getNextLocale,
    wi18n
  }
}