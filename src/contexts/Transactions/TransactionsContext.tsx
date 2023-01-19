import { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { apiGetTransactions, apiSetNewTransaction } from '../../api'
import {
  INewTransaction,
  ITransactions,
  ITransactionsContextType,
  ITransactionsProviderProps,
} from './types'

export const TransactionsContext = createContext({} as ITransactionsContextType)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await apiGetTransactions(query)
    setTransactions(response.slice())
  }, [])

  const createNewTransaction = useCallback(
    async ({ description, category, price, type }: INewTransaction) => {
      const date = new Date()
      await apiSetNewTransaction({
        id: date.getTime(),
        description,
        category,
        price,
        type,
        createdAt: date.toISOString(),
      })
      fetchTransactions()
    },
    [fetchTransactions],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
