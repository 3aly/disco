import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ar from './ar.json';
import en from './en.json';
import {I18nManager} from 'react-native';

const resources = {
  ar: {translation: ar},
  en: {translation: en},
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',

  resources,

  lng: I18nManager.isRTL ? 'ar' : 'en', // Initial language
  fallbackLng: 'en', // Fallback language if translation is missing
});
