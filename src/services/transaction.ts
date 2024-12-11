import { Transaction } from '@prisma/client';
import { prisma } from '../plugins/prisma';
import { PostTransactionDto } from '../dtos/postTransaction.dto';

export async function postTransaction(
  postTransactionDto: PostTransactionDto
): Promise<Transaction | null> {
  try {
    const transaction = await prisma.transaction.create({
      data: {
        ...postTransactionDto,
        date: new Date(),
      },
    });

    if (!transaction) {
      return null;
    }

    return transaction;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
}

export async function getTransactions(): Promise<Transaction[] | null> {
  try {
    const transactions: Transaction[] = await prisma.transaction.findMany();

    if (!transactions || transactions.length === 0) {
      return null;
    }

    return transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
}
