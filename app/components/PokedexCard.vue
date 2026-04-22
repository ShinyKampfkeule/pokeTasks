<script lang="ts" setup>
  import type { PokemonSprites } from '~/types/pokemonSprites'
  import type { PokemonTypes } from '~/types/pokemonTypes'

  const props = defineProps({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    sprites: { type: [] as PropType<PokemonSprites>, required: true },
    types: { type: Object as PropType<PokemonTypes>, required: true },
    showShinyDex: { type: Boolean, required: true }
  })

  const caughtPokemon = useCaughtPokemonStore()

  const defaultIsCaught = caughtPokemon.caughtDefault.includes(props.id)
  const shinyIsCaught = caughtPokemon.caughtShiny.includes(props.id)
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center gap-2.5 w-60 h-50 border rounded-md"
    v-if="!showShinyDex ? defaultIsCaught : shinyIsCaught"
  >
    <PCShinyBadge :shiny-is-caught="shinyIsCaught" />
    <PCPokemonImage
      :sprites="sprites"
      :show-shiny-dex="showShinyDex"
      :default-is-caught="defaultIsCaught"
      :shiny-is-caught="shinyIsCaught"
    />
    <PCPokemonInformation :id="id" :name="name" />
    <PCPokemonBadges
      :first-type="types[0].type.name"
      :second-type="types.length === 2 ? types[1].type.name : undefined"
    />
  </div>
</template>
