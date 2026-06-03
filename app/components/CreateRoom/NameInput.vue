<script lang="ts" setup>
  const name = defineModel<string>('name')
</script>

<template>
  <UFormField label="Name" name="name" :ui="{ label: 'text-black', root: 'w-full' }">
    <UInput
      v-model="name"
      variant="outline"
      :ui="{
        root: 'w-full',
        base: 'bg-transparent shadow-md border-1 border-(--foreground)/25 focus-visible:ring-(--primary)'
      }"
    />
  </UFormField>
</template>
