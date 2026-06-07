<script lang="ts" setup>
  import { useQuery } from '@tanstack/vue-query'
  import { roomFetcher } from '~/fetcher/roomFetcher'
  import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'

  definePageMeta({
    layout: 'rooms',
    middleware: ['authenticated']
  })

  const openModal = ref(false)
  const newCaughtPokemon = ref<NewCaughtPokemon>([])

  const route = useRoute()
  const roomId = route.params.id as string
  const { data: room, suspense } = useQuery({
    queryKey: ['room', roomId],
    queryFn: () => roomFetcher(roomId)
  })

  await suspense()
</script>

<template>
  <CaughtPokemonModal v-model:open-modal="openModal" v-model:newCaughtPokemon="newCaughtPokemon" />
  <div
    v-if="room"
    class="flex flex-col gap-8 p-8 h-full rounded-md shadow-md"
    :style="{
      backgroundColor: room.secondaryColor
    }"
  >
    <RoomHeader
      :name="room.name"
      :primaryColor="room.primaryColor"
      :secondary-color="room.secondaryColor"
      :type1="room.type1"
      :type2="room.type2"
    />
    <RoomContent
      :roomId="room.id"
      :name="room.name"
      :primary-color="room.primaryColor"
      :secondary-color="room.secondaryColor"
      :type1="room.type1"
      :type2="room.type2"
      :tasks="room.tasks"
    />
  </div>
</template>
