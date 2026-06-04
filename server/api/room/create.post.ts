export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as {
    name: string
    icon: string
    type1: string
    type2: string
    primaryColor: string
    secondaryColor: string
  }

  await prisma.room.create({
    data: body
  })
})
