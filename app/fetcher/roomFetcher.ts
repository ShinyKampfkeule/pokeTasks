import type { RoomInterface } from '~/interfaces/room'

export const roomFetcher = (roomId: String) => $fetch<RoomInterface>(`/api/room/${roomId}`)
