<script lang="ts" setup>
  import { typeColors } from '~/globals/typeColors'

  const props = defineProps({
    type: { type: String, required: true },
    size: { type: String }
  })
</script>

<template>
  <div
    :class="`flex items-center rounded-md overflow-hidden ${size ? 'w-22 h-5' : 'w-32.5 h-7'} bg-[#605F5F]`"
    v-if="type.trim().length !== 0"
  >
    <div
      class="flex items-center justify-center w-7 h-7"
      :style="{ backgroundColor: typeColors[type] }"
    >
      <NuxtImg :src="`/${type}_icon.png`" :sizes="`${size ? '16' : '20'}`" />
    </div>
    <div
      :class="`grow flex items-center justify-center text-white ${size ? 'text-xs' : 'text-md'}`"
    >
      <span>{{ type }}</span>
    </div>
  </div>
</template>
