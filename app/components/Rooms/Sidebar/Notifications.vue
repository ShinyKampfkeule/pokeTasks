<script lang="ts" setup>
  import GadgetContainer from './GadgetContainer.vue'
  import GadgetEntryContainer from './GadgetEntryContainer.vue'
  import GadgetTitle from './GadgetTitle.vue'
  import type { Notification } from '~/types/notification.js'

  const notifications: Notification[] = [
    {
      id: 1,
      title: 'Child1 completed 3 Tasks in Living Room',
      time: '20min ago'
    },
    {
      id: 2,
      title: 'Child2 completed 1 Tasks in Kitchen',
      time: '15min ago'
    },
    {
      id: 3,
      title: 'Child1 completed 2 Tasks in Kidsroom1',
      time: '10min ago'
    }
  ]
</script>

<template>
  <GadgetContainer>
    <GadgetTitle title="Notifications" />
    <div class="flex flex-col-reverse">
      <GadgetEntryContainer v-for="notification in notifications" :key="notification.id">
        <span class="truncate w-4/5">{{ notification.title }}</span>
        <span class="w-1/5 text-sm text-end">{{ notification.time }}</span>
      </GadgetEntryContainer>
    </div>
  </GadgetContainer>
</template>
