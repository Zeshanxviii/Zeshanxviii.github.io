import en from './en';
import es from './es';
// import hi from './hi';
// import ur from './ur';
// import ar from './ar';
import ja from './ja';
import zh from './zh';

export type Locale = keyof typeof translations;

const translations = { en, es, ja, zh } as const;

export function getTranslations(locale: string) {
  const lang = (locale in translations ? locale : 'en') as Locale;
  return translations[lang];
}

export function useTrans(locale: string) {
  const t = getTranslations(locale);
  return function (path: string): unknown {
    const keys = path.split('.');
    let result: unknown = t;
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = (result as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }
    return result;
  };
}
