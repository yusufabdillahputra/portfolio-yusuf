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
      class="nui-paragraph-xl sm:nui-paragraph-2xl"
    >
      {{ $t('hero.p1') }}
    </BaseParagraph>
    <BaseHeading
      as="h1"
      weight="bold"
      lead="tight"
      class="nui-heading-3xl ptablet:nui-heading-5xl sm:nui-heading-7xl text-primary-500 font-hairline underline decoration-dotted underline-offset-4"
    >
      {{ $t('hero.name') }}
    </BaseHeading>
    <BaseParagraph
      as="h2"
      weight="medium"
      lead="normal"
      class="pt-2 pe-[5rem] ptablet:pe-[15rem] sm:pe-[35rem] nui-paragraph-md sm:nui-paragraph-3xl"
    >
      {{ $t('hero.p2') }}
    </BaseParagraph>
    <BaseParagraph
      as="h2"
      weight="medium"
      lead="normal"
      class="nui-paragraph-sm sm:nui-paragraph-md pt-5 pe-[2rem] ptablet:pe-[20rem] sm:pe-[45rem] text-muted-700 dark:text-muted-400"
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

