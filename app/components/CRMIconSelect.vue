<script lang="ts" setup>
  const icon = defineModel<string>('icon')
</script>

<template>
  <UFormField label="Icon" name="icon" :ui="{ label: 'text-black' }">
    <USelectMenu class="w-full" v-model="icon" variant="outline" />
  </UFormField>
</template>
