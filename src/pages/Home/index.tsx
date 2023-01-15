import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Summary } from "../../components/Summary";

import { PriceHighLight, TransactionsContainer, TransactionTable } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Summary /> 
      <SearchBar />

      <TransactionsContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 12.000,00 
                </PriceHighLight>  
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width='50%'>Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 59,00 
                </PriceHighLight>  
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
            
            <tr>
              <td width='50%'>Aluguel do apartamento</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 1.200,00
                </PriceHighLight>  
              </td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>

            <tr>
              <td width='50%'>Computador</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 5.400,00 
                </PriceHighLight>  
              </td>
              <td>Venda</td>
              <td>15/03/2022</td>
            </tr>

            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 8.000,00
                </PriceHighLight>  
              </td>
              <td>Venda</td>
              <td>13/03/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </>
  )
}
