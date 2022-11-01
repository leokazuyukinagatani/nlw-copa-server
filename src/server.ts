import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import ShortUniqueId from 'short-unique-id'

const prisma = new PrismaClient({
  log: ['query']
})

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count()

    return { count }
  })

  fastify.post('/pools', async (request, reply) => {
    const createPoolBody = z.object({
      title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title must be a string",
      }),
    })
   
      try {
        const { title } = createPoolBody.parse(request.body)

        const generate = new ShortUniqueId({ length:6 })
        const code = String(generate()).toUpperCase()
        await prisma.pool.create({
          data: {
            title,
            code 
          }
        })
        return reply.status(201).send({code})
      } catch (error) {
        const errorJson = JSON.stringify(error)
        if (error instanceof z.ZodError){
          return reply.status(400).send(errorJson)
        } 
        else {
            return reply.status(500).send(errorJson)
        }
      }
  })

  

  await fastify.listen({ port: 3333, /*host: '0.0.0.0' */})
}

bootstrap()