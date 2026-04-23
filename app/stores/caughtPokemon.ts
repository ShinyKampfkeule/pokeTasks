import { defineStore } from 'pinia'

export const useCaughtPokemonStore = defineStore('myCaughtPokemonStore', {
  state: () => {
    return {
      caughtDefault: [1, 16, 32, 48, 96, 135, 185, 512, 793],
      caughtShiny: [1, 16, 27, 30]
    } as { caughtDefault: number[]; caughtShiny: number[] }
  },
  actions: {
    addCaughtPokemon(id: number, shiny: boolean) {
      if (shiny) {
        this.caughtShiny.push(id)
      } else {
        this.caughtDefault.push(id)
      }
    },
    isAlreadyCaught(id: number, shiny: boolean) {
      if (shiny) {
        return this.caughtShiny.includes(id)
      } else {
        return this.caughtDefault.includes(id)
      }
    }
  }
})
