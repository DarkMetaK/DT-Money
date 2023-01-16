import { useContext } from 'react';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

import { TransactionsContext } from '../../contexts/Transactions/TransactionsContext';
import { Card, SummaryContainer } from "./styles";

export function Summary() {

  const { transactions } = useContext(TransactionsContext)

  const totalIncome = transactions.filter(item => item.type === 'income')
  .reduce((acc, item) => {
    return acc += item.price
  }, 0)

  const totalOutcome = transactions.filter(item => item.type === 'outcome')
  .reduce((acc, item) => {
    return acc += item.price
  }, 0)

  return (
    <SummaryContainer>
      <Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E"/>
        </header>
        <strong>{totalIncome.toLocaleString('default', {
          style: 'currency',
          currency: 'BRL'
        })}</strong>
      </Card>
      
      <Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68"/>
        </header>
        <strong>{totalOutcome.toLocaleString('default', {
          style: 'currency',
          currency: 'BRL'
        })}</strong>
      </Card>

      <Card variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>{(totalIncome - totalOutcome).toLocaleString('default', {
          style: 'currency',
          currency: 'BRL'
        })}</strong>
      </Card>
    </SummaryContainer>
  )
}