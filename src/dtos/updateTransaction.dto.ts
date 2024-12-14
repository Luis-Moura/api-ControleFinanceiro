export interface UpdateTransactionDto {
  amount?: number;
  description?: string;
  transaction_type?: 'INCOME' | 'EXPENSE';
  category?: string;
}