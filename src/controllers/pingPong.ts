import { FastifyReply, FastifyRequest } from 'fastify';

export async function pingPong(request: FastifyRequest, reply: FastifyReply) {
  reply.status(200).send({ message: 'pong' });
}
