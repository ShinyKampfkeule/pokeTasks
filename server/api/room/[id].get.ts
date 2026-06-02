export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const room = await prisma.room.findUnique({ where: { id: id }, include: { tasks: true } })
  return room
})
