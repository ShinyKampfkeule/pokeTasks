import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'

export const useHandleTaskConfirmation = () => {
  const roomsStore = useRoomsStore()
  const pokemon = usePokemonStore()
  const caughtPokemon = useCaughtPokemonStore()

  const { generateCaughtPokemon } = useCatchEngine()

  const handleTaskConfirmation = (
    roomName: string,
    primaryType: string,
    secondaryType: string
  ): NewCaughtPokemon => {
    const confirmedTasks = roomsStore.confirmTaskCompletion(roomName)

    const catchablePokemon = pokemon.getCachtablePokemon([
      primaryType.toLowerCase(),
      secondaryType.toLowerCase()
    ])

    return generateCaughtPokemon(confirmedTasks, catchablePokemon, caughtPokemon.isAlreadyCaught)
  }

  return {
    handleTaskConfirmation
  }
}
