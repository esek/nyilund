import type { Locale } from '@/models/i18n';
import get from 'lodash/get';

import { default as en } from './en.json';
import { default as sv } from './sv.json';

export const getTranslations = (locale: Locale) => {
  return (key: string) => {
    return get({ en, sv }, `${locale}.${key}`) ?? key;
  };
};
