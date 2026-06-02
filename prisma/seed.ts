import 'dotenv/config'
import { PrismaClient } from '../lib/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const livingRoom = await prisma.room.create({
    data: {
      name: 'Living Room',
      icon: 'i-lucide-house',
      type1: 'Normal',
      type2: 'Ground',
      primaryColor: '#00367C',
      secondaryColor: '#A9CFFF'
    }
  })
  console.log(`Created Room: ${livingRoom.name}`)

  const task1 = await prisma.task.create({
    data: {
      title: 'Remove dust',
      roomId: livingRoom.id
    }
  })
  console.log(`Created Task: ${task1.title}`)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
