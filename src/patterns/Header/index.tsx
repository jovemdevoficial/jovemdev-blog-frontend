import Link from 'next/link';

import { HeaderContainer } from './styled';
import { HamburgerButton } from '../../components/HamburgerButton';
import { Search } from '../../components/Search';

export type HeaderProps = {
  noSearch?: boolean;
};

export function Header({ noSearch }: HeaderProps) {
  return (
    <>
      <HeaderContainer>
        <HamburgerButton />
        <Link href="/">
          <a>{'< Jovem DEV />'}</a>
        </Link>
        {noSearch || <Search />}
      </HeaderContainer>
    </>
  );
}
