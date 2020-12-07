import Image from 'next/image';

import { Author } from '../../domain/authors/author';
import { SocialNetworks } from '../SocialNetworks';
import { Container, AuthorDescription, AuthorContact } from './styled';

import { Typography } from '../../infra/components/Typography';

export type AuthorDetailsProps = {
  author: Author;
};

export function AuthorDetails({ author }: AuthorDetailsProps) {
  return (
    <Container>
      <Image
        src={author.avatar.url}
        alt={author.name}
        width={150}
        height={150}
        layout="fixed"
        loading="eager"
        priority={true}
      />
      <div>
        <AuthorDescription>
          <Typography component="h1">{author.name}</Typography>
          <strong>Biografia:</strong>
          <Typography component="subtitle1">{author.biography}</Typography>
        </AuthorDescription>
        <AuthorContact>
          <div>
            <strong>Redes Sociais:</strong>
            <SocialNetworks
              facebookUrl={author.social_networks.facebook}
              githubUrl={author.social_networks.github}
              instagramUrl={author.social_networks.instagram}
              linkedinUrl={author.social_networks.linkedin}
              twitterUrl={author.social_networks.twitter}
            />
          </div>

          <span>
            <strong>Contato:</strong>
            {author.email}
          </span>
        </AuthorContact>
      </div>
    </Container>
  );
}
