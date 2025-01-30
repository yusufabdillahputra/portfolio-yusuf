<script setup lang="ts">
definePageMeta({
  title: 'About',
})


</script>

<template>
  <div>
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
  </div>
</template>
