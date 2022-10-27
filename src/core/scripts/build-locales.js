const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'messages/',
  translationsDirectory: 'src/locales/',
  languages: ['en', 'es', 'fr', 'ru'],
});
