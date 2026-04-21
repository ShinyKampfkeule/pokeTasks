<script lang="ts" setup>
  import { Rooms } from '#imports'

  const route = useRoute()
  const roomName = route.params.id as string
  const roomData = Rooms[roomName]
</script>

<template>
  <div
    class="flex flex-col items-center h-screen"
    :style="{
      backgroundColor: roomData && roomData.secondaryColor
    }"
  >
    <RoomTasksHeader :primaryColor="roomData ? roomData?.primaryColor : ''" />
    <RoomTasksContainer
      :roomName="roomName"
      :primary-color="roomData ? roomData?.primaryColor : '#000'"
      :secondary-color="roomData ? roomData?.secondaryColor : '#000'"
      :primary-type="roomData ? roomData?.primaryType : 'Normal'"
      :secondary-type="roomData ? roomData?.secondaryType : 'Normal'"
    />
    <MenuBar />
  </div>
</template>
