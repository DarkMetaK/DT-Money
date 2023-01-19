import { useContextSelector } from 'use-context-selector'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MagnifyingGlass } from 'phosphor-react'

import { SearchBarContainer } from './styles'
import { TransactionsContext } from '../../contexts/Transactions/TransactionsContext'

interface ISearchForm {
  query: string
}

export function SearchBar() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const schema = yup.object({
    query: yup.string().required('Esse campo é obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<ISearchForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  async function handleSearchSubmit(data: ISearchForm) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleSearchSubmit)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button type="submit" disabled={!isValid || isSubmitting}>
        <MagnifyingGlass weight="bold" size={20} />
        <strong>Buscar</strong>
      </button>
    </SearchBarContainer>
  )
}
