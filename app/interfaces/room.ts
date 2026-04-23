import type { TaskEntryInterface } from './taskEntry'

export interface RoomInterface {
  icon: string
  primaryType: string
  secondaryType: string
  primaryColor: string
  secondaryColor: string
  tasks: TaskEntryInterface
}
