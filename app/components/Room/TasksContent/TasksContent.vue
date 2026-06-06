<script lang="ts" setup>
  import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'
  import type { TaskDataInterface } from '~/types/taskData'

  const props = defineProps({
    roomId: { type: String, required: true },
    roomName: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    type1: { type: String, required: true },
    type2: { type: String, required: true },
    tasks: { type: Object as PropType<TaskDataInterface[]>, required: true },
    newCaughtPokemon: { type: Array as PropType<NewCaughtPokemon>, required: true },
    openModal: { type: Boolean, required: true }
  })

  const emit = defineEmits<{
    (e: 'update:newCaughtPokemon', value: NewCaughtPokemon): void
    (e: 'update:openModal', value: boolean): void
  }>()

  const { handleTaskConfirmation } = useHandleTaskConfirmation()
</script>

<template>
  <div
    class="w-full h-full flex flex-col overflow-hidden justify-between gap-10 p-10"
    :style="{ color: primaryColor }"
  >
    <RoomTasksContentAddTask :room-name="roomName" :primary-color="primaryColor" />
    <div class="flex flex-col gap-2.5 overflow-y-auto grow">
      <Task
        v-for="task in tasks"
        :key="task.id"
        :room-id="roomId"
        :taskId="task.id"
        :label="task.title"
        :completed="task.completed"
        :confirmed-completion="task.confirmedCompletion"
        :primary-color="primaryColor"
        :secondary-color="secondaryColor"
        :room-name="roomName"
      />
    </div>
    <div class="flex justify-center">
      <UButton
        class="cursor-pointer w-50 flex justify-center h-10"
        @click="handleTaskConfirmation(roomName, type1, type2)"
      >
        Confirm completed tasks
      </UButton>
    </div>
  </div>
</template>
