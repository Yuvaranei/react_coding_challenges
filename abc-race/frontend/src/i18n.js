import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './i18n/en.json'
import jp from './i18n/jp.json';

i18n
  .use(initReactI18next) // connects with React
  .init({
    resources: {
      en: { translation: en },
      jp: { translation: jp },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
