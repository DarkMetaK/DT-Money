import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 1.5rem auto 0 auto;
  padding: 0 1.5rem;
  overflow: auto;
`

export const TransactionTable = styled.table`
  min-width: 600px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  color: ${(props) => props.theme['gray-300']};

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface IPriceHighLight {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<IPriceHighLight>`
  color: ${(props) =>
    props.variant === 'income'
      ? (props) => props.theme['green-300']
      : props.theme['red-300']};
`
