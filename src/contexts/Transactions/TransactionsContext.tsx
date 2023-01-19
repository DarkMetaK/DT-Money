import { createContext, useEffect, useState } from 'react'

import { api } from '../../libs/axios'
import {
  INewTransaction,
  ITransactions,
  ITransactionsContextType,
  ITransactionsProviderProps,
} from './types'

export const TransactionsContext = createContext({} as ITransactionsContextType)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  async function createNewTransaction({
    description,
    category,
    price,
    type,
  }: INewTransaction) {
    const response = await api.post('/transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })
    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
