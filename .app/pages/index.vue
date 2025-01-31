<script setup lang="ts">
definePageMeta({
  title: null,
  scrollToTop: true,
})
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center">
    <BaseHeading
      as="h2"
      size="4xl"
      weight="extrabold"
      class="text-muted-800 dark:text-white"
    >
      {{ $t('heading1') }}
    </BaseHeading>
    <BaseHeading
      as="h2"
      size="4xl"
      weight="extrabold"
      class="text-muted-800 dark:text-white"
    >
      {{ $t('heading2') }}
    </BaseHeading>
    <BaseParagraph
      as="p"
      size="md"
      weight="bold"
      class="text-muted-800 dark:text-white"
    >
      {{ $t('heading3') }}
    </BaseParagraph>
  </div>
</template>
