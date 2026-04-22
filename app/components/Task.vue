<script setup lang="ts">
  import type { TaskData } from '~/types/taskData'

  const props = defineProps({
    id: { type: Number, required: true },
    label: { type: String, required: true },
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true }
  })

  const checked = ref(false)
  const tasks: globalThis.Ref<TaskData[]> = useState('tasks')

  const removeTask = () => {
    tasks.value = tasks.value.filter((task) => task.id !== props.id)
  }
</script>

<template>
  <div
    class="flex justify-between px-5 py-3 rounded-md"
    :style="{
      backgroundColor: checked ? '#00dc8230' : secondaryColor,
      color: primaryColor,
      border: `1px solid ${checked ? '#00dc82' : primaryColor}`
    }"
  >
    <UCheckbox ref="taskState" :label v-model="checked" :ui="{ label: `text-${primaryColor}` }" />
    <UIcon
      name="i-lucide-trash-2"
      size="20"
      class="text-red-500 cursor-pointer"
      @click="removeTask"
    />
  </div>
</template>
