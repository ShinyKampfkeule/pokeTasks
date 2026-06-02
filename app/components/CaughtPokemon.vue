<script setup lang="ts">
  import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'

  const props = defineProps({
    newCaughtPokemon: { type: Array as PropType<NewCaughtPokemon>, required: true }
  })
</script>

<template>
  <div
    class="flex flex-1 overflow-y-auto flex-wrap items-start justify-center content-start gap-2 p-5"
  >
    <CPEntry
      v-for="pokemon in newCaughtPokemon"
      :key="pokemon.pokemon.name"
      :name="pokemon.pokemon.name"
      :is-shiny="pokemon.isShiny"
      :is-already-caught="pokemon.isAlreadyCaught"
      :shiny-sprite="pokemon.pokemon.sprites[0].shiny"
      :default-sprite="pokemon.pokemon.sprites[0].default"
    />
  </div>
</template>
