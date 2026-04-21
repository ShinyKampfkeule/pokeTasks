<script lang="ts" setup>
  const props = defineProps({
    roomName: { type: String, required: true },
    primaryType: { type: String, required: true },
    secondaryType: { type: String, required: true }
  })
</script>

<template>
  <div class="w-full flex justify-between items-center">
    <span class="text-3xl font-medium">{{ roomName }} Tasks</span>
    <RoomTypeBadges :primary-type="primaryType" :secondary-type="secondaryType" />
  </div>
</template>
