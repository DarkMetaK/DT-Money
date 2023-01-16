import { createContext, useEffect, useState } from "react";

import { ITransactions, ITransactionsContextType, ITransactionsProviderProps } from "./types";

export const TransactionsContext = createContext({} as ITransactionsContextType)

export function TransactionsProvider({children}: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
    .then(response => response.json())
    .then(response => setTransactions(response!))
  }, [])

  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}
