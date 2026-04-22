<script lang="ts" setup>
  const props = defineProps({
    shinyIsCaught: { type: Boolean, required: true }
  })
</script>

<template>
  <div
    class="absolute right-2 top-2 text-xs p-1 bg-blue-300 border border-blue-700 rounded-md cursor-pointer"
    v-if="shinyIsCaught"
  >
    <span>Shiny</span>
  </div>
</template>
