import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/Transactions/TransactionsContext";

import { PriceHighLight, TransactionsContainer, TransactionTable } from "./styles";

export function Home() {

  const {transactions} = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Summary /> 
      <SearchBar />

      <TransactionsContainer>
        <TransactionTable>
          <tbody>
            {transactions && transactions.map(item => {
              return (
                <tr key={item.id}>
                  <td width='50%'>{item.description}</td>
                  <td>
                    <PriceHighLight variant={item.type}>
                      {item.price.toLocaleString('default', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </PriceHighLight>
                  </td>
                  <td>{item.category}</td>
                  <td>{new Date(item.createdAt).toLocaleDateString().split(' ')[0]}</td>
                </tr>
              )
              }
            )}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </>
  )
}
