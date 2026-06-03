<script setup lang="ts">
  import Notifications from './Notifications.vue'
  import NewTasks from './NewTasks.vue'
  import Messages from './Messages.vue'
</script>

<template>
  <div class="flex flex-col gap-4 p-4 w-120 border-l border-l-(--primary)/25">
    <Notifications />
    <NewTasks />
    <Messages />
  </div>
</template>
