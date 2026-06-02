<script lang="ts" setup>
  const type = defineModel<string>('type')

  const props = defineProps({
    label: { type: String, required: true }
  })

  const types = ref([
    { label: 'Normal', value: 'Normal', avatar: { src: '/Normal_icon.png' } },
    { label: 'Fire', value: 'Fire', avatar: { src: '/Fire_icon.png' } },
    { label: 'Fighting', value: 'Fighting', avatar: { src: '/Fighting_icon.png' } },
    { label: 'Water', value: 'Water', avatar: { src: '/Water_icon.png' } },
    { label: 'Flying', value: 'Flying', avatar: { src: '/Flying_icon.png' } },
    { label: 'Grass', value: 'Grass', avatar: { src: '/Grass_icon.png' } },
    { label: 'Poison', value: 'Poison', avatar: { src: '/Poison_icon.png' } },
    { label: 'Electric', value: 'Electric', avatar: { src: '/Electric_icon.png' } },
    { label: 'Ground', value: 'Ground', avatar: { src: '/Ground_icon.png' } },
    { label: 'Psychic', value: 'Psychic', avatar: { src: '/Psychic_icon.png' } },
    { label: 'Rock', value: 'Rock', avatar: { src: '/Rock_icon.png' } },
    { label: 'Ice', value: 'Ice', avatar: { src: '/Ice_icon.png' } },
    { label: 'Bug', value: 'Bug', avatar: { src: '/Bug_icon.png' } },
    { label: 'Dragon', value: 'Dragon', avatar: { src: '/Dragon_icon.png' } },
    { label: 'Ghost', value: 'Ghost', avatar: { src: '/Ghost_icon.png' } },
    { label: 'Dark', value: 'Dark', avatar: { src: '/Dark_icon.png' } },
    { label: 'Steel', value: 'Steel', avatar: { src: '/Steel_icon.png' } },
    { label: 'Fairy', value: 'Fairy', avatar: { src: '/Fairy_icon.png' } }
  ])

  const typeAvatar = computed(
    () => types.value.find((typeEntry) => typeEntry.value === type.value)?.avatar
  )
</script>

<template>
  <UFormField class="w-1/2" :label="label" name="type1" :ui="{ label: 'text-black' }">
    <USelect class="w-full" v-model="type" :items="types" :avatar="typeAvatar" />
  </UFormField>
</template>
