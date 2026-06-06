<script lang="ts" setup>
  const props = defineProps({
    name: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    type1: { type: String, required: true },
    type2: { type: String, required: true }
  })
</script>

<template>
  <div class="relative shrink-0 flex gap-8">
    <NuxtLink
      to="/rooms"
      class="flex items-center gap-2 cursor-pointer"
      :style="{
        color: primaryColor
      }"
    >
      <UIcon name="i-lucide-arrow-left" size="24" />
    </NuxtLink>
    <span class="text-3xl font-medium text-(--foreground)">{{ name }}</span>
    <TypeBadges class="absolute right-0" :type1="type1" :type2="type2" />
  </div>
</template>
