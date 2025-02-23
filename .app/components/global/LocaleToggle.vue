<script setup lang="ts">
import {useLocaleLanguage} from "~/stores/locale";


const {setLocale, availableLocales} = useI18n()
const store = useLocaleLanguage()
const {
  localeId
} = storeToRefs(store)
const initLocale = (localId: boolean): void => {
  if (localId) {
    if (availableLocales.includes('id')) {
      setLocale('id')
    }
  } else {
    if (availableLocales.includes('en')) {
      setLocale('en')
    }
  }
}
onMounted(() => {
  initLocale(localeId.value)
})
watch(store, (value) => {
  initLocale(value.localeId)
})
</script>

<template>
  <label class="nui-theme-toggle">
    <input
      v-model="localeId"
      type="checkbox"
      class="nui-theme-toggle-input"
    />
    <div class="nui-theme-toggle-inner">
      <div class="flex justify-center m-1.5">
        <div v-if="localeId">
          <BaseParagraph
            as="p"
            weight="light"
            size="sm"
          >
            id
          </BaseParagraph>
        </div>
        <div v-else>
          <BaseParagraph
            as="p"
            weight="light"
            size="sm"
          >
            en
          </BaseParagraph>
        </div>
      </div>
    </div>
  </label>
</template>
