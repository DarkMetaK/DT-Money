import styled from "styled-components"

interface IMainButton {
  size: 'sm' | 'md' | 'lg'
}

const PaddingOptions = {
  'sm': '0.5rem 1rem',
  'md': '0.75rem 1.25rem',
  'lg': '1rem 2rem'
} as const

export const MainButton = styled.button<IMainButton>`
  border: none;
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};
  border-radius: 6px;
  font-weight: bold;
  line-height: 1.6rem;
  cursor: pointer;

  &:not(:disabled):hover{
    background-color: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  padding: ${props => PaddingOptions[props.size]}
`
