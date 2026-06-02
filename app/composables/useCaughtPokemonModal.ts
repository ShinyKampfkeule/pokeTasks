import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'

export const useCaughtPokemonModal = () => {
  const openModal = ref(false)
  const newCaughtPokemon = ref<NewCaughtPokemon>([])

  const show = (pokemonList: NewCaughtPokemon) => {
    newCaughtPokemon.value = pokemonList
    openModal.value = true
  }

  const close = () => {
    openModal.value = false
    newCaughtPokemon.value = []
  }

  return {
    openModal,
    newCaughtPokemon,
    show,
    close
  }
}
