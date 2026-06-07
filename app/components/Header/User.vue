<script setup lang="ts">
  const { loggedIn, user, clear: clearSession } = useUserSession()
  console.log(user.value)

  const handleLogout = () => {
    clearSession()
    navigateTo('/')
  }
</script>

<template>
  <div class="flex gap-2 items-center">
    <UUser
      :name="loggedIn && user && user.name"
      :description="loggedIn && user && user.role"
      :avatar="{ icon: 'i-lucide-user' }"
      :ui="{
        root: ['*:color-(--foreground)'],
        name: ['text-(--foreground)'],
        description: ['text-(--foreground)']
      }"
    />
    <UIcon name="i-lucide-chevron-down" @click="handleLogout" />
  </div>
</template>
