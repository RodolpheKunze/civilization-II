declare type availableLanguagesTypes = 'pt_br' | 'en';

declare type I18NStrings = {
  title: string;
  subTitle: string;
  description: string;
  credits: {
    label: string;
    game: {
      label: string;
      name: string;
    };
    project: {
      label: string;
      name: string;
    };
    translation: {
      label: string;
      en: string;
      ptbr: string;
    };
  };
};
