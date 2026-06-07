<script setup lang="ts">
  import type { FormSubmitEvent } from '@nuxt/ui'
  import * as v from 'valibot'

  const schema = v.object({
    email: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your email.'),
      v.email('Please enter an valid email.')
    ),
    password: v.pipe(v.string(), v.nonEmpty('Please enter your password.'))
  })
  type Schema = v.InferOutput<typeof schema>

  const state = reactive<{ email: string; password: string }>({
    email: '',
    password: ''
  })

  const { loggedIn, user, fetch: refreshSession } = useUserSession()

  const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    try {
      await $fetch('/api/account/login', {
        method: 'POST',
        body: state
      })

      await refreshSession()
      await navigateTo('/rooms')
    } catch {
      alert('Bad credentials')
    }
  }
</script>

<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>
    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>
    <UButton type="submit">Login</UButton>
  </UForm>
</template>
