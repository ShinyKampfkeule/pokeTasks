<script lang="ts" setup>
  const props = defineProps({
    title: { type: String, required: true }
  })
</script>

<template>
  <span class="text-lg font-medium">{{ title }}</span>
</template>

<style></style>
