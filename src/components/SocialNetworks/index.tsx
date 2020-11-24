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
      <a href={githubUrl} rel="noopener noreferrer" target="_blank">
        <FaGithubSquare />
      </a>
      <a href={instagramUrl} rel="noopener noreferrer" target="_blank">
        <FaInstagramSquare />
      </a>
      <a href={facebookUrl} rel="noopener noreferrer" target="_blank">
        <FaFacebookSquare />
      </a>
      <a href={linkedinUrl} rel="noopener noreferrer" target="_blank">
        <FaLinkedin />
      </a>
      <a href={twitterUrl} rel="noopener noreferrer" target="_blank">
        <FaTwitterSquare />
      </a>
    </Container>
  );
}
