import { ReactNode } from 'react'

export interface ITransactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export interface INewTransaction {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

export interface ITransactionsContextType {
  transactions: ITransactions[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: INewTransaction) => Promise<void>
}

export interface ITransactionsProviderProps {
  children: ReactNode
}
