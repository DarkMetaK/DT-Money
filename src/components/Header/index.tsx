import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../Button';
import { TransactionDialog } from '../TransactionDialog';
import { HeaderContainer, HeaderContent } from "./styles";

import logo from '../../assets/logo-ignite.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logo} />
          <h1>DT Money</h1> 
        </div>
        <Dialog.Root>

          <Dialog.Trigger asChild>
            <Button>Nova transação</Button>
          </Dialog.Trigger>

          <TransactionDialog />

        </Dialog.Root>
        
      </HeaderContent>
    </HeaderContainer>
  )
}
