<template>
  <div class="flex gap-2 items-center">
    <UUser
      name="GoodMum404"
      description="Parent"
      :avatar="{ icon: 'i-lucide-user' }"
      :ui="{
        root: ['*:color-(--foreground)'],
        name: ['text-(--foreground)'],
        description: ['text-(--foreground)']
      }"
    />
    <UIcon name="i-lucide-chevron-down" />
  </div>
</template>
