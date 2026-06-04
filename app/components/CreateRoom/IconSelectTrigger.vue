<script lang="ts" setup>
  const icon = defineModel<string>('icon')
</script>

<template>
  <div
    class="flex items-center justify-center h-8 w-8 ring rounded-md ring-(--foreground)/25 hover:ring-(--primary) shadow-md cursor-pointer focus:ring-(--primary) focus-visible:ring-(--primary)"
  >
    <UIcon :name="icon || 'i-lucide-placeholder'" class="size-4" />
  </div>
</template>

<style></style>
