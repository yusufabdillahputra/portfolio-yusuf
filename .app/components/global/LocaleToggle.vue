<script setup lang="ts">
import {useLocaleLanguage} from "~/stores/locale";


const {setLocale, availableLocales} = useI18n()
const store = useLocaleLanguage()
const initLocale = (localEn: boolean): void => {
  if (localEn) {
    if (availableLocales.includes('en')) {
      setLocale('en')
    }
  } else {
    if (availableLocales.includes('id')) {
      setLocale('id')
    }
  }
}
onMounted(() => {
  initLocale(store.localeEn)
})
watch(store, (value) => {
  initLocale(value.localeEn)
})
</script>

<template>
  <label class="nui-theme-toggle">
    <input
      v-model="store.localeEn"
      type="checkbox"
      class="nui-theme-toggle-input"
    />
    <div class="nui-theme-toggle-inner">
      <div class="flex justify-center m-1.5">
        <div v-if="store.localeEn">
          <BaseParagraph
            as="p"
            weight="light"
            size="sm"
          >
            en
          </BaseParagraph>
        </div>
        <div v-else>
          <BaseParagraph
            as="p"
            weight="light"
            size="sm"
          >
            id
          </BaseParagraph>
        </div>
      </div>
    </div>
  </label>
</template>
