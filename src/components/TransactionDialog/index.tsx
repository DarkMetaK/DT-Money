import { useContextSelector } from 'use-context-selector'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { TransactionsContext } from '../../contexts/Transactions/TransactionsContext'
import { Button } from '../Button'
import {
  ErrorMessage,
  TransactionClose,
  TransactionContent,
  TransactionForm,
  TransactionOverlay,
  TransactionTitle,
  TransactionType,
  TransactionTypeButton,
} from './styles'

interface INewTransactionForm {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

export function TransactionDialog() {
  const createNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createNewTransaction
    },
  )

  const schema = yup.object({
    description: yup.string().required('Esse campo é obrigatório'),
    price: yup
      .number()
      .min(0.1, 'O valor deve ser superior a 0')
      .required('Esse campo é obrigatório')
      .typeError('O valor inserido deve ser um número'),
    category: yup.string().required('Esse campo é obrigatório'),
    type: yup.string().required('O tipo da transação é obrigatório'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
    control,
  } = useForm<INewTransactionForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      type: 'income',
    },
  })

  async function handleNewTransactionSubmit(data: INewTransactionForm) {
    await createNewTransaction(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <TransactionOverlay />
      <TransactionContent>
        <TransactionTitle>Nova Transação</TransactionTitle>
        <TransactionForm onSubmit={handleSubmit(handleNewTransactionSubmit)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price')}
            min={0}
          />
          {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          {errors.category && (
            <ErrorMessage>{errors.category.message}</ErrorMessage>
          )}

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}

          <Button type="submit" size="lg" disabled={!isValid || isSubmitting}>
            Cadastrar
          </Button>
        </TransactionForm>

        <TransactionClose>
          <X size={24} />
        </TransactionClose>
      </TransactionContent>
    </Dialog.Portal>
  )
}
