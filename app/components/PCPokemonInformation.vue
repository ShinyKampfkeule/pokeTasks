<script lang="ts" setup>
  const props = defineProps({
    id: { type: Number, required: true },
    name: { type: String, required: true }
  })
</script>

<template>
  <div class="flex gap-2.5 text-xl">
    <span>{{ id }}</span>
    <span>{{ name }}</span>
  </div>
</template>
