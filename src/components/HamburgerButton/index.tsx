import { Container, Hamburger, LabelHamburger } from './styled';

// styled__ContainerNav-sc-1d3hzru-0 jwxCEL

export function HamburgerButton() {
  function handleClick() {
    const sideNav = window.document.querySelector(
      '.styled__ContainerNav-sc-1d3hzru-0',
    );

    const hamburgerDiv = window.document.querySelector(
      '.styled__Container-gbonng-0',
    );

    const hamburgerSpan = window.document.querySelector(
      '.styled__Hamburger-gbonng-2',
    );

    const lightBox = window.document.querySelector('.LightBox-sc-1nx0ljj-0');

    hamburgerDiv.classList.toggle('hamburger-close');
    hamburgerSpan.classList.toggle('hamburger-close');
    sideNav.classList.toggle('nav-responsive');
    lightBox.classList.toggle('bg');
  }

  return (
    <Container>
      <LabelHamburger>
        <div onClick={handleClick}>
          <Hamburger />
        </div>
      </LabelHamburger>
    </Container>
  );
}
