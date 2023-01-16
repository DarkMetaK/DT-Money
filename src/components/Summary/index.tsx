import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useSummary } from '../../hooks/useSummary';

import { Card, SummaryContainer } from "./styles";

export function Summary() {

  const {totalIncome, totalOutcome, totalBalance} = useSummary()

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
        <strong>{totalBalance.toLocaleString('default', {
          style: 'currency',
          currency: 'BRL'
        })}</strong>
      </Card>
    </SummaryContainer>
  )
}