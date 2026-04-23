<script lang="ts" setup>
  import type { PokemonData } from '~/types/pokemonData'

  const props = defineProps({
    roomName: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    primaryType: { type: String, required: true },
    secondaryType: { type: String, required: true }
  })

  const openModel = ref(false)
  const newCaughtPokemon = ref<
    { pokemon: PokemonData; isShiny: boolean; isAlreadyCaught: boolean }[]
  >([])

  const roomsStore = useRoomsStore()
  const pokemon = usePokemonStore()
  const caughtPokemon = useCaughtPokemonStore()
  const room = roomsStore.rooms[props.roomName]

  if (!room) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Room not found',
      message: 'The room you are looking for does not exists.',
      fatal: true
    })
  }

  const handleTaskConfirmation = () => {
    const confirmedTasks = roomsStore.confirmTaskCompletion(props.roomName)
    const catchablePokemon = pokemon.getCachtablePokemon([
      props.primaryType.toLocaleLowerCase(),
      props.secondaryType.toLocaleLowerCase()
    ])
    newCaughtPokemon.value = Array.from({ length: confirmedTasks }, () => {
      const index = Math.floor(Math.random() * catchablePokemon.length - 1)
      if (catchablePokemon[index]) {
        const newCaughtPokemon = catchablePokemon[index]
        const isShiny = Math.floor(Math.random() * 60) === Math.floor(Math.random() * 60)
        const isAlreadyCaught = caughtPokemon.isAlreadyCaught(index, isShiny)
        return { pokemon: newCaughtPokemon, isShiny: isShiny, isAlreadyCaught: isAlreadyCaught }
      }
    }).filter((pokemon) => pokemon !== undefined)
    openModel.value = true
  }
</script>

<template>
  <UModal
    v-model:open="openModel"
    title="Caught Pokémon"
    description="Congratulations! You caught some Pokemon while completing your tasks."
    :ui="{
      content: 'bg-background text-black min-w-2/4 min-h-2/3',
      title: 'text-black',
      description: 'text-black',
      close: 'text-black hover:bg-transparent hover:text-red-500 cursor-pointer',
      body: 'flex flex-col items-center justify-between'
    }"
    :dismissible="false"
  >
    <template #body>
      <div
        class="flex flex-1 overflow-y-auto flex-wrap items-start justify-center content-start gap-2 p-5"
      >
        <div
          v-for="pokemon in newCaughtPokemon"
          :class="`relative w-36 h-36 flex flex-col gap-1 items-center justify-center rounded-full ${pokemon.isShiny ? 'bg-blue-200/50' : 'bg-neutral-500/20'} ${pokemon.isAlreadyCaught ? '' : 'border-4 border-emerald-400'}`"
        >
          <NuxtImg
            :src="
              pokemon.isShiny
                ? pokemon.pokemon.sprites[0].shiny
                : pokemon.pokemon.sprites[0].default
            "
            width="64"
            height="64"
          />
          <span>{{ pokemon.pokemon.name }}</span>
          <div class="absolute -top-2 rounded-full bg-emerald-400 py-1 px-4 text-xs">
            <span v-if="!pokemon.isAlreadyCaught">New</span>
          </div>
        </div>
      </div>
    </template>
  </UModal>
  <div class="w-2/3 h-2/3 flex-1 flex flex-col items-start gap-2.5 bg-neutral-200 rounded-md">
    <div
      class="w-full h-full flex flex-col overflow-hidden justify-between gap-10 p-10"
      :style="{ color: primaryColor }"
    >
      <RTCHeader
        :room-name="roomName"
        :primary-type="primaryType"
        :secondary-type="secondaryType"
      />
      <RTCAddTask :room-name="roomName" :primary-color="primaryColor" />
      <div class="flex flex-col gap-2.5 overflow-y-auto grow">
        <Task
          v-for="(task, id) in room.tasks"
          :key="id"
          :id="id"
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
          @click="handleTaskConfirmation"
        >
          Confirm completed tasks
        </UButton>
      </div>
    </div>
  </div>
</template>
