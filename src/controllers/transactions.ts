import { FastifyReply, FastifyRequest } from 'fastify';
import * as transactionService from '../services/transaction';
import { PostTransactionDto } from '../dtos/postTransaction.dto';

export async function postTransaction(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const postTransaction = request.body as PostTransactionDto;

  const response = await transactionService.postTransaction(postTransaction);

  if (!response) {
    console.log('Error creating transaction');
    return reply.status(500).send({ message: 'Error creating transaction' });
  }

  reply.status(201).send(response);
}

export async function getTransactions(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const response = await transactionService.getTransactions();

  if (!response || response.length === 0) {
    console.log('No transactions found');
    return reply.status(404).send({ message: 'No transactions found' });
  }

  reply.status(200).send(response);
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
