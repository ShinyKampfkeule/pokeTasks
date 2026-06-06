<script lang="ts" setup>
  import { useQuery } from '@tanstack/vue-query'
  import { roomsFetcher } from '~/fetcher/roomsFetcher'
  import type { RoomInterface } from '~/interfaces/room'

  const { data: rooms, suspense } = useQuery({
    queryKey: ['rooms'],
    queryFn: roomsFetcher
  })

  await suspense()

  let filteredRooms = ref<RoomInterface[]>(rooms.value || [])

  watch(rooms, (newRooms) => {
    filteredRooms.value = newRooms ?? []
  })
</script>

<template>
  <RoomsContentHeader />
  <RoomsContentSearchbar :rooms="rooms ?? []" v-model:filteredRooms="filteredRooms" />
  <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
    <RoomCard
      v-if="filteredRooms"
      v-for="room in filteredRooms"
      :key="room.id"
      :id="room.id"
      :name="room.name"
      :icon="room.icon"
      :type1="room.type1"
      :type2="room.type2"
      :primary-color="room.primaryColor"
      :secondary-color="room.secondaryColor"
      :tasks="room.tasks"
      :preview="false"
    />
  </div>
</template>
