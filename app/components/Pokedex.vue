<script lang="ts" setup>
  const caughtPokemon = useCaughtPokemonStore()

  const showShinyDex = useState<boolean>('showShinyDex', () => false)

  const pokemonList = usePokemonStore()
</script>

<template>
  <div class="relative flex justify-center">
    <ShowShinyDex />
    <div class="flex flex-wrap gap-1 max-w-372.5">
      <PokedexCard
        v-for="pokemon in pokemonList.pokemon.filter((pokemon) =>
          showShinyDex
            ? caughtPokemon.caughtShiny.includes(pokemon.id)
            : caughtPokemon.caughtDefault.includes(pokemon.id)
        )"
        :key="pokemon.id"
        :id="pokemon.id"
        :name="pokemon.name"
        :sprites="pokemon.sprites"
        :types="pokemon.pokemontypes"
        :show-shiny-dex="showShinyDex"
      />
    </div>
  </div>
</template>
