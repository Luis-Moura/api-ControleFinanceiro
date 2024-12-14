// filepath: src/dtos/updateTransaction.dto.ts
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { TransactionType } from '@prisma/client';

export class UpdateTransactionDto {
  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TransactionType)
  transaction_type?: 'INCOME' | 'EXPENSE';

  @IsOptional()
  @IsString()
  category?: string;
}
