import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const TransactionOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const TransactionContent = styled(Dialog.Content)`
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 6px;
  box-shadow: 0 4px 32px #000;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  max-width: 32rem;
  width: calc(100% - 1rem);
  margin-right: 1rem;
`

export const TransactionTitle = styled(Dialog.Title)`
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  line-height: 1.4rem;
  margin-bottom: 2rem;
`

export const TransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 1rem;
    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-900']};
    border: none;
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const TransactionClose = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
  transition: color 0.2s;
  border-radius: 6px;

  &:hover {
    color: ${(props) => props.theme.white};
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`

interface ITransactionTypeButton {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<ITransactionTypeButton>`
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked'] {
    &:hover {
      transition: background-color 0.2s;
      background-color: ${(props) => props.theme['gray-600']};
    }
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme['red-300']};
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
`
