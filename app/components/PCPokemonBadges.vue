<script lang="ts" setup>
  import { firstLetterUpperCase } from '~/functions/firstLetterUpperCase'

  const props = defineProps({
    firstType: { type: String, required: true },
    secondType: { type: String }
  })
</script>

<template>
  <div class="flex flex-row gap-2.5">
    <TypeBadge :type="firstLetterUpperCase(firstType)" size="sm" />
    <TypeBadge v-if="secondType" :type="firstLetterUpperCase(secondType)" size="sm" />
  </div>
</template>
