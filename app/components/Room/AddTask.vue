<script setup lang="ts">
  import { useMutation, useQueryClient } from '@tanstack/vue-query'

  const props = defineProps({
    roomId: { type: String, required: true },
    primaryColor: { type: String, required: true }
  })

  const value = ref('')

  const queryClient = useQueryClient()
  const { isPending, isError, error, isSuccess, mutate } = useMutation({
    mutationFn: () =>
      $fetch<unknown>('/api/tasks/addTask', {
        method: 'POST',
        body: {
          title: value.value,
          roomId: props.roomId
        }
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['room', props.roomId] })
      await queryClient.invalidateQueries({ queryKey: ['rooms'] })
      value.value = ''
    }
  })

  const addTask = () => {
    if (value.value.trim() === '') return

    mutate()
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
