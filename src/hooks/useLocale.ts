import { useRouter } from 'next/router';
import { i18n } from '../../src/i18n'

export const useLocale = () => {
  const router = useRouter()

  const wi18n = () => {
    i18n.changeLanguage(router.locale)
    return i18n
  }
  return {
    wi18n
  }
}