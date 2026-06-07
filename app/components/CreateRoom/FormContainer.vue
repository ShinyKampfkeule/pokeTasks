<script lang="ts" setup>
  import type { FormSubmitEvent } from '@nuxt/ui'
  import type { CreateRoomState } from '~/types/createRoomState'
  import * as v from 'valibot'
  import { useMutation, useQueryClient } from '@tanstack/vue-query'

  const state = defineModel<CreateRoomState>('state')

  const schema = v.object({
    name: v.string(),
    icon: v.string(),
    type1: v.string(),
    type2: v.string(),
    primaryColor: v.string(),
    secondaryColor: v.string()
  })
  type Schema = v.InferOutput<typeof schema>

  const queryClient = useQueryClient()
  const { isPending, isError, error, isSuccess, mutate } = useMutation({
    mutationFn: () =>
      $fetch<unknown>('/api/room/create', {
        method: 'POST',
        body: state.value
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['rooms'] })
      navigateTo('/rooms')
    }
  })

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    mutate()
  }
</script>

<template>
  <UForm
    v-if="state"
    class="flex flex-col items-center justify-center gap-8 w-2/3"
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <div class="w-1/2 flex items-end gap-4">
      <CreateRoomIconSelect v-model:icon="state.icon" />
      <CreateRoomNameInput v-model:name="state.name" />
    </div>
    <div class="w-1/2 flex gap-12">
      <CreateRoomTypeSelect v-model:type="state.type1" label="Type 1" />
      <CreateRoomTypeSelect v-model:type="state.type2" label="Type 2" />
    </div>
    <div class="flex justify-center gap-12">
      <CreateRoomColorPicker
        v-model:color="state.primaryColor"
        label="Primary Color"
        name="primaryColor"
      />
      <CreateRoomColorPicker
        v-model:color="state.secondaryColor"
        label="Secondary Color"
        name="secondaryColor"
      />
    </div>

    <UButton
      type="submit"
      :ui="{
        base: ['bg-(--secondary) text-(--foreground)']
      }"
      >Create Room</UButton
    >
  </UForm>
</template>
