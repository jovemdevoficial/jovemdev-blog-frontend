import { Container, Line, IconsContainer } from './styled';

import githubIcon from '../../assets/icons/github_icon.svg';
import instagramIcon from '../../assets/icons/instagram_icon.svg';
import facebookIcon from '../../assets/icons/facebook_icon.svg';
import linkedinIcon from '../../assets/icons/linkedin_icon.svg';
import twitterIcon from '../../assets/icons/twitter_icon.svg';

export function Footer() {
  return (
    <Container>
      <Line />
      <IconsContainer>
        <a
          href="https://github.com/jovemdevoficial"
          rel="noopener noreferrer external"
          target="_blank"
        >
          <img src={githubIcon} alt="Ícone do Github" />
        </a>
        <a
          href="https://www.instagram.com/jovemdevoficial/"
          rel="noopener noreferrer external"
          target="_blank"
        >
          <img src={instagramIcon} alt="Ícone do Instagram" />
        </a>
        <a
          href="https://www.facebook.com/jovemdevoficial"
          rel="noopener noreferrer external"
          target="_blank"
        >
          <img src={facebookIcon} alt="Ícone do Facebook" />
        </a>
        <a
          href="https://www.linkedin.com/company/jovemdev/"
          rel="noopener noreferrer external"
          target="_blank"
        >
          <img src={linkedinIcon} alt="Ícone do Linkedin" />
        </a>
        <a
          href="https://twitter.com/jovemdevoficial"
          rel="noopener noreferrer external"
          target="_blank"
        >
          <img src={twitterIcon} alt="Ícone do Twitter" />
        </a>
      </IconsContainer>
      <Line />
      <span>&copy; Jovem DEV - Todos os direitos reservados</span>
    </Container>
  );
}
