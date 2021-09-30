import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// noinspection JSIgnoredPromiseFromCall
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    defaultNS: 'hotelcalendar',
    lng: 'en',
    resources: {},
    interpolation: {
      escapeValue: false,
    },
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    }
  });
}

export default i18n;
