import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { pingPong } from '../controllers/pingPong';
import * as transactionsController from '../controllers/transactions';

export default async function routes(fastify: FastifyInstance) {
  fastify.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    pingPong(request, reply);
  });

  fastify.post(
    '/transaction',
    async (request: FastifyRequest, reply: FastifyReply) => {
      console.log('Handling POST /transaction');
      await transactionsController.postTransaction(request, reply);
    }
  );

  fastify.get(
    '/transactions',
    async (request: FastifyRequest, reply: FastifyReply) => {
      await transactionsController.getTransactions(request, reply);
    }
  );

  fastify.get(
    '/transaction/:id',
    async (request: FastifyRequest, reply: FastifyReply) => {
      await transactionsController.getTransactionById(request, reply);
    }
  );

  fastify.put(
    '/transaction/:id',
    async (request: FastifyRequest, reply: FastifyReply) => {
      transactionsController.updateTransactionById(request, reply);
    }
  );

  fastify.delete(
    '/transaction/:id',
    async (request: FastifyRequest, reply: FastifyReply) => {
      transactionsController.deleteTransactionById(request, reply);
    }
  );

  fastify.get(
    '/balance',
    async (request: FastifyRequest, reply: FastifyReply) => {
      await transactionsController.getBalance(request, reply);
    }
  );

  fastify.get(
    '/report',
    async (request: FastifyRequest, reply: FastifyReply) => {
      await transactionsController.getReport(request, reply);
    }
  );
}
