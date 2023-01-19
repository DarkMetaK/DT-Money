import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/Transactions/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const totalIncome = transactions
    .filter((item) => item.type === 'income')
    .reduce((acc, item) => {
      return (acc += item.price)
    }, 0)

  const totalOutcome = transactions
    .filter((item) => item.type === 'outcome')
    .reduce((acc, item) => {
      return (acc += item.price)
    }, 0)

  const totalBalance = totalIncome - totalOutcome

  return {
    totalIncome,
    totalOutcome,
    totalBalance,
  }
}
