export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as { completedTasks: string[] }

  await prisma.task.updateMany({
    where: { id: { in: body.completedTasks } },
    data: { confirmedCompletion: true }
  })
})
