<script lang="ts" setup>
  import type { FormSubmitEvent } from '@nuxt/ui'
  import type { CreateRoomState } from '~/types/createRoomState'
  import * as v from 'valibot'

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

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    console.log(event.data)
  }
</script>

<template>
  <UForm
    v-if="state"
    class="flex flex-col gap-4 w-1/2"
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <CRMNameInput v-model:name="state.name" />
    <CRMIconSelect v-model:icon="state.icon" />
    <div class="w-full flex gap-12">
      <CRMTypeSelect v-model:type="state.type1" label="Type 1" />
      <CRMTypeSelect v-model:type="state.type2" label="Type 2" />
    </div>
    <div class="flex justify-center gap-12">
      <CRMColorPicker
        v-model:color="state.primaryColor"
        label="Primary Color"
        name="primaryColor"
      />
      <CRMColorPicker
        v-model:color="state.secondaryColor"
        label="Secondary Color"
        name="secondaryColor"
      />
    </div>

    <UButton type="submit">Create Room</UButton>
  </UForm>
</template>
