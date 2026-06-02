import { defineStore } from 'pinia'

export const useCaughtPokemonStore = defineStore('myCaughtPokemonStore', {
  state: () => {
    return {
      caughtDefault: [],
      caughtShiny: []
    } as { caughtDefault: number[]; caughtShiny: number[] }
  },
  actions: {
    isAlreadyCaught(id: number, shiny: boolean) {
      if (shiny) {
        const isCaught = this.caughtShiny.includes(id)
        if (!isCaught) {
          this.caughtShiny.push(id)
        }
        return isCaught
      } else {
        const isCaught = this.caughtDefault.includes(id)
        if (!isCaught) {
          this.caughtDefault.push(id)
        }
        return isCaught
      }
    }
  }
})
