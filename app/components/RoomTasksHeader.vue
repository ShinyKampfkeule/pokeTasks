<script lang="ts" setup>
  const props = defineProps({
    primaryColor: { type: String, required: true }
  })
</script>

<template>
  <div class="h-30 w-2/3 flex items-center shrink-0">
    <NuxtLink
      to="/"
      class="flex items-center gap-2 cursor-pointer"
      :style="{
        color: primaryColor
      }"
    >
      <UIcon name="i-lucide-arrow-left" size="24" />
      <span class="text-xl">Back to Rooms</span>
    </NuxtLink>
  </div>
</template>
