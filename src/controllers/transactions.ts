import { FastifyReply, FastifyRequest } from 'fastify';

export async function postTransaction(
  request: FastifyRequest,
  reply: FastifyReply
) {
  reply.status(200).send({ message: 'Transaction created' });
}

export async function getTransactions(
  request: FastifyRequest,
  reply: FastifyReply
) {
  reply.status(200).send({ message: 'Transactions retrieved' });
}

export async function getTransactionById(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };
  const transactionId = Number(id);
  reply.status(200).send({ message: `Transaction ${transactionId} retrieved` });
}

export async function updateTransactionById(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };
  const transactionId = Number(id);
  reply.status(200).send({ message: `Transaction ${transactionId} updated` });
}

export async function deleteTransactionById(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };
  const transactionId = Number(id);
  reply.status(200).send({ message: `Transaction ${transactionId} deleted` });
}

export async function getBalance(request: FastifyRequest, reply: FastifyReply) {
  reply.status(200).send({ message: 'Balance retrieved' });
}

export async function getReport(request: FastifyRequest, reply: FastifyReply) {
  reply.status(200).send({ message: 'Report retrieved' });
}