<script lang="ts" setup>
  const name = defineModel<string>('name')
</script>

<template>
  <UFormField label="Name" name="name" :ui="{ label: 'text-black' }">
    <UInput class="w-full" v-model="name" variant="outline" />
  </UFormField>
</template>
