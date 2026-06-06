<script lang="ts" setup>
  const props = defineProps({
    type1: { type: String, required: true },
    type2: { type: String, required: true }
  })
</script>

<template>
  <div class="flex gap-2.5">
    <TypeBadge :type="type1" />
    <TypeBadge :type="type2" />
  </div>
</template>
