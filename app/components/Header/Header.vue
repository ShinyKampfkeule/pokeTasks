<script setup>
  import HTitle from './HTitle.vue'
  import HMenu from './HMenu.vue'
  import HRightContent from './HRightContent.vue'
</script>

<template>
  <UHeader
    :ui="{
      root: ['bg-primary border-none shadow-md'],
      container: ['mx-0 max-w-full'],
      center: ['h-full'],
      right: ['gap-4']
    }"
  >
    <template #title>
      <HTitle />
    </template>

    <HMenu />

    <template #right>
      <HRightContent />
    </template>
  </UHeader>
</template>
