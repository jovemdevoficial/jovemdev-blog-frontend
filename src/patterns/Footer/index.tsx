import { Container, Line, IconsContainer } from './styled';

export function Footer() {
  return (
    <Container>
      <Line />
      <IconsContainer>
        <a
          href="https://github.com/jovemdevoficial"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/assets/icons/github_icon.svg" alt="Ícone do Github" />
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img
            src="/assets/icons/instagram_icon.svg"
            alt="Ícone do Instagram"
          />
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src="/assets/icons/facebook_icon.svg" alt="Ícone do Facebook" />
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src="/assets/icons/linkedin_icon.svg" alt="Ícone do Linkedin" />
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src="/assets/icons/twitter_icon.svg" alt="Ícone do Twitter" />
        </a>
      </IconsContainer>
      <Line />
      <span>&copy; Jovem DEV - Todos os direitos reservados</span>
    </Container>
  );
}
