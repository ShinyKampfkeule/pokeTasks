<script lang="ts" setup>
  const showShinyDex = useState<boolean>('showShinyDex')
</script>

<template>
  <div
    :class="`absolute right-0 top-0 text-sm p-1.5 border ${showShinyDex ? 'bg-green-300 border-green-700' : 'bg-blue-300 border-blue-700'} rounded-md cursor-pointer`"
    @click="() => (showShinyDex = !showShinyDex)"
  >
    <span>{{ showShinyDex ? 'Show Normal Dex' : 'Show Shiny Dex' }}</span>
  </div>
</template>
