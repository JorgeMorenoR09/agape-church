import es from './es';
import en from './en';

export type Lang = 'es' | 'en';

const translations = { es, en } as const;

export function useTranslations(lang: Lang) {
  return translations[lang];
}

/** Returns the path prefix for the given language. */
export function langPath(lang: Lang, path: string = '') {
  return `/${lang}${path ? `/${path}` : ''}`;
}

/** Returns the alternate language. */
export function alternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

/** Maps a route slug between language versions. */
export const routeMap: Record<Lang, Record<string, string>> = {
  es: {
    '': '',
    nosotros: 'nosotros',
    ministerios: 'ministerios',
    devocionales: 'devocionales',
    eventos: 'eventos',
    oracion: 'oracion',
    donaciones: 'donaciones',
  },
  en: {
    '': '',
    nosotros: 'about',
    ministerios: 'ministries',
    devocionales: 'devotionals',
    eventos: 'events',
    oracion: 'prayer',
    donaciones: 'donations',
  },
};

/** Formats an ISO date string to a human-readable date in the given locale. */
export function formatDate(isoDate: string, lang: Lang): string {
  return new Date(isoDate + 'T00:00:00').toLocaleDateString(
    lang === 'es' ? 'es-CO' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
}
