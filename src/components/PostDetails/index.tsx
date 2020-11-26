import Link from 'next/link';
import Image from 'next/image';

import { PostData } from '../../domain/posts/post';
import { SocialNetworks } from '../../components/SocialNetworks';

import { Typography } from '../../infra/components/Typography';

import { insertZeroLeft } from '../../utils/insert-zero-left';
import { formateDate } from '../../utils/formate-data';

import { Container, AuthorDetails, AuthorDescription } from './styled';

export type PostDetailsProps = {
  post: PostData;
};

export function PostDetails({ post }: PostDetailsProps) {
  return (
    <Container>
      <span>{`Publicado em ${formateDate(post.published_at)}`}</span>
      <Typography component="title">{post.title}</Typography>
      <Typography component="subtitle3">{post.description}</Typography>
      <Image
        src={post.cover.formats.large.url}
        alt={post.title}
        width={920}
        height={500}
        loading="eager"
        priority={true}
      />

      {post.authors.map((author) => {
        return (
          <AuthorDetails key={author.published_at}>
            <AuthorDescription>
              <Image
                src={author.avatar.formats.thumbnail.url}
                alt={author.name}
                width={64}
                height={64}
                loading="eager"
                priority={true}
              />
              <div>
                <Link href="/autor/[name]" as={`/autor/${author.slug}`}>
                  <a>
                    <span>{author.name}</span>
                  </a>
                </Link>

                <span>
                  {insertZeroLeft(author.amountOfPosts)} posts publicados
                </span>
              </div>
            </AuthorDescription>
            <SocialNetworks
              facebookUrl={author.social_networks.facebook}
              githubUrl={author.social_networks.github}
              instagramUrl={author.social_networks.instagram}
              linkedinUrl={author.social_networks.linkedin}
              twitterUrl={author.social_networks.twitter}
            />
          </AuthorDetails>
        );
      })}
    </Container>
  );
}
