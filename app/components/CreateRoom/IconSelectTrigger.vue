<script lang="ts" setup>
  const icon = defineModel<string>('icon')
</script>

<template>
  <div
    class="flex items-center justify-center h-8 w-8 border rounded-md border-(--foreground)/25 shadow-md hover:bg-(--foreground)/5 cursor-pointer"
  >
    <UIcon :name="icon || 'i-lucide-placeholder'" class="size-4" />
  </div>
</template>

<style></style>
