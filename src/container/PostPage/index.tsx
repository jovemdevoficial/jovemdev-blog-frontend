import Link from 'next/link';

import { PostData } from '../../domain/posts/post';

import { SEO } from '../../infra/components/SEO';
import { Typography } from '../../infra/components/Typography';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { SITE_NAME, SITE_URL } from '../../config/api-config';

import { MainContainer } from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';

import { PostDetails, AuthorDetails, AuthorDescription } from './styled';
import { insertZeroLeft } from '../../utils/insert-zero-left';
import { formateDate } from '../../utils/formate-data';

export type HomePageProps = {
  post: PostData;
};

export function PostPage({ post }: HomePageProps) {
  return (
    <>
      <SEO
        title={`${post.title} | ${SITE_NAME}`}
        description={post.description}
        keywords={post.seo}
        url={`${SITE_URL}/posts/${post.slug}`}
        type="article"
        site_name={SITE_NAME}
        authors={post.authors}
        category={post.category.name}
        tags={post.tags}
        published_time={post.published_at}
      />
      <Header />
      <MainContainer>
        <PostDetails>
          <span>{`Publicado em ${formateDate(post.published_at)}`}</span>
          <Typography component="title">{post.title}</Typography>
          <Typography component="subtitle3">{post.description}</Typography>
          <img src={post.cover.formats.small.url} alt={post.title} />

          {post.authors.map((author) => {
            return (
              <AuthorDetails key={author.published_at}>
                <AuthorDescription>
                  <img
                    src={author.avatar.formats.thumbnail.url}
                    alt={author.name}
                  />
                  <div>
                    <Link href="/autor/[name]" as={`/autor/${author.name}`}>
                      <a>
                        <span>{author.name}</span>
                      </a>
                    </Link>

                    <span>
                      {insertZeroLeft(author.amountOfPosts)} posts publicados
                    </span>
                  </div>
                </AuthorDescription>
              </AuthorDetails>
            );
          })}
        </PostDetails>

        <PostContainer content={post.content} />
      </MainContainer>
      <Footer />
    </>
  );
}
