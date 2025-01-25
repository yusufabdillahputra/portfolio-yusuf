<script setup lang="ts">
import { switchColorShades } from '~/utils/bundles/colors-switcher'
import colors from "tailwindcss/colors";


const route = useRoute()
const app = useAppConfig()

/**
 * Global head configuration
 * @see https://nuxt.com/docs/getting-started/seo-meta
 */
useHead({
  title: () => route.meta?.title ?? '',
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${app.tairo?.title}`
      : `${app.tairo?.title}`
  },
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png',
    },
  ],
  meta: [
    {
      name: 'description',
      content: () =>
        route.meta.description
        ?? 'All about Yusuf Abdillah Putra',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
    {
      name: 'og:image:width',
      content: '1200',
    },
    {
      name: 'og:image:height',
      content: '630',
    },
  ],
})
onNuxtReady(() => {
  switchColorShades('primary', colors.sky)
  switchColorShades('muted', colors.slate)
})
</script>


<template>
  <div>
    <AppLayoutSwitcher/>
    <NuxtLayout>
      <NuxtLoadingIndicator color="rgb(var(--color-primary-500))"/>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
