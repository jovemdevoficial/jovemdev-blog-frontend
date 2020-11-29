import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { SEO } from '../../infra/components/SEO';

import { MainContainer } from '../../components/MainContainer';

import { Author } from '../../domain/authors/author';
import { SITE_NAME, SITE_URL } from '../../config/api-config';

import { AuthorDetails } from '../../components/AuthorDetails';
import { GridLayout } from '../../components/GridLayout';
import { PostCard } from '../../patterns/PostCard';

import { Line } from './styled';
import { SideNav } from '../../components/SideNav';
import LightBox from '../../components/LightBox';

export type AuthorPageProps = {
  author: Author;
};

export function AuthorPage({ author }: AuthorPageProps) {
  return (
    <>
      <SEO
        title={`${author.name} | ${SITE_NAME} Blog`}
        description={author.biography}
        keywords="Autor, Biografia, Posts"
        site_name={SITE_NAME}
        type="blog"
        authors={[{ name: author.name }]}
        url={`${SITE_URL}/autor/${author.slug}`}
      />
      <Header />
      <SideNav />

      <LightBox />
      <MainContainer>
        <AuthorDetails author={author} />
        <Line />
        <GridLayout>
          {author.posts.map((post) => {
            return <PostCard key={post.slug} post={post} />;
          })}
        </GridLayout>
      </MainContainer>
      <Footer />
    </>
  );
}
