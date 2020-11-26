import { SEO } from '../../infra/components/SEO';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { MainContainer } from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import { PostDetails } from '../../components/PostDetails';
import { ClassificationContainer } from '../../components/ClassificationContainer';
import { AuthorCard } from '../../components/AuthorCard';

import { SITE_NAME, SITE_URL } from '../../config/api-config';

import { PostData } from '../../domain/posts/post';

import { WritterBy } from './styled';

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
        updated_time={post.updated_at}
      />
      <Header />
      <MainContainer>
        <PostDetails post={post} />
        <PostContainer content={post.content} />
        <ClassificationContainer category={post.category} tags={post.tags} />
        <WritterBy>Escrito Por</WritterBy>
        {post.authors.map((author) => (
          <AuthorCard key={author.slug} author={author} />
        ))}
      </MainContainer>
      <Footer />
    </>
  );
}
