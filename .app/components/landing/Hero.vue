<script setup lang="ts">
</script>

<template>
  <TairoContentWrapper
    class="pt-20"
  >
    <BaseParagraph
      as="h4"
      weight="light"
      lead="tight"
      size="2xl"
    >
      {{ $t('hero.p1') }}
    </BaseParagraph>
    <BaseHeading
      as="h1"
      weight="bold"
      lead="tight"
      size="7xl"
      class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4"
    >
      {{ $t('hero.name') }}
    </BaseHeading>
    <BaseParagraph
      as="h2"
      weight="medium"
      lead="normal"
      size="3xl"
      class="pe-[35rem]"
    >
      {{ $t('hero.p2') }}
    </BaseParagraph>
    <BaseParagraph
      as="h2"
      weight="medium"
      lead="normal"
      size="md"
      class="pt-5 pe-[48rem] text-muted-700 dark:text-muted-400"
    >
      {{ $t('hero.p3') }}
      <NuxtLink
        to="https://bankmega.com/"
        target="_blank"
        class="text-warning-500 font-hairline underline decoration-dotted underline-offset-4"
        external
      >
        Bank Mega
      </NuxtLink>
      {{ $t('&') }}
      <NuxtLink
        to="https://ctcorpora.com/"
        target="_blank"
        external
        class="text-info-500 font-hairline underline decoration-dotted underline-offset-4"
      >
        CT Corpora
      </NuxtLink>
    </BaseParagraph>
  </TairoContentWrapper>
</template>

