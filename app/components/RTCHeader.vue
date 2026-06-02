<script lang="ts" setup>
  const props = defineProps({
    roomName: { type: String, required: true },
    type1: { type: String, required: true },
    type2: { type: String, required: true }
  })
</script>

<template>
  <div class="w-full flex justify-between items-center">
    <span class="text-3xl font-medium">{{ roomName }} Tasks</span>
    <RoomTypeBadges :type1="type1" :type2="type2" />
  </div>
</template>
