import es from './es';
import en from './en';

export type Lang = 'es' | 'en';

const translations = { es, en } as const;
const DEFAULT_SITE_URL = 'https://agapechurch.com';
const BASE_URL = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export function useTranslations(lang: Lang) {
  return translations[lang];
}

/** Returns the path prefix for the given language. */
export function langPath(lang: Lang, path: string = '') {
  return `/${lang}${path ? `/${path}` : ''}`;
}

function normalizePath(path: string) {
  if (!path || path === '/') return '/';
  return path.startsWith('/') ? path : `/${path}`;
}

export function withBase(path: string = '/') {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }

  const normalizedPath = normalizePath(path);
  return `${BASE_URL}${normalizedPath}` || '/';
}

export function publicAsset(path: string) {
  return withBase(path);
}

export function localizedPath(lang: Lang, path: string = '') {
  return withBase(langPath(lang, path));
}

export function absoluteUrl(path: string, siteURL = import.meta.env.PUBLIC_SITE_URL || DEFAULT_SITE_URL) {
  const normalizedSiteURL = siteURL.endsWith('/') ? siteURL : `${siteURL}/`;
  return new URL(withBase(path), normalizedSiteURL).toString();
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
