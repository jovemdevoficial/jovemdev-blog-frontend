import { PostData } from '../../domain/posts/post';
import { Container } from './styled';
import { SEO } from '../../infra/components/SEO';
import { SITE_NAME } from '../../config/api-config';

export type HomePageProps = {
  posts: PostData[];
};

export function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <SEO
        title={`Home | ${SITE_NAME}`}
        description="Essa é uma descrição teste"
        keywords="Blog,Tecnologia,Programação"
      />
      <Container>
        {posts.map((post) => (
          <h1 key={post.slug}>{post.title}</h1>
        ))}
      </Container>
    </>
  );
}
