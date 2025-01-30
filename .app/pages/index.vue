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
      Hi, I'm Yusuf Abdillah Putra
    </BaseHeading>
    <BaseHeading
      as="h2"
      size="4xl"
      weight="extrabold"
      class="text-muted-800 dark:text-white"
    >
      But you can call me Yusuf
    </BaseHeading>
    <BaseParagraph
      as="p"
      size="md"
      weight="bold"
      class="text-muted-800 dark:text-white"
    >
      I'm a Fullstack Developer
    </BaseParagraph>
  </div>
</template>
