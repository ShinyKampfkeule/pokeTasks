<script setup lang="ts">
  const props = defineProps({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    primaryType: { type: String, required: true },
    secondaryType: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true }
  })
</script>

<template>
  <NuxtLink :to="`/room/${name}`">
    <div
      class="flex flex-col items-center justify-center gap-5 w-md h-50 border-4 rounded-lg cursor-pointer"
      :style="{
        backgroundColor: secondaryColor,
        borderColor: primaryColor,
        color: primaryColor
      }"
    >
      <RoomTitle :name="name" :icon="icon" />
      <RoomTypeBadges :primary-type="primaryType" :secondary-type="secondaryType" />
    </div>
  </NuxtLink>
</template>
