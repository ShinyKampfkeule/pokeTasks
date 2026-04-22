import type { TaskData } from '~/types/taskData'

export interface RoomInterface {
  icon: string
  primaryType: string
  secondaryType: string
  primaryColor: string
  secondaryColor: string
  tasks: TaskData[]
}
