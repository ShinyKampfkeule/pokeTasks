<script lang="ts" setup>
  import type { CreateRoomState } from '~/types/createRoomState'

  definePageMeta({
    layout: 'rooms',
    middleware: ['authenticated']
  })

  const state = reactive<CreateRoomState>({
    name: 'New Room',
    icon: 'i-lucide-anvil',
    type1: 'Normal',
    type2: 'Fire',
    primaryColor: '#5e5f5f',
    secondaryColor: '#abacac'
  })
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center gap-4">
    <CreateRoomFormContainer v-model:state="state" />
    <USeparator
      :ui="{
        border: ['border-(--foreground)/10']
      }"
    />
    <div class="h-full w-1/3 flex flex-col gap-8 items-center justify-center">
      <span class="text-xl">Room Card Preview</span>
      <RoomCard
        id=""
        :name="state.name"
        :icon="state.icon"
        :type1="state.type1"
        :type2="state.type2"
        :primary-color="state.primaryColor"
        :secondary-color="state.secondaryColor"
        :tasks="[]"
        :preview="true"
      />
    </div>
  </div>
</template>
