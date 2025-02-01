import en from '~/locale/en.json'
import id from '~/locale/id.json'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  locale: 'en',
  messages: {
    "en": en,
    "id": id,
  },
}))
