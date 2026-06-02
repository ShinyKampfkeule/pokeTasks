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
  <NuxtLink :to="`/room/${id}`">
    <div
      class="flex flex-col items-center justify-center gap-5 w-md h-50 border-4 rounded-lg cursor-pointer"
      :style="{
        backgroundColor: secondaryColor,
        borderColor: primaryColor,
        color: primaryColor
      }"
    >
      <RoomTitle :name="name" :icon="icon" />
      <RoomTypeBadges :type1="type1" :type2="type2" />
      <span>{{ tasks.filter((task) => task.completed).length }} / {{ tasks.length }}</span>
    </div>
  </NuxtLink>
</template>
