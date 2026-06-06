<script lang="ts" setup>
  const props = defineProps({
    name: { type: String, required: true },
    icon: { type: String, required: true }
  })
</script>

<template>
  <div class="flex items-center justify-center gap-2.5 text-2xl font-medium">
    <UIcon :name="icon" size="32" />
    <span>{{ name }}</span>
  </div>
</template>
