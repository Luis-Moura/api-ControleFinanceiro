import { PrismaClient } from '@prisma/client';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';

const prisma = new PrismaClient();

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export default fp(
  async (fastify: FastifyInstance, opts: FastifyPluginOptions) => {
    fastify.decorate('prisma', prisma);

    fastify.addHook('onClose', async (fastifyInstance: FastifyInstance) => {
      await prisma.$disconnect();
    });
  }
);
