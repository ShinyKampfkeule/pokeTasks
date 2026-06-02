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

  const openModal = ref(false)
  const newCaughtPokemon = ref<NewCaughtPokemon>([])
</script>

<template>
  <CaughtPokemonModal v-model:openModal="openModal" v-model:newCaughtPokemon="newCaughtPokemon" />
  <div
    class="w-2/3 h-2/3 flex-1 flex flex-col items-start gap-2.5 bg-neutral-200 rounded-md shadow-md"
  >
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
  </div>
</template>
