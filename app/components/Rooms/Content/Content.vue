<script lang="ts" setup>
  import { useQuery } from '@tanstack/vue-query'
  import { roomsFetcher } from '~/fetcher/roomsFetcher'

  const { data: rooms, suspense } = useQuery({
    queryKey: ['rooms'],
    queryFn: roomsFetcher
  })

  await suspense()
</script>

<template>
  <div class="grow flex flex-col gap-4 p-4">
    <div class="flex items-center justify-between">
      <span class="text-lg font-medium">Room Overview</span>
      <div class="flex items-center gap-4">
        <UIcon name="i-lucide-ellipsis-vertical" />
        <CreateRoomModal />
      </div>
    </div>
    <div class="flex items-center bg-(--primary) p-4 gap-4 rounded-md">
      <UIcon name="i-lucide-filter" />
      <span>Filters</span>
      <UIcon name="i-lucide-chevron-down" />
      <USeparator orientation="vertical" class="h-6" />
      <UIcon name="i-lucide-search" />
      <span class="grow">Search</span>
      <span class="text-sm">4 Rooms found</span>
    </div>
    <UContainer>
      <RoomCard
        v-if="rooms"
        v-for="room in rooms"
        :key="room.id"
        :id="room.id"
        :name="room.name"
        :icon="room.icon"
        :type1="room.type1"
        :type2="room.type2"
        :primary-color="room.primaryColor"
        :secondary-color="room.secondaryColor"
        :tasks="room.tasks"
      />
    </UContainer>
  </div>
</template>
