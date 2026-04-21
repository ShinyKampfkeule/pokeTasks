<script lang="ts" setup>
  const props = defineProps({
    type: { type: String, required: true }
  })

  const typeColors: { [key: string]: string } = {
    Normal: '#918B8B',
    Ground: '#955400',
    Electric: '#BAB300',
    Fire: '#D10505',
    Water: '#0F05D1',
    Poison: '#7619E8',
    Bug: '#7FAD01',
    Flying: '#509A94'
  }
</script>

<template>
  <div class="flex items-center rounded-md overflow-hidden w-32.5 h-7 bg-[#605F5F]">
    <div
      class="flex items-center justify-center w-7 h-7"
      :style="{ backgroundColor: typeColors[type] }"
    >
      <NuxtImg :src="`/${type}_icon.png`" sizes="20" />
    </div>
    <div class="grow flex items-center justify-center text-white">
      <span>{{ type }}</span>
    </div>
  </div>
</template>
