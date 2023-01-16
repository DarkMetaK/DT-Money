import { ReactNode } from "react";

export interface ITransactions {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string
}

export interface ITransactionsContextType {
  transactions: ITransactions[];
}

export interface ITransactionsProviderProps {
  children: ReactNode
}