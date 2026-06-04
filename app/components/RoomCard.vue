<script setup lang="ts">
  import type { TaskDataInterface } from '~/types/taskData'

  const props = defineProps({
    id: { type: String, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: true },
    type1: { type: String, required: true },
    type2: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    tasks: { type: Array as PropType<TaskDataInterface[]>, required: true }
  })
</script>

<template>
  <div class="flex justify-center items-center w-full">
    <NuxtLink
      :to="`/room/${id}`"
      class="flex flex-col items-center justify-center gap-5 w-3/4 xl:w-full h-50 border-4 rounded-md shadow-md cursor-pointer"
      :style="{
        backgroundColor: secondaryColor,
        borderColor: primaryColor,
        color: primaryColor
      }"
    >
      <RoomTitle :name="name" :icon="icon" />
      <RoomTypeBadges :type1="type1" :type2="type2" />
      <span>{{ tasks.filter((task) => task.completed).length }} / {{ tasks.length }}</span>
    </NuxtLink>
  </div>
</template>
