<script lang="ts" setup>
  const props = defineProps({
    roomName: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    primaryType: { type: String, required: true },
    secondaryType: { type: String, required: true }
  })

  const roomsStore = useRoomsStore()
  const room = roomsStore.rooms[props.roomName]

  if (!room) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Room not found',
      message: 'The room you are looking for does not exists.',
      fatal: true
    })
  }
</script>

<template>
  <div
    class="w-2/3 flex-1 flex flex-col items-start gap-2.5 overflow-y-auto bg-neutral-200 rounded-md"
  >
    <div class="w-full flex flex-col justify-center gap-10 p-10" :style="{ color: primaryColor }">
      <RTCHeader
        :room-name="roomName"
        :primary-type="primaryType"
        :secondary-type="secondaryType"
      />
      <RTCAddTask :room-name="roomName" :primary-color="primaryColor" />
      <div class="flex flex-col gap-2.5">
        <Task
          v-for="task in room.tasks"
          :key="task.id"
          :id="task.id"
          :label="task.title"
          :primary-color="primaryColor"
          :secondary-color="secondaryColor"
        />
      </div>
    </div>
  </div>
</template>
