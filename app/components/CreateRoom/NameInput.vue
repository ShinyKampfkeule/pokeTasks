<script lang="ts" setup>
  const name = defineModel<string>('name')
</script>

<template>
  <UFormField label="Name" name="name" :ui="{ label: 'text-(--foreground)', root: 'w-full' }">
    <UInput
      v-model="name"
      variant="outline"
      :ui="{
        root: 'w-full',
        base: 'bg-transparent shadow-md ring ring-(--foreground)/25 hover:ring-(--primary) focus:ring-(--primary) focus-visible:ring-(--primary)'
      }"
    />
  </UFormField>
</template>
