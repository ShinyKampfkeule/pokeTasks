<script lang="ts" setup>
  import GadgetContainer from './GadgetContainer.vue'
  import GadgetEntryContainer from './GadgetEntryContainer.vue'
  import GadgetTitle from './GadgetTitle.vue'
  import type { Message } from '~/types/message.js'

  const messages: Message[] = [
    {
      id: 1,
      message: 'Can you verify my tasks?',
      sender: 'Child1',
      time: '20min ago'
    },
    {
      id: 2,
      message: 'I found a shiny Charizard!',
      sender: 'Child2',
      time: '18min ago'
    },
    {
      id: 3,
      message: 'I can’t complete my balcony tasks today.',
      sender: 'Child1',
      time: '15min ago'
    }
  ]
</script>

<template>
  <GadgetContainer>
    <GadgetTitle title="New Messages" />
    <div class="flex flex-col-reverse">
      <GadgetEntryContainer v-for="message in messages" :key="message.id">
        <span class="truncate w-2/5">{{ message.message }}</span>
        <span class="w-2/5">{{ message.sender }}</span>
        <span class="w-1/5 text-sm text-end">{{ message.time }}</span>
      </GadgetEntryContainer>
    </div>
  </GadgetContainer>
</template>
