import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@pinia/nuxt', 'nuxt-graphql-request'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  vite: {
    optimizeDeps: {
      include: ['@tanstack/vue-query', 'valibot']
    }
  }
})
