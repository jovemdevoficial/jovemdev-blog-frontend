import { FaSearch } from 'react-icons/fa';
import { SearchButton, SearchText, SearchBox } from './styled';

export function Search() {
  return (
    <SearchBox>
      <SearchText id="input-search" type="text" placeholder="Pesquisar" />

      <label aria-label="Pesquisar" htmlFor="input-search"></label>
      <SearchButton>
        <FaSearch />
      </SearchButton>
    </SearchBox>
  );
}
