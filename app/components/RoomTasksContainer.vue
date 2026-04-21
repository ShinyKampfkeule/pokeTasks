<script lang="ts" setup>
  const tasks = [
    { id: 1, title: 'I´m a task' },
    { id: 2, title: 'I`m a task too' },
    { id: 3, title: 'I am also an task' }
  ]

  const props = defineProps({
    roomName: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    primaryType: { type: String, required: true },
    secondaryType: { type: String, required: true }
  })
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
      <RTCAddTask :primary-color="primaryColor" />
      <div class="flex flex-col gap-2.5">
        <Task
          v-for="task in tasks"
          :key="task.id"
          :label="task.title"
          :primary-color="primaryColor"
          :secondary-color="secondaryColor"
        />
      </div>
    </div>
  </div>
</template>
