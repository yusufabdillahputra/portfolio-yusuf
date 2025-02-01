<template>
  <div class="mx-auto w-full max-w-7xl px-4">
    <div class="relative z-30 pt-32 text-center">
      <BaseHeading
        as="h1"
        size="5xl"
        weight="light"
        lead="tight"
        class="text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
      >
        {{ $t('heroHeading') }} <span
        class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4">
          {{ $t('heroName') }}
        </span>
      </BaseHeading>
      <BaseParagraph
        size="lg"
        class="text-muted-500 dark:text-muted-100 mx-auto mb-4 max-w-2xl"
      >
        {{ $t('heroParagraph') }}
      </BaseParagraph>
    </div>
  </div>
</template>
