<script setup lang="ts">
  import { Rooms } from '#imports'
</script>

<template>
  <div class="flex flex-col h-screen bg-background">
    <div class="h-30 flex flex-col items-center justify-center pt-10 gap-2.5 text-black shrink-0">
      <span class="text-3xl font-medium">PokéTasks</span>
      <span class="text-xl">Complete tasks to catch Pokémon</span>
    </div>
    <div class="flex-1 flex flex-wrap items-start justify-center gap-10 pt-10 overflow-y-auto">
      <div class="flex flex-wrap justify-center max-w-229 gap-5">
        <RoomCard
          v-for="(roomData, roomName) in Rooms"
          :key="roomName"
          :name="roomName"
          :icon="roomData.icon"
          :primary-type="roomData.primaryType"
          :secondary-type="roomData.secondaryType"
          :primary-color="roomData.primaryColor"
          :secondary-color="roomData.secondaryColor"
        />
      </div>
    </div>
    <MenuBar />
  </div>
</template>
