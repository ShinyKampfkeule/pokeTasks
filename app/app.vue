<script setup>
  useThemeSync()

  useHead({
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', href: '/pokeball.png' }],
    htmlAttrs: {
      lang: 'en'
    }
  })

  const title = 'Poke Tasks'
  const description = 'A daily tasks app with your favorite Pokémon as rewards.'

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
    twitterCard: 'summary_large_image'
  })
</script>

<template>
  <UApp>
    <Header />
    <UMain class="flex p-4">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
