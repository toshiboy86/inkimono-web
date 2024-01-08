import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import { en } from './en'
import { ja } from './ja'

i18n
  .use(initReactI18next)
  .init({
    defaultNS: 'translation',
    resources: {
      en,
      ja
    },
    fallbackLng: ['en', 'ja'],
  })
export { i18n }