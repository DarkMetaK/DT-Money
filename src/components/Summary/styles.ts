import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface ICard {
  variant?: 'green'
}

export const Card = styled.div<ICard>`
  background-color: ${(props) => props.theme['gray-600']};
  padding: 2rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    font-size: 2rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme['gray-100']};
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${(props) => props.theme['green-700']};
    `}
`
