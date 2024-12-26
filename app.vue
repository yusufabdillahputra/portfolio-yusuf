<script setup lang="ts">
useHead({
  title: "Yusuf Abdillah Putra Site",
});
const daisyTheme = useDaisyTheme();
</script>

<template>
  <div :data-theme="daisyTheme.theme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
