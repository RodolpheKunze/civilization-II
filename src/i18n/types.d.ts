declare type availableLanguagesTypes = 'pt_br' | 'en' | 'es'| 'fr';

declare type I18NStrings = {
  title: string;
  subTitle: string;
  description: string;
  credits: {
    label: string;
    game: string;
    project: string;
    translation: string;
  };
};
