import { TLocale } from './entities';

export const convertFirstLetterCapital = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateRandomImages = async (images: string[], limit: number) => {
  const myfun = function (x: string, y: string) {
    return 0.5 - Math.random();
  };
  return images.sort(myfun).slice(0, 3);
};

export const getWordsOnLocale = (obj: any, key: string, lang: TLocale): any => {
  return obj[`${key}_${lang}`] || '';
};

export const getNextLocale = (currentLang: TLocale, path: string) => {
  // Handle top level paths
  if (path === '/ja') {
    return {
      path: '/',
      value: 'English',
    };
  }

  // Get the last segment of the path
  const pathSegments = path.split('/');
  const lastSegment = pathSegments.at(-1);

  // Determine next locale path prefix
  const nextLocale = currentLang === 'ja' ? '/' : '/ja/';

  // Build the next path
  const nextPath = `${nextLocale}${lastSegment}`;

  // Set the display value based on current language
  const value = currentLang === 'en' ? '日本語' : 'English';

  return {
    path: nextPath,
    value: value,
  };
};
