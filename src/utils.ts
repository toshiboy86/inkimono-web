import { TLocale } from "./entities"

export const convertFirstLetterCapital = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const generateRandomImages = async (images: string[], limit: number) => {
  const myfun = function(x: string,y: string){
    return 0.5 - Math.random()
  }
  return images.sort(myfun).slice(0, 3)
}

export const getWordsOnLocale = (obj: any, key: string, lang: TLocale): any => {
  return obj[`${key}_${lang}`] || ''
}


export const getNextLocale = (currentLang: TLocale, path: string) => {
  const nextPath = path.split('/').at(-1)
  const nextLocale = currentLang === 'ja' ? '/' : '/ja/'

  return {path: `${nextLocale}${nextPath}`, value: currentLang === 'en' ? '日本語' : 'English'}
}