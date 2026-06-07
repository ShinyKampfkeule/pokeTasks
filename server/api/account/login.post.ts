export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as { email: string; password: string }
  console.log(body.email)
  console.log(body.password)

  if (body.email === 'test@admin.com' && body.password === 'test') {
    await setUserSession(event, {
      user: {
        name: 'ShinyKampfkeule',
        role: 'Admin'
      }
    })
    return {}
  }
  throw createError({
    status: 401,
    message: 'Bad credentials'
  })
})
