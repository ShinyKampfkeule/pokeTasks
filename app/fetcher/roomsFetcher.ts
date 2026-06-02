import type { RoomInterface } from '~/interfaces/room'

export const roomsFetcher = () => $fetch<RoomInterface[]>('/api/rooms')
