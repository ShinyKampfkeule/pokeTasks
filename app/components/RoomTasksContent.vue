<script lang="ts" setup>
  import type { TaskEntryInterface } from '~/interfaces/taskEntry'
  import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'
  import type { TaskDataInterface } from '~/types/taskData'

  const props = defineProps({
    roomId: { type: String, required: true },
    roomName: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    type1: { type: String, required: true },
    type2: { type: String, required: true },
    tasks: { type: Object as PropType<TaskDataInterface[]>, required: true },
    newCaughtPokemon: { type: Array as PropType<NewCaughtPokemon>, required: true },
    openModal: { type: Boolean, required: true }
  })

  const emit = defineEmits<{
    (e: 'update:newCaughtPokemon', value: NewCaughtPokemon): void
    (e: 'update:openModal', value: boolean): void
  }>()

  const pokemon = usePokemonStore()
  const caughtPokemon = useCaughtPokemonStore()
  const roomsStore = useRoomsStore()

  const { handleTaskConfirmation } = useHandleTaskConfirmation()

  // const handleTaskConfirmation = () => {
  //   const confirmedTasks = roomsStore.confirmTaskCompletion(props.roomName)
  //   const catchablePokemon = pokemon.getCachtablePokemon([
  //     props.type1.toLocaleLowerCase(),
  //     props.type2.toLocaleLowerCase()
  //   ])
  //   const newCaughtPokemonList: NewCaughtPokemon = Array.from({ length: confirmedTasks }, () => {
  //     const index = Math.floor(Math.random() * catchablePokemon.length)
  //     const newCaughtPokemonSelected = catchablePokemon[index]
  //     if (!newCaughtPokemonSelected) return undefined

  //     const isShiny = Math.floor(Math.random() * 60) === Math.floor(Math.random() * 60)
  //     const isAlreadyCaught = caughtPokemon.isAlreadyCaught(newCaughtPokemonSelected.id, isShiny)
  //     return {
  //       pokemon: newCaughtPokemonSelected,
  //       isShiny: isShiny,
  //       isAlreadyCaught: isAlreadyCaught
  //     }
  //   }).filter((pokemon) => pokemon !== undefined)
  //   emit('update:newCaughtPokemon', newCaughtPokemonList)
  //   emit('update:openModal', true)
  // }
</script>

<template>
  <div
    class="w-full h-full flex flex-col overflow-hidden justify-between gap-10 p-10"
    :style="{ color: primaryColor }"
  >
    <RTCHeader :room-name="roomName" :type1="type1" :type2="type2" />
    <RTCAddTask :room-name="roomName" :primary-color="primaryColor" />
    <div class="flex flex-col gap-2.5 overflow-y-auto grow">
      <Task
        v-for="task in tasks"
        :key="task.id"
        :room-id="roomId"
        :taskId="task.id"
        :label="task.title"
        :completed="task.completed"
        :confirmed-completion="task.confirmedCompletion"
        :primary-color="primaryColor"
        :secondary-color="secondaryColor"
        :room-name="roomName"
      />
    </div>
    <div class="flex justify-center">
      <UButton
        class="cursor-pointer w-50 flex justify-center h-10"
        @click="handleTaskConfirmation(roomName, type1, type2)"
      >
        Confirm completed tasks
      </UButton>
    </div>
  </div>
</template>
