import { Transaction } from '@prisma/client';
import { prisma } from '../plugins/prisma';
import { PostTransactionDto } from '../dtos/postTransaction.dto';
import { UpdateTransactionDto } from '../dtos/updateTransaction.dto';

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

export async function getTransactionById(
  id: number
): Promise<Transaction | null> {
  const transaction = await prisma.transaction.findUnique({
    where: { id },
  });

  if (!transaction) {
    return null;
  }

  return transaction;
}

export async function updateTransactionById(
  id: number,
  updateTransactionDto: UpdateTransactionDto
): Promise<Transaction | null> {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: { id },
    });

    if (!transaction) {
      return null;
    }

    await prisma.transaction.update({
      where: { id },
      data: updateTransactionDto,
    });

    return transaction;
  } catch (error) {
    console.error('Error updating transaction:', error);
    throw error;
  }
}

export async function deleteTransactionById(id: number): Promise<boolean> {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: { id },
    });

    if (!transaction) {
      return false;
    }

    await prisma.transaction.delete({
      where: { id },
    });

    return true;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
}
