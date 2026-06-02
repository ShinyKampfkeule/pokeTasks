import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'

export const handleTaskConfirmation = (roomName: string, type1: string, type2: string) => {
  const pokemon = usePokemonStore()
  const caughtPokemon = useCaughtPokemonStore()
  const roomsStore = useRoomsStore()

  const emit = defineEmits<{
    (e: 'update:newCaughtPokemon', value: NewCaughtPokemon): void
    (e: 'update:openModal', value: boolean): void
  }>()

  const confirmedTasks = roomsStore.confirmTaskCompletion(roomName)
  const catchablePokemon = pokemon.getCachtablePokemon([
    type1.toLocaleLowerCase(),
    type2.toLocaleLowerCase()
  ])
  const newCaughtPokemonList: NewCaughtPokemon = Array.from({ length: confirmedTasks }, () => {
    const index = Math.floor(Math.random() * catchablePokemon.length)
    const newCaughtPokemonSelected = catchablePokemon[index]
    if (!newCaughtPokemonSelected) return undefined

    const isShiny = Math.floor(Math.random() * 60) === Math.floor(Math.random() * 60)
    const isAlreadyCaught = caughtPokemon.isAlreadyCaught(newCaughtPokemonSelected.id, isShiny)
    return {
      pokemon: newCaughtPokemonSelected,
      isShiny: isShiny,
      isAlreadyCaught: isAlreadyCaught
    }
  }).filter((pokemon) => pokemon !== undefined)
  emit('update:newCaughtPokemon', newCaughtPokemonList)
  emit('update:openModal', true)
}
