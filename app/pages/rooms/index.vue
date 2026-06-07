<script setup lang="ts">
  definePageMeta({
    layout: 'rooms',
    middleware: ['authenticated']
  })
</script>

<template>
  <RoomsContent />
</template>
