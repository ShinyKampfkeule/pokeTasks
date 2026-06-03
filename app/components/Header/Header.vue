<script setup></script>

<template>
  <UHeader
    :ui="{
      root: ['bg-(--primary) border-none shadow-md'],
      container: ['mx-0 max-w-full'],
      center: ['h-full'],
      right: ['gap-4'],
      title: ['text-(--foreground) hover:text-(--foreground)']
    }"
  >
    <template #title>
      <HeaderTitle />
    </template>

    <HeaderMenu />

    <template #right>
      <HeaderRightContent />
    </template>
  </UHeader>
</template>
