<script lang="ts" setup>
  import { useQuery } from '@tanstack/vue-query'
  import { roomFetcher } from '~/fetcher/roomFetcher'

  const route = useRoute()
  const roomId = route.params.id as string
  const { data: room, suspense } = useQuery({
    queryKey: ['room', roomId],
    queryFn: () => roomFetcher(roomId)
  })

  await suspense()
</script>

<template>
  <div
    v-if="room"
    class="flex flex-col items-center h-screen"
    :style="{
      backgroundColor: room.secondaryColor
    }"
  >
    <RoomTasksHeader :primaryColor="room.primaryColor" />
    <RoomTasksContainer
      :roomId="room.id"
      :name="room.name"
      :primary-color="room.primaryColor"
      :secondary-color="room.secondaryColor"
      :type1="room.type1"
      :type2="room.type2"
      :tasks="room.tasks"
    />
    <MenuBar />
  </div>
</template>
