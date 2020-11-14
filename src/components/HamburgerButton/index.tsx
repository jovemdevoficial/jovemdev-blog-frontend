import { Container, Hamburger, InputHamburger, LabelHamburger } from './styled';

export function HamburgerButton() {
  return (
    <Container>
      <InputHamburger id="menu-hamburger" type="checkbox" />
      <LabelHamburger htmlFor="menu-hamburger">
        <div>
          <Hamburger />
        </div>
      </LabelHamburger>
    </Container>
  );
}
