export default defineNuxtConfig({
  ssr: false,
  devtools: {enabled: true},
  compatibilityDate: '2025-01-26',

  extends: [
    '../layers/tairo-layout-iconnav',
    '../layers/tairo',
  ],

  /**
   * Load local font with @fontsource packages
   * @see https://fontsource.org/
   */
  css: [
    '~/assets/css/colors.css',
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
  ],

  experimental: {
    // Render tags in of the head in a more performant way
    headNext: true,
    // Use the new View Transitions API
    viewTransition: true,
  },

  typescript: {
    tsConfig: {
      // Here you can customize the generated tsconfig.json file
      vueCompilerOptions: {
        target: 3.4,
      },
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  vite: {
    define: {
      // Enable / disable Options API support. Disabling this will result in smaller bundles,
      // but may affect compatibility with 3rd party libraries if they rely on Options API.
      // Splitplane uses Options API, so we need to enable it.
      __VUE_OPTIONS_API__: true,
    },
    build: {
      target: 'esnext',
    },
    // Defining the optimizeDeps.include option prebuilds the dependencies, this avoid
    // some reloads when navigating between pages during development.
    // It's also useful to track them usage.
    optimizeDeps: {
      include: [
        // '@headlessui-float/vue',
        // 'scule',
        // 'klona',
        // '@vueform/slider',
        // 'v-calendar',

        // AddonCarouselIcon
        // AddonCarouselTeam
        // 'vue3-carousel',

        // AddonApexcharts
        // 'vue3-apexcharts',

        // AddonInputPhone
        // 'libphonenumber-js/max',
        // 'country-codes-list',

        // AddonInputPassword
        // '@zxcvbn-ts/core',
        // '@zxcvbn-ts/language-common',
        // '@zxcvbn-ts/language-en',
        // '@zxcvbn-ts/language-fr',

        // AddonMarkdownRemark
        // 'rehype-external-links',
        // 'rehype-raw',
        // 'rehype-sanitize',
        // 'rehype-stringify',
        // '@shikijs/rehype',
        // 'remark-gfm',
        // 'remark-parse',
        // 'remark-rehype',
        // 'unified',

        // useMultiStepForm
        // 'vue3-smooth-dnd',
        // 'splitpanes',
        // 'mapbox-gl',
        // '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js',

        // DocComponentMeta
        // useDocumentationMeta
        // 'scule',

        // form validation
        // '@vee-validate/zod',
        // 'vee-validate',
        // 'zod',

        // calendar app
        // 'date-fns',
        // 'date-fns/locale',

        // profile edit page
        // 'imask',
      ],
    },
  },

  modules: ['@nuxt/image'],
})
