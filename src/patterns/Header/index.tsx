import Link from 'next/link';

import { HeaderContainer } from './styled';
import { HamburgerButton } from '../../components/HamburgerButton';

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HamburgerButton />
        <Link href="/">
          <a>{'< Jovem DEV />'}</a>
        </Link>
      </HeaderContainer>
    </>
  );
}
