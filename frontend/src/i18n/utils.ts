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

/**
 * Bidirectional slug map between language versions.
 * routeMap.en  — key = Spanish slug, value = English slug (use when switching ES→EN)
 * routeMap.es  — key = English slug, value = Spanish slug (use when switching EN→ES)
 *
 * Usage: routeMap[targetLang][currentSlug] → targetSlug
 */
export const routeMap: Record<Lang, Record<string, string>> = {
  es: {
    '': '',
    about: 'nosotros',
    ministries: 'ministerios',
    devotionals: 'devocionales',
    events: 'eventos',
    prayer: 'oracion',
    donations: 'donaciones',
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

/**
 * Given the current language and the full pathname, returns the equivalent URL
 * in the alternate language, preserving sub-paths (e.g. devotional slugs).
 */
export function getAlternateUrl(lang: Lang, pathname: string): string {
  const other = alternateLang(lang);
  const segments = pathname.replace(/^\//, '').split('/').filter(Boolean);

  // Home page (e.g. /es/ or /en/)
  if (segments.length < 2) {
    return `/${other}/`;
  }

  const pageSlug = segments[1];
  const rest = segments.slice(2);

  const otherSlug = routeMap[other][pageSlug] ?? pageSlug;

  if (rest.length > 0) {
    return `/${other}/${otherSlug}/${rest.join('/')}`;
  }
  return `/${other}/${otherSlug}`;
}

/** Formats an ISO date string to a human-readable date in the given locale. */
export function formatDate(isoDate: string, lang: Lang): string {
  return new Date(isoDate + 'T00:00:00').toLocaleDateString(
    lang === 'es' ? 'es-CO' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
}
