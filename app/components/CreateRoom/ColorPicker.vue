<script lang="ts" setup>
  const color = defineModel<string>('color')

  const props = defineProps({
    label: { type: String, required: true },
    name: { type: String, required: true }
  })
</script>

<template>
  <UFormField :label="label" :name="name" :ui="{ label: 'text-black' }">
    <UColorPicker v-model="color" />
  </UFormField>
</template>
