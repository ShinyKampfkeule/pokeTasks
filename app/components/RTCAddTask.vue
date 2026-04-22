<script lang="ts" setup>
  import type { TaskData } from '~/types/taskData'

  const props = defineProps({
    roomName: { type: String, required: true },
    primaryColor: { type: String, required: true }
  })

  const value = ref('')
  const roomsStore = useRoomsStore()

  const addTask = () => {
    if (value.value.trim() === '') return

    roomsStore.addTask(props.roomName, { id: Date.now(), title: value.value })

    value.value = ''
  }
</script>

<template>
  <div class="flex gap-5">
    <UInput
      v-model="value"
      placeholder="Add new task..."
      variant="outline"
      size="xl"
      class="grow"
      :style="{ color: primaryColor }"
      :ui="{
        base: 'ring-neutral-400 bg-transparent placeholder:text-neutral-400 focus-visible:ring-neutral-400'
      }"
    />
    <UButton
      class="bg-[#FFDD00] hover:bg-[#e8c902] cursor-pointer h-full w-25 flex justify-center"
      :style="{ color: primaryColor }"
      @click="addTask"
    >
      <UIcon name="i-lucide-plus" />
      <span>Add</span>
    </UButton>
  </div>
</template>
