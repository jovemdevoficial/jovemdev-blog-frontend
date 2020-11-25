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
      <img src={author.avatar.formats.thumbnail.url} alt={author.name} />
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
