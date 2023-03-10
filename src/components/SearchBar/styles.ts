import styled from 'styled-components'

export const SearchBarContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0 auto;
  padding: 0 1.5rem;

  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-900']};
    border: none;
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button[type='submit'] {
    padding: 0.875rem 2rem;
    color: ${(props) => props.theme['green-300']};
    cursor: pointer;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color, color 0.2s;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    button[type='submit'] {
      justify-content: center;
    }
  }
`
