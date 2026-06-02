import type { PokemonData } from './pokemonData'

export type NewCaughtPokemonData = {
  pokemon: PokemonData
  isShiny: boolean
  isAlreadyCaught: boolean
}
