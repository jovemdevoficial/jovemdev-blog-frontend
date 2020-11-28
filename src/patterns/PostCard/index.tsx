import Link from 'next/link';
import Image from 'next/image';

import { FaShare, FaHeart } from 'react-icons/fa';

import { PostData } from '../../domain/posts/post';
import {
  Card,
  PostCardDetails,
  ContainerPostDetails,
  PublishDetails,
  IconsDetails,
} from './styled';

import { Typography } from '../../infra/components/Typography';

import { SITE_URL } from '../../config/api-config';

import { formateDate } from '../../utils/formate-data';

export type PostCardProps = {
  post: PostData;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <Link href={`${SITE_URL}/posts/${post.slug}`}>
        <a aria-label={post.title}>
          <Image
            src={post.cover.formats.small.url}
            alt={post.title}
            width={280}
            height={190}
            layout="responsive"
            loading="eager"
            priority={true}
          />
        </a>
      </Link>

      <PostCardDetails>
        <span>{formateDate(post.published_at)}</span>
        <Typography component="h2">
          <Link href={`${SITE_URL}/posts/${post.slug}`}>
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
                  <>
                    <br />
                    <Link
                      key={author.slug}
                      href={`${SITE_URL}/autor/${author.slug}`}
                    >
                      <a>{author.name}</a>
                    </Link>
                  </>
                );
              })}
            </span>
          </PublishDetails>

          <IconsDetails>
            <div>
              <span>10</span>
              <Link href="/">
                <a aria-label="FaHeart">
                  <FaHeart />
                </a>
              </Link>
            </div>
            <Link href={`${SITE_URL}/posts/${post.slug}`}>
              <a aria-label="FaShare">
                <FaShare />
              </a>
            </Link>
          </IconsDetails>
        </ContainerPostDetails>
      </PostCardDetails>
    </Card>
  );
}
