<script lang="ts" setup>
  import GadgetContainer from './GadgetContainer.vue'
  import GadgetEntryContainer from './GadgetEntryContainer.vue'
  import GadgetTitle from './GadgetTitle.vue'
  import type { NewTask } from '~/types/newTask'

  const newTasks: NewTask[] = [
    {
      id: 1,
      title: 'Remove Dust',
      room: 'Living Room',
      time: '20min ago'
    },
    {
      id: 2,
      title: 'Clean Dishes',
      room: 'Kitchen',
      time: '15min ago'
    },
    {
      id: 3,
      title: 'Vacuum Floor',
      room: 'Living Room',
      time: '10min ago'
    },
    {
      id: 4,
      title: 'Remove Toys',
      room: 'Kidsroom2',
      time: '10min ago'
    }
  ]
</script>
<template>
  <GadgetContainer>
    <GadgetTitle title="New Tasks" />
    <div class="flex flex-col-reverse">
      <GadgetEntryContainer v-for="newTask in newTasks" :key="newTask.id">
        <span class="truncate w-2/5">{{ newTask.title }}</span>
        <span class="w-2/5">{{ newTask.room }}</span>
        <span class="w-1/5 text-sm text-end">{{ newTask.time }}</span>
      </GadgetEntryContainer>
    </div>
  </GadgetContainer>
</template>
