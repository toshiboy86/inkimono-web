import 'server-only'
import { TLocale } from '../../src/entities'

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  ja: () => import('../../dictionaries/ja.json').then((module) => module.default),
}

export const getDictionary = async (locale: TLocale) => {
  return dictionaries[locale]()
}
