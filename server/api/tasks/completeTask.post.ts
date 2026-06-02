export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as { taskId: string }

  const completedTask = await prisma.task.update({
    where: { id: body.taskId },
    data: { completed: true }
  })
  console.log(completedTask)
})
