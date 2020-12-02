import Link from 'next/link';
import Image from 'next/image';

import { Container, AuthorContact, AuthorDescription } from './styled';
import { PostAuthor } from '../../domain/posts/post';
import { SocialNetworks } from '../SocialNetworks';

import { insertZeroLeft } from '../../utils/insert-zero-left';

export type AuthorCardProps = {
  author: PostAuthor;
};

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Container>
      <Image
        src={author.avatar.formats.thumbnail.url}
        alt={author.name}
        width={160}
        height={160}
        layout="fixed"
      />
      <div>
        <AuthorDescription>
          <div>
            <Link href="/autor/[slug]" as={`/autor/${author.slug}`}>
              <a>
                <h3>{author.name}</h3>
              </a>
            </Link>
            <span>{`${insertZeroLeft(
              author.amountOfPosts,
            )} posts publicados`}</span>
          </div>

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
