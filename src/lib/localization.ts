import type { Locale } from '@/models/i18n';
import { type Page, pages } from './pages';
import get from 'lodash/get';
import { sv, en } from '../locales';

interface Translations {
  [key: string]: string | Translations;
}

type LocaleInfo = {
  name: string;
  short: string;
  key: Locale;
  data: Translations;
};

type Translation = (key: string) => string;
type Route = (page: Page, locale?: Locale) => string;

export const DEFAULT_LOCALE: Locale = 'sv';

export const locales: Record<Locale, LocaleInfo> = {
  sv: {
    name: 'Svenska',
    short: 'SWE',
    key: 'sv',
    data: sv,
  },
  en: {
    name: 'English',
    short: 'ENG',
    key: 'en',
    data: en,
  },
};

export const getTranslations = (currLocale: Locale): [Translation, Route] => {
  const translate: Translation = (key) => {
    const k = `${currLocale}.${key}`;
    return get({ en, sv }, k) || k;
  };

  const route: Route = (page, locale = currLocale) => {
    if (locale === DEFAULT_LOCALE) {
      return pages[page];
    }

    return `/${locale}${pages[page]}`;
  };

  return [translate, route];
};
