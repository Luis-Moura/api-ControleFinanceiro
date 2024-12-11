import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default async function routes(fastify: FastifyInstance) {
  fastify.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send({ message: 'pong' });
  });
}
