<script lang="ts" setup>
  import type { CreateRoomState } from '~/types/createRoomState'

  const state = reactive<CreateRoomState>({
    name: 'New Room',
    icon: 'i-lucide-anvil',
    type1: 'Normal',
    type2: 'Fire',
    primaryColor: '#000',
    secondaryColor: '#000'
  })
</script>

<template>
  <UModal
    :ui="{
      overlay: 'bg-(--foreground)/95',
      content:
        'bg-(--background) text-(--foreground) min-w-2/4 min-h-2/3 p-4 flex flex-col gap-8 items-center',
      close: 'text-black hover:bg-transparent hover:text-red-500 cursor-pointer'
    }"
  >
    <UButton
      label="New Room"
      :ui="{
        base: ['bg-(--secondary) hover:bg-(--secondary)/75 cursor-pointer'],
        label: ['text-(--foreground)']
      }"
    />

    <template #content>
      <span class="text-xl">Room Preview</span>
      <RoomCardPreview
        :name="state.name"
        :icon="state.icon"
        :type1="state.type1"
        :type2="state.type2"
        :primary-color="state.primaryColor"
        :secondary-color="state.secondaryColor"
      />
      <USeparator
        :ui="{
          border: ['border-(--foreground)/10']
        }"
      />
      <CreateRoomFormContainer v-model:state="state" />
    </template>
  </UModal>
</template>
