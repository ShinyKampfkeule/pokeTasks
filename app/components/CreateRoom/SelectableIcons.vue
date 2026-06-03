<script lang="ts" setup>
  const icon = defineModel<string>('icon')
  const open = defineModel<boolean>('open')

  const icons = ref([
    'i-lucide-anvil',
    'i-lucide-apple',
    'i-lucide-archive',
    'i-lucide-armchair',
    'i-lucide-at-sign',
    'i-lucide-atom',
    'i-lucide-axe',
    'i-lucide-baby',
    'i-lucide-backpack',
    'i-lucide-balloon',
    'i-lucide-ban',
    'i-lucide-banana',
    'i-lucide-bandage',
    'i-lucide-banknote',
    'i-lucide-bath',
    'i-lucide-bed',
    'i-lucide-bed-double',
    'i-lucide-bed-single',
    'i-lucide-beef',
    'i-lucide-beer',
    'i-lucide-biceps-flexed',
    'i-lucide-bike',
    'i-lucide-biohazard',
    'i-lucide-bird',
    'i-lucide-birdhouse',
    'i-lucide-bolt',
    'i-lucide-bomb',
    'i-lucide-bone',
    'i-lucide-book',
    'i-lucide-book-image',
    'i-lucide-box',
    'i-lucide-briefcase-business',
    'i-lucide-brush',
    'i-lucide-brush-cleaning',
    'i-lucide-bubbles',
    'i-lucide-building',
    'i-lucide-building-2',
    'i-lucide-car',
    'i-lucide-car-front',
    'i-lucide-caravan',
    'i-lucide-carrot',
    'i-lucide-castle',
    'i-lucide-cat',
    'i-lucide-chef-hat',
    'i-lucide-cooking-pot',
    'i-lucide-dices',
    'i-lucide-dog',
    'i-lucide-drill',
    'i-lucide-gamepad-2',
    'i-lucide-lamp',
    'i-lucide-leaf'
  ])

  const handleIconSelect = (newIcon: string) => {
    icon.value = newIcon
    open.value = false
  }
</script>

<template>
  <div
    v-for="selectableIcon in icons"
    :class="`flex justify-center items-center p-1 ${selectableIcon === icon && 'bg-(--accent)/50'} hover:bg-(--accent)/25 cursor-pointer rounded-md`"
    @click="handleIconSelect(selectableIcon)"
  >
    <UIcon :name="selectableIcon" class="size-5" />
  </div>
</template>

<style></style>
