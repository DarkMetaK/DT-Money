import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Button } from '../Button';
import { TransactionClose, TransactionContent, TransactionForm, TransactionOverlay, TransactionTitle, TransactionType, TransactionTypeButton } from './styles';

export function TransactionDialog() {
  return (
    <Dialog.Portal>
      <TransactionOverlay/>
      <TransactionContent>
        <TransactionTitle>Nova Transação</TransactionTitle>
        <TransactionForm>
          <input
            type="text"
            placeholder='Descrição'
            required
          />
          <input
            type="number"
            placeholder='Preço'
            required
          />
          <input
            type="text"
            placeholder='Categoria'
            required 
          />

          <TransactionType>
            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <Button type='submit' size='lg'>Cadastrar</Button>
        </TransactionForm>

        <TransactionClose>
          <X size={24}/>
        </TransactionClose>
      </TransactionContent>

    </Dialog.Portal>
  )
}
