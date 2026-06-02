<script lang="ts" setup>
  import type { CreateRoomState } from '~/types/createRoomState'

  const openModal = defineModel<boolean>('openModal')

  const state = reactive<CreateRoomState>({
    name: 'New Room',
    icon: 'lucide-placeholder',
    type1: 'Normal',
    type2: 'Fire',
    primaryColor: '#000',
    secondaryColor: '#000'
  })
</script>

<template>
  <UModal
    v-model:open="openModal"
    title="Create new Room"
    :ui="{
      content: 'bg-background text-black min-w-2/4 min-h-2/3',
      title: 'text-black',
      description: 'text-black',
      close: 'text-black hover:bg-transparent hover:text-red-500 cursor-pointer',
      body: 'flex flex-col items-center justify-between'
    }"
  >
    <template #body>
      <div class="flex flex-col gap-8 justify-center items-center w-full">
        <span>Room Preview</span>
        <RoomCardPreview
          :name="state.name"
          :icon="state.icon"
          :type1="state.type1"
          :type2="state.type2"
          :primary-color="state.primaryColor"
          :secondary-color="state.secondaryColor"
        />
        <USeparator />
        <CRMFormContainer v-model:state="state" />
      </div>
    </template>
  </UModal>
</template>
