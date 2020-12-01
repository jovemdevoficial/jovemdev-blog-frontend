import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import { FaBlog } from 'react-icons/fa';

import { PostData } from '../../domain/posts/post';
import {
  Card,
  PostCardDetails,
  ContainerPostDetails,
  PublishDetails,
} from './styled';

import { Typography } from '../../infra/components/Typography';

import { formateDate } from '../../utils/formate-data';

export type PostCardProps = {
  post: PostData;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <Link href={`/posts/${post.slug}`}>
        <a aria-label={post.title}>
          <Image
            src={post.cover.formats.small.url}
            alt={post.title}
            width={280}
            height={190}
            layout="responsive"
            loading="eager"
          />
        </a>
      </Link>

      <PostCardDetails>
        <span>{formateDate(post.published_at)}</span>
        <Typography component="h2">
          <Link href={`/posts/${post.slug}`}>
            <a arial-label="Mostrando últimos posts e vídeos no Github Profile">
              {post.title}
            </a>
          </Link>
        </Typography>

        <Typography component="subtitle2">{post.description}</Typography>

        <ContainerPostDetails>
          <PublishDetails>
            <span>
              Publicado por
              {post.authors.map((author) => {
                return (
                  <span key={uuidv4()}>
                    <Link href={`/autor/${author.slug}`}>
                      <a>{author.name}</a>
                    </Link>
                  </span>
                );
              })}
            </span>
          </PublishDetails>
          <FaBlog size={20} color="#181414" />
        </ContainerPostDetails>
      </PostCardDetails>
    </Card>
  );
}
