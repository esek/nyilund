import type { Locale } from '@/models/i18n';
import get from 'lodash/get';

import { default as en } from './en.json';
import { default as sv } from './sv.json';

const pages = {
  home: '/',
  nollning: '/nollning',
  about: '/about',
};

type Translation = (key: string) => string;
type Route = (page: keyof typeof pages, locale?: Locale) => string;

export const getTranslations = (currLocale: Locale): [Translation, Route] => {
  const t = (key: string) => {
    const k = `${currLocale}.${key}`;
    return get({ en, sv }, k) || k;
  };

  const route = (page: keyof typeof pages, locale = currLocale) => {
    if (locale === 'sv') {
      return pages[page];
    }

    return `/${locale}${pages[page]}`;
  };

  return [t, route];
};
