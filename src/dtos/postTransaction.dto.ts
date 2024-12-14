// filepath: src/dtos/postTransaction.dto.ts
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TransactionType } from '@prisma/client';

export class PostTransactionDto {
  @IsNumber()
  amount!: number;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsEnum(TransactionType)
  transaction_type!: 'INCOME' | 'EXPENSE';

  @IsString()
  @IsNotEmpty()
  category!: string;
}
