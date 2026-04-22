import type { PokemonSprites } from './pokemonSprites'
import type { PokemonTypes } from './pokemonTypes'

export type PokemonData = {
  id: number
  name: string
  pokemontypes: PokemonTypes
  sprites: PokemonSprites
}
