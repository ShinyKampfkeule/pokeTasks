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
    tasks: { type: Array as PropType<TaskDataInterface[]>, required: true },
    preview: { type: Boolean, required: true }
  })
</script>

<template>
  <div class="flex justify-center items-center w-full">
    <NuxtLink
      :to="`/rooms/${id}`"
      class="flex flex-col justify-between gap-5 w-3/4 xl:w-full border-4 rounded-md shadow-md cursor-pointer p-4"
      :style="{
        backgroundColor: secondaryColor,
        borderColor: primaryColor,
        color: primaryColor
      }"
    >
      <div class="w-full flex items-center justify-between">
        <RoomCardTitle :name="name" :icon="icon" />
        <UIcon v-if="!preview" name="i-lucide-ellipsis-vertical" />
      </div>
      <TypeBadges :type1="type1" :type2="type2" />
      <div class="w-full flex justify-between">
        <span>Tasks:</span>
        <span>{{ tasks.filter((task) => !task.completed).length }}</span>
      </div>
    </NuxtLink>
  </div>
</template>
