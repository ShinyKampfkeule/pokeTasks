<script setup lang="ts">
  import HUser from './User.vue'
</script>

<template>
  <HUser />
  <UColorModeButton
    :ui="{
      base: ['hover:bg-(--foreground)/10 text-(--foreground) cursor-pointer']
    }"
  />
</template>
