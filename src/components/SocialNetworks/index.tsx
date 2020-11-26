import {
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

import { Container } from './styled';

export type SocialNetworksProps = {
  githubUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
};

export function SocialNetworks({
  facebookUrl,
  githubUrl,
  instagramUrl,
  linkedinUrl,
  twitterUrl,
}: SocialNetworksProps) {
  return (
    <Container>
      <a
        aria-label="Ícone do GitHub"
        href={githubUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
      <a
        aria-label="Ícone do Instagram"
        href={instagramUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaInstagramSquare />
      </a>
      <a
        aria-label="Ícone do Facebook"
        href={facebookUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaFacebookSquare />
      </a>
      <a
        aria-label="Ícone do Linkedin"
        href={linkedinUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        aria-label="Ícone do Twitter"
        href={twitterUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaTwitterSquare />
      </a>
    </Container>
  );
}
