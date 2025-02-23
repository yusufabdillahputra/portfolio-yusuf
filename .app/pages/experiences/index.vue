<script setup lang="ts">
definePageMeta({
  title: 'Experiences',
})
</script>

<template>
  <TairoContentWrapper
    class="pt-20"
  >
    <BasePlaceholderPage
      title="Coming Soon"
      subtitle="Still development."
    >
      <template #image>
        <img
          class="block dark:hidden"
          src="/img/illustrations/placeholders/flat/placeholder-having-coffee.svg"
          alt="Please wait"
        >
        <img
          class="hidden dark:block"
          src="/img/illustrations/placeholders/flat/placeholder-having-coffee-dark.svg"
          alt="Please wait"
        >
      </template>
    </BasePlaceholderPage>
  </TairoContentWrapper>
</template>
