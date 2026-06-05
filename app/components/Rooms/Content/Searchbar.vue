<script setup lang="ts">
  import type { RoomInterface } from '~/interfaces/room'

  const props = defineProps<{ rooms: RoomInterface[] }>()

  const filteredRooms = defineModel<RoomInterface[]>('filteredRooms')

  const searchValue = ref('')

  const handleSearch = () => {
    filteredRooms.value = props.rooms.filter((room) =>
      room.name.toLowerCase().includes(searchValue.value.toLowerCase())
    )
  }
</script>

<template>
  <div class="h-16 flex items-center bg-(--primary) p-4 gap-4 rounded-md shadow-md">
    <!-- <RoomsContentFilter />
    <USeparator orientation="vertical" class="h-6" /> -->
    <UInput
      v-model="searchValue"
      type="search"
      placeholder="Search..."
      variant="none"
      size="xl"
      icon="i-lucide-search"
      :ui="{
        root: ['grow'],
        leadingIcon: ['text-(--foreground) size-5'],
        base: ['text-(--foreground) placeholder:text-(--foreground)']
      }"
      @update:model-value="handleSearch()"
    />
    <span class="text-sm">{{ filteredRooms?.length ?? 0 }} Rooms found</span>
  </div>
</template>
