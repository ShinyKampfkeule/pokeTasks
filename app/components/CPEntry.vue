<script setup lang="ts">
  const props = defineProps({
    name: { type: String, required: true },
    isShiny: { type: Boolean, required: true },
    isAlreadyCaught: { type: Boolean, required: true },
    shinySprite: { type: String, required: true },
    defaultSprite: { type: String, required: true }
  })
</script>

<template>
  <div
    :class="`relative w-36 h-36 flex flex-col gap-1 items-center justify-center rounded-full ${isShiny ? 'bg-blue-200/50' : 'bg-neutral-500/20'} ${isAlreadyCaught ? '' : 'border-4 border-emerald-400'}`"
  >
    <NuxtImg :src="isShiny ? shinySprite : defaultSprite" width="64" height="64" />
    <span>{{ name }}</span>
    <div
      v-if="!isAlreadyCaught"
      class="absolute -top-2 rounded-full bg-emerald-400 py-1 px-4 text-xs"
    >
      <span>New</span>
    </div>
  </div>
</template>
