import { useQuery } from '@tanstack/vue-query'
import { roomsFetcher } from '~/fetcher/roomsFetcher'
import type { RoomInterface } from '~/interfaces/room'

export const useGetRoomData = async () => {
  const route = useRoute()
  const roomId = route.params.id as string
  const { data: rooms, suspense } = useQuery<RoomInterface[]>({
    queryKey: ['rooms'],
    queryFn: roomsFetcher
  })

  console.log(rooms.value)

  await suspense

  if (!rooms.value) {
    console.log(suspense)
    throw createError({
      statusCode: 404,
      statusMessage: 'No Rooms found',
      message: 'It seems that there are no rooms available.',
      fatal: true
    })
  }

  const room = rooms.value.filter((room) => room.id === roomId)[0]

  if (!room) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Room not found',
      message: 'The room you are looking for does not exists.',
      fatal: true
    })
  }

  return { room }
}
