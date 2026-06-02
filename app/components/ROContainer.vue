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
  <div class="flex-1 flex flex-wrap items-start justify-center gap-10 pt-10 overflow-y-auto">
    <div class="flex flex-wrap justify-center max-w-229 gap-5">
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
      <CreateNewRoom />
    </div>
  </div>
</template>
