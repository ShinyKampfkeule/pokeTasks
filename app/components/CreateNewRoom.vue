<script lang="ts" setup>
  const openModal = ref(false)
</script>

<template>
  <CreateRoomModal v-model:open-modal="openModal" />
  <div
    @click="openModal = true"
    class="flex flex-col items-center justify-center gap-5 w-md h-50 border-4 border-neutral-400 text-neutral-400 rounded-lg cursor-pointer"
  >
    <UIcon name="lucide-plus" size="64" />
  </div>
</template>
