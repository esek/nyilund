import type { Locale } from '@/models/i18n';
import get from 'lodash/get';

import { default as en } from './en.json';
import { default as sv } from './sv.json';

export const locales = { en, sv };
export const DEFAULT_LOACLE: Locale = 'sv';

const pages = {
  home: '/',
  nollning: '/nollning',
  about: '/about',
};

type Translation = (key: string) => string;
type Route = (page: keyof typeof pages, locale?: Locale) => string;

export const getTranslations = (
  currLocale: Locale
): [Translation, Route, Locale[]] => {
  const translate: Translation = (key) => {
    const k = `${currLocale}.${key}`;
    return get({ en, sv }, k) || k;
  };

  const route: Route = (page, locale = currLocale) => {
    if (locale === 'sv') {
      return pages[page];
    }

    return `/${locale}${pages[page]}`;
  };

  const otherLocales: Locale[] = (['en', 'sv'] as const).filter(
    (l) => l !== currLocale
  );

  return [translate, route, otherLocales];
};
