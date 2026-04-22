<script lang="ts" setup>
  import type { PokemonSprites } from '~/types/pokemonSprites'

  const props = defineProps({
    sprites: { type: [] as PropType<PokemonSprites>, required: true },
    showShinyDex: { type: Boolean, required: true },
    defaultIsCaught: { type: Boolean, required: true },
    shinyIsCaught: { type: Boolean, required: true }
  })
</script>

<template>
  <NuxtImg
    :src="`${showShinyDex ? sprites[0].shiny : sprites[0].default}`"
    :class="`
                ${
                  defaultIsCaught || (showShinyDex && shinyIsCaught)
                    ? ''
                    : 'grayscale brightness-10'
                }
              `"
    width="96"
    height="96"
    loading="lazy"
    preload
  />
</template>
