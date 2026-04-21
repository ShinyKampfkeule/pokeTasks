<script lang="ts" setup>
  const value = ref('')

  const props = defineProps({
    primaryColor: { type: String, required: true }
  })
</script>

<template>
  <div class="flex gap-5">
    <UInput
      v-model="value"
      placeholder="Add new task..."
      variant="outline"
      size="xl"
      class="grow"
      :style="{ color: primaryColor }"
      :ui="{
        base: 'ring-neutral-400 bg-transparent placeholder:text-neutral-400 focus-visible:ring-neutral-400'
      }"
    />
    <UButton
      class="bg-[#FFDD00] hover:bg-[#e8c902] cursor-pointer h-full w-25 flex justify-center"
      :style="{ color: primaryColor }"
    >
      <UIcon name="i-lucide-plus" />
      <span>Add</span>
    </UButton>
  </div>
</template>
