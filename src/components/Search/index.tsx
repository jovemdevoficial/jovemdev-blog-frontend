import { MutableRefObject, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { SearchButton, Input, SearchBox, CancelButton } from './styled';

export function Search() {
  const searchBtn = useRef() as MutableRefObject<HTMLDivElement>;
  const cancelBtn = useRef() as MutableRefObject<HTMLDivElement>;
  const searchBox = useRef() as MutableRefObject<HTMLDivElement>;
  const searchInput = useRef() as MutableRefObject<HTMLInputElement>;

  function handleClickSearchButton() {
    searchBox.current.classList.add('active');
    searchInput.current.classList.add('active');
    searchBtn.current.classList.add('active');
    cancelBtn.current.classList.add('active');
  }

  function handleClickCancelButton() {
    searchBox.current.classList.remove('active');
    searchInput.current.classList.remove('active');
    searchBtn.current.classList.remove('active');
    cancelBtn.current.classList.remove('active');
  }

  return (
    <SearchBox ref={searchBox}>
      <Input ref={searchInput} type="text" placeholder="Pesquisar" />

      <SearchButton ref={searchBtn} onClick={handleClickSearchButton}>
        <FiSearch />
      </SearchButton>

      <CancelButton ref={cancelBtn} onClick={handleClickCancelButton}>
        <FiX />
      </CancelButton>
    </SearchBox>
  );
}
