<script lang="ts" setup>
  import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'

  const props = defineProps({
    newCaughtPokemon: { type: Array as PropType<NewCaughtPokemon>, required: true }
  })

  const openModal = defineModel<boolean>('openModal')
</script>

<template>
  <UModal
    v-model:open="openModal"
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
      <CaughtPokemon :new-caught-pokemon="newCaughtPokemon" />
    </template>
  </UModal>
</template>
