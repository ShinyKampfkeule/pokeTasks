<template>
  <div class="flex items-center justify-between">
    <span class="text-lg font-medium">Room Overview</span>
    <div class="flex items-center gap-4">
      <UIcon name="i-lucide-ellipsis-vertical" />
      <NuxtLink
        to="/rooms/createRoom"
        class="bg-(--secondary) py-1.5 px-2.5 rounded-md shadow-md text-sm font-medium text-(--foreground) hover:bg-(--secondary)/75"
      >
        New Room
      </NuxtLink>
    </div>
  </div>
</template>
