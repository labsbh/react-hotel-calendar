import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// noinspection JSIgnoredPromiseFromCall
i18n
    .use(initReactI18next)
    .init({
        defaultNS: 'hotelcalendar',
        lng: 'en',
        ns: ['hotelcalendar'],
        resources: {
            fr: {
                hotelcalendar: require('./locales/fr.json'),
            },
            en: {
                hotelcalendar: require('./locales/en.json'),
            }
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
        },
        debug: true,
    });

export default i18n;
