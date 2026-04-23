<script setup lang="ts">
  const props = defineProps({
    id: { type: String, required: true },
    label: { type: String, required: true },
    completed: { type: Boolean, required: true },
    confirmedCompletion: { type: Boolean, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    roomName: { type: String, required: true }
  })

  const roomsStore = useRoomsStore()
</script>

<template>
  <div
    class="flex justify-between px-5 py-3 rounded-md"
    :style="{
      backgroundColor: confirmedCompletion ? '#39df9e' : completed ? '#00dc8230' : secondaryColor,
      color: primaryColor,
      border: `1px solid ${completed ? '#00dc82' : primaryColor}`
    }"
    @click="roomsStore.setTaskCompletionStatus(roomName, id)"
  >
    <span>{{ label }}</span>
    <UIcon
      name="i-lucide-trash-2"
      size="20"
      class="text-red-500 cursor-pointer"
      @click="roomsStore.removeTask(roomName, id)"
    />
  </div>
</template>
