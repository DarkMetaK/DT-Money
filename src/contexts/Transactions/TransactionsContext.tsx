import { createContext, useEffect, useState } from "react";

import { ITransactions, ITransactionsContextType, ITransactionsProviderProps } from "./types";

export const TransactionsContext = createContext({} as ITransactionsContextType)

export function TransactionsProvider({children}: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  async function fetchTransactions(query?:string) {
    const url = new URL('http://localhost:3000/transactions');

    query && url.searchParams.append('q', query);

    const data = await (await fetch(url)).json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TransactionsContext.Provider value={{transactions, fetchTransactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}
