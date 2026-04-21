<script setup lang="ts">
  const props = defineProps({
    label: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true }
  })

  const value = ref(false)
</script>

<template>
  <div
    class="flex justify-between p-5 rounded-md"
    :style="{ backgroundColor: secondaryColor, color: primaryColor }"
  >
    <UCheckbox ref="taskState" :label v-model="value" :ui="{ label: `text-${primaryColor}` }" />
    <UIcon name="i-lucide-trash-2" size="20" />
  </div>
</template>
