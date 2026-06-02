import type { PokemonData } from '~/types/pokemonData'
import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'

export const useCatchEngine = () => {
  const generateCaughtPokemon = (
    confirmedTasks: number,
    catchablePokemon: PokemonData[],
    isAlreadyCaught: (id: number, isShiny: boolean) => boolean
  ): NewCaughtPokemon => {
    if (!catchablePokemon.length || confirmedTasks <= 0) {
      return []
    }

    return Array.from({ length: confirmedTasks }, () => {
      const caughtPokemon = catchablePokemon[Math.floor(Math.random() * catchablePokemon.length)]

      if (!caughtPokemon) return undefined

      const isShiny = Math.random() < 1 / 60

      return {
        pokemon: caughtPokemon,
        isShiny,
        isAlreadyCaught: isAlreadyCaught(caughtPokemon.id, isShiny)
      }
    }).filter(Boolean) as NewCaughtPokemon
  }

  return {
    generateCaughtPokemon
  }
}
