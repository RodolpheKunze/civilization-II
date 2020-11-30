import React, { useState, createContext, useContext, useCallback, useEffect } from 'react';

import { getLocale } from './init';

interface I18NContextData {
  t: I18NStrings;
  locale: availableLanguagesTypes;
  changeLocale(locale: availableLanguagesTypes): void;
}

const I18NContext = createContext<I18NContextData>({} as I18NContextData);

const I18NProvider: React.FC = ({ children }) => {
  const defaultLocale = 'en';

  const [locale, setLocale] = useState<availableLanguagesTypes>(defaultLocale);
  const [t, setT] = useState<I18NStrings>(getLocale(locale));

  // # Change a language
  const changeLocale = useCallback((newLocale: availableLanguagesTypes): void => {
    setLocale(newLocale);
    setT(getLocale(newLocale));
  }, []);

  // # Update strings when locale changes
  useEffect(() => {
    setT(getLocale(locale));
  }, [locale]);

  return (
    <I18NContext.Provider value={{ t, locale, changeLocale }}>{children}</I18NContext.Provider>
  );
};

const useI18N = (): I18NContextData => {
  const context = useContext(I18NContext);
  if (!context) throw new Error('useI18N must be used within an I18NProvider');
  return context;
};

export { I18NProvider, useI18N };
