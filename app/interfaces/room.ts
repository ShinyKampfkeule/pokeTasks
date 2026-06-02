import type { TaskDataInterface } from '~/types/taskData'

export interface RoomInterface {
  id: string
  name: string
  icon: string
  type1: string
  type2: string
  primaryColor: string
  secondaryColor: string
  tasks: TaskDataInterface[]
}
