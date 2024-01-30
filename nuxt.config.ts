import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  // experimental: {
  //   // when using generate, payload js assets included in sw precache manifest
  //   // but missing on offline, disabling extraction it until fixed
  //   payloadExtraction: false,
  //   inlineSSRStyles: false,
  //   renderJsonPayloads: true,
  //   typedPages: true,
  // },

  // nitro: {
  //   esbuild: {
  //     options: {
  //       target: 'esnext',
  //     },
  //   },
  //   prerender: {
  //     crawlLinks: false,
  //     routes: ['/'],
  //     ignore: ['/hi'],
  //   },
  // },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
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
})
