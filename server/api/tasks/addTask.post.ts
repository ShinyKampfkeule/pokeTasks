export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as { title: string; roomId: string }

  await prisma.task.create({
    data: {
      title: body.title,
      roomId: body.roomId
    }
  })
})
