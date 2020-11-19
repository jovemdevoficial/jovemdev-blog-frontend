import { FaSearch } from 'react-icons/fa';
import { SearchButton, SearchText, SearchBox } from './styled';

export function Search() {
  return (
    <SearchBox>
      <SearchText type="text" placeholder="Pesquisar" />

      <SearchButton>
        <FaSearch />
      </SearchButton>
    </SearchBox>
  );
}
