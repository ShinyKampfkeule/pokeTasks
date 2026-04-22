<template>
  <UModal
    title="Pokédex"
    description="View all Pokemon you already caught!"
    fullscreen
    :ui="{
      content: 'bg-background text-black',
      title: 'text-black',
      description: 'text-black',
      close: 'text-black hover:bg-transparent hover:text-red-500 cursor-pointer'
    }"
  >
    <PokedexHeader />

    <template #body>
      <Pokedex />
    </template>
  </UModal>
</template>
