export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as {
    name: string
    icon: string
    type1: string
    type2: string
    primaryColor: string
    secondaryColor: string
  }

  const createdRoom = await prisma.room.create({
    data: body
  })

  console.log(createdRoom)
})
