<script lang="ts" setup>
  import { useMutation, useQueryClient } from '@tanstack/vue-query'
  import type { NewCaughtPokemon } from '~/types/newCaughtPokemon'
  import type { TaskDataInterface } from '~/types/taskData'

  const props = defineProps({
    roomId: { type: String, required: true },
    name: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    type1: { type: String, required: true },
    type2: { type: String, required: true },
    tasks: { type: Array as PropType<TaskDataInterface[]>, required: true }
  })

  const emit = defineEmits<{
    (e: 'update:newCaughtPokemon', value: NewCaughtPokemon): void
    (e: 'update:openModal', value: boolean): void
  }>()

  // const { handleTaskConfirmation } = useHandleTaskConfirmation()

  const queryClient = useQueryClient()
  const { isPending, isError, error, isSuccess, mutate } = useMutation({
    mutationFn: () =>
      $fetch<unknown>('/api/tasks/confirmCompletedTasks', {
        method: 'POST',
        body: {
          completedTasks: props.tasks
            .filter((task) => task.completed === true && task.confirmedCompletion !== true)
            .map((task) => task.id)
        }
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['room', props.roomId] })
    }
  })
</script>

<template>
  <div
    class="w-full h-full flex flex-col overflow-hidden justify-between gap-10 p-10"
    :style="{ color: primaryColor }"
  >
    <RoomAddTask :room-id="roomId" :primary-color="primaryColor" />
    <div class="flex flex-col gap-2.5 overflow-y-auto grow">
      <RoomTask
        v-for="task in tasks"
        :key="task.id"
        :room-id="roomId"
        :taskId="task.id"
        :label="task.title"
        :completed="task.completed"
        :confirmed-completion="task.confirmedCompletion"
        :primary-color="primaryColor"
        :secondary-color="secondaryColor"
        :room-name="name"
      />
    </div>
    <div class="flex justify-center">
      <UButton
        class="cursor-pointer w-50 flex justify-center h-10"
        :ui="{
          base: 'bg-(--accent) text-(--foreground) hover:bg-(--accent)/75 shadow-md rounded-md'
        }"
        @click="mutate()"
      >
        Confirm completed tasks
      </UButton>
    </div>
  </div>
</template>
