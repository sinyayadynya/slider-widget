/**
 * @file
 * Class to identify the correct language code.
 *
 * FIXME Langcode esla fallsback to es, because there is not a langcode
 *       to include all latin american Spanish variants on react-intl.
 */
import messages_en from '../../locales/en.json';
import messages_es from '../../locales/es.json';
import messages_fr from '../../locales/fr.json';
import messages_ru from '../../locales/ru.json';

const localeData = {
  en: messages_en,
  es: messages_es,
  fr: messages_fr,
  ru: messages_ru,
};

export default class i18n {
  constructor(langcode) {
    this.locale = langcode;
  }

  mapLocale(langcode) {
    // Check messages for locale
    if (typeof localeData[langcode.toLowerCase()] !== 'undefined') {
      return langcode.toLowerCase();
    }

    // Check messages for language
    const locale = langcode.split('-', 2);
    if (typeof localeData[locale[0]] !== 'undefined') {
      return locale[0];
    }

    // Default is English
    return 'en';
  }

  set locale(langcode) {
    this._locale = this.mapLocale(langcode || 'en');
  }

  get locale() {
    return this._locale;
  }

  get messages() {
    return localeData[this.locale];
  }
}
