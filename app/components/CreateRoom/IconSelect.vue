<script lang="ts" setup>
  const icon = defineModel<string>('icon')

  const open = ref(false)
</script>

<template>
  <UFormField label="Icon" name="icon" :ui="{ label: 'text-(--foreground)' }">
    <UPopover
      v-model:open="open"
      :ui="{
        content: 'w-64 flex flex-row flex-wrap gap-1 p-4'
      }"
    >
      <CreateRoomIconSelectTrigger v-model:icon="icon" />
      <template #content>
        <CreateRoomSelectableIcons v-model:icon="icon" v-model:open="open" />
      </template>
    </UPopover>
  </UFormField>
</template>
