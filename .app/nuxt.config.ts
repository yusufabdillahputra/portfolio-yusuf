export default defineNuxtConfig({
  ssr: false,

  devtools: {
    enabled: true,
  },

  devServer: {
    host: 'localhost',
    port: 3000,
  },

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
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 3000,
        clientPort: 3000,
      },
    },
    build: {
      target: 'esnext',
    },
    // Defining the optimizeDeps.include option prebuilds the dependencies, this avoid
    // some reloads when navigating between pages during development.
    // It's also useful to track them usage.
    optimizeDeps: {
      include: [],
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],

  pinia: {
    storesDirs: [
      './stores/**',
    ],
  },

  piniaPluginPersistedstate: {
    storage: 'localStorage',
  },

  i18n: {
    vueI18n: './.app/i18n.config.ts',
  },

  compatibilityDate: '2025-01-31',
})
