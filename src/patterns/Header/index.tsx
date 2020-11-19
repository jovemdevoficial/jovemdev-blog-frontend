import Link from 'next/link';

import { HeaderContainer } from './styled';
import { HamburgerButton } from '../../components/HamburgerButton';
import { Search } from '../../components/Search';

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HamburgerButton />
        <Link href="/">
          <a>Jovem Dev</a>
        </Link>
        <Search />
      </HeaderContainer>
    </>
  );
}
