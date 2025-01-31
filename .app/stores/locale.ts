import type {LocaleLanguage} from '~/types/locale';

export const useLocaleLanguage = defineStore('localeLanguage', {
  state: (): LocaleLanguage => ({
    localeEn: true,
  }),
  persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocaleLanguage, import.meta.hot))
}
