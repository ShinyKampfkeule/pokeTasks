<script setup>
  const items = computed(() => [
    {
      label: 'Rooms',
      icon: 'i-lucide-home',
      to: '/'
    },
    {
      label: 'Pokedex',
      icon: 'i-lucide-list',
      to: '/pokedex'
    },
    {
      label: 'Messages',
      icon: 'i-lucide-message-circle-more',
      to: '/messages'
    },
    {
      label: 'Settings',
      icon: 'i-lucide-sliders-horizontal',
      to: '/settings'
    }
  ])
</script>

<template>
  <UHeader
    :ui="{
      root: ['bg-primary border-none'],
      container: ['mx-0 max-w-full'],
      center: ['h-full']
    }"
  >
    <template #title>
      <NuxtImg src="/pokeball.png" />
      <span>Pokétasks</span>
    </template>

    <UNavigationMenu
      :items="items"
      :ui="{
        root: ['*:h-full gap-0'],
        list: ['h-full'],
        item: ['h-full py-0 w-40'],
        link: [
          'h-full before:rounded-none justify-center p-0 data-active:before:border-t-4 data-active:before:border-t-[var(--ui-border-inverted)] data-active:text-[var(--ui-text)]'
        ],
        linkLeadingIcon: ['text-[var(--ui-text)]']
      }"
    />

    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>

  <!-- <div class="flex flex-col h-screen bg-background">
    <ROHeader />
    <ROContainer />
    <MenuBar />
  </div> -->
</template>
