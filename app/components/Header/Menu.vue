<script setup>
  const route = useRoute()

  const items = computed(() => [
    {
      label: 'Rooms',
      icon: 'i-lucide-home',
      to: '/rooms',
      active: route.path.startsWith('/rooms')
    },
    {
      label: 'Pokedex',
      icon: 'i-lucide-list',
      to: '/pokedex',
      active: route.path.startsWith('/pokedex')
    },
    {
      label: 'Messages',
      icon: 'i-lucide-message-circle-more',
      to: '/messages',
      active: route.path.startsWith('/messages')
    },
    {
      label: 'Settings',
      icon: 'i-lucide-sliders-horizontal',
      to: '/settings',
      active: route.path.startsWith('/settings')
    }
  ])
</script>

<template>
  <UNavigationMenu
    :items="items"
    :ui="{
      root: ['*:h-full gap-0'],
      list: ['h-full'],
      item: ['h-full py-0 w-40'],
      link: [
        'h-full before:rounded-none justify-center p-0 data-active:before:border-t-4 data-active:before:border-t-[var(--accent)] text-[var(--foreground)]'
      ],
      linkLeadingIcon: ['text-[var(--foreground)]']
    }"
  />
</template>
