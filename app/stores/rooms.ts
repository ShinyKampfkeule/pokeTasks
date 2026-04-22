import { defineStore } from 'pinia'
import type { RoomsInterface } from '~/interfaces/rooms'
import type { TaskData } from '~/types/taskData'

export const useRoomsStore = defineStore('RoomsStore', {
  state: () => {
    return {
      rooms: {
        'Living Room': {
          icon: 'i-lucide-house',
          primaryType: 'Normal',
          secondaryType: 'Ground',
          primaryColor: '#00367C',
          secondaryColor: '#A9CFFF',
          tasks: []
        },
        Kitchen: {
          icon: 'i-lucide-cooking-pot',
          primaryType: 'Electric',
          secondaryType: 'Fire',
          primaryColor: '#5A5700',
          secondaryColor: '#FFFB81',
          tasks: []
        },
        Bath: {
          icon: 'i-lucide-toilet',
          primaryType: 'Water',
          secondaryType: 'Poison',
          primaryColor: '#024767',
          secondaryColor: '#9DE0FF',
          tasks: []
        },
        Balcony: {
          icon: 'i-lucide-bird',
          primaryType: 'Bug',
          secondaryType: 'Flying',
          primaryColor: '#346B00',
          secondaryColor: '#B7FF73',
          tasks: []
        }
      } as RoomsInterface
    }
  },
  actions: {
    addTask(roomName: string, task: TaskData) {
      if (!this.rooms[roomName]) return

      this.rooms[roomName].tasks.push(task)
    }
  }
})
