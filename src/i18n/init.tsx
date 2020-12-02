/* eslint-disable camelcase */
import pt_br from './locales/pt_br';
import en from './locales/en';
import es from './locales/es';

const DEFAULT_LOCALE = 'pt_br';
const DEFAULT_STRINGS = pt_br;

const avaiableLocales = ['pt_br', 'en', 'es'];

const getLocale = (locale: availableLanguagesTypes): I18NStrings => {
  switch (locale) {
    case 'pt_br':
      return pt_br;
    case 'en':
      return en;
    case 'es':
      return es;
    default:
      return DEFAULT_STRINGS;
  }
};

export { DEFAULT_LOCALE, DEFAULT_STRINGS, avaiableLocales, getLocale };
