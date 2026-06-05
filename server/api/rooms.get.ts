export default defineEventHandler(async () => {
  const rooms = await prisma.room.findMany({ include: { tasks: true } })
  
  return rooms
})
