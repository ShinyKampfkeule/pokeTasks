<script lang="ts" setup>
  import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'
  import type { TaskDataInterface } from '~/types/taskData'

  const props = defineProps({
    roomId: { type: String, required: true },
    name: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    type1: { type: String, required: true },
    type2: { type: String, required: true },
    tasks: { type: Array as PropType<TaskDataInterface[]>, required: true }
  })
  const newCaughtPokemon = defineModel<NewCaughtPokemon>('newCaughtPokemon')
  const openModal = defineModel<boolean>('openModal')
</script>

<template>
  <RoomTasksContent
    v-model:newCaughtPokemon="newCaughtPokemon"
    v-model:openModal="openModal"
    :room-id="roomId"
    :room-name="name"
    :primary-color="primaryColor"
    :secondary-color="secondaryColor"
    :type1="type1"
    :type2="type2"
    :tasks="tasks"
  />
</template>
