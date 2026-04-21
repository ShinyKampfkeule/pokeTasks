<script lang="ts" setup>
  const props = defineProps({
    primaryType: { type: String, required: true },
    secondaryType: { type: String, required: true }
  })
</script>

<template>
  <div class="flex gap-2.5">
    <TypeBadge :type="primaryType" />
    <TypeBadge :type="secondaryType" />
  </div>
</template>
