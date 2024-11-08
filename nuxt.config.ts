import { appDescription } from './constants/index'

export default defineNuxtConfig({
  // ssr: true
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@ant-design-vue/nuxt',
    'dayjs-nuxt',
    '@nuxt/eslint',
  ],
  eslint: {
    // config: {
    //   standalone: false,
    // },
  },

  imports: {
    dirs: ['utils/*.{ts,js}', 'api/*.{ts,js}', 'constants/**.{ts,js}', 'stores/**.{ts,js}'],
  },

  routeRules: {
    '/': { redirect: '/login' },
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    // inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '~/assets/styles/index.css',
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  app: {
    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    // },
    // layoutTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    // },
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/icon.svg', sizes: 'any' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2024-09-27',
})