import Link from 'next/link';

import { Container, AuthorContact, AuthorDescription } from './styled';
import { PostAuthor } from '../../domain/posts/post';
import { SocialNetworks } from '../SocialNetworks';

export type AuthorCardProps = {
  author: PostAuthor;
};

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Container>
      <img src={author.avatar.formats.thumbnail.url} alt={author.name} />
      <div>
        <AuthorDescription>
          <Link href="/autor/[slug]" as={`/autor/${author.slug}`}>
            <a>
              <h3>{author.name}</h3>
            </a>
          </Link>

          <p>{author.biography}</p>
        </AuthorDescription>
        <AuthorContact>
          <SocialNetworks
            facebookUrl={author.social_networks.facebook}
            githubUrl={author.social_networks.github}
            instagramUrl={author.social_networks.instagram}
            linkedinUrl={author.social_networks.linkedin}
            twitterUrl={author.social_networks.twitter}
          />
          <span>
            <strong>Contato:</strong>
            <br />
            {author.email}
          </span>
        </AuthorContact>
      </div>
    </Container>
  );
}
