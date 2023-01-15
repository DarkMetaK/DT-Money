import { MagnifyingGlass } from 'phosphor-react'
import { SearchBarContainer } from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
        <input 
          type="text"
          placeholder='Busque uma transação'
        />
        <button type='submit'>
          <MagnifyingGlass weight='bold' size={20}/>
          <strong>Buscar</strong>
        </button>
    </SearchBarContainer>
  )
}
