export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as { taskId: string; completed: boolean }

  const completedTask = await prisma.task.update({
    where: { id: body.taskId },
    data: { completed: body.completed }
  })
  console.log(completedTask)
})
