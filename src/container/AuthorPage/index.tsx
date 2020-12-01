import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';
import { PostCard } from '../../patterns/PostCard';

import { SEO } from '../../infra/components/SEO';

import { Author } from '../../domain/authors/author';
import { SITE_NAME, SITE_URL } from '../../config/api-config';

import { jsonLdAuthorPage } from '../../lib/json-ld-author-page';

import { MainContainer } from '../../components/MainContainer';
import { AuthorDetails } from '../../components/AuthorDetails';
import { GridLayout } from '../../components/GridLayout';
import { SideNav } from '../../components/SideNav';
import LightBox from '../../components/LightBox';

import FacebookImageDefault from '../../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../../assets/images/logo-image-twitter-150x150.png';

import { Line } from './styled';

export type AuthorPageProps = {
  author: Author;
};

export function AuthorPage({ author }: AuthorPageProps) {
  const configJson = {
    name: author.name,
    email: author.email,
    slug: author.slug,
    image: author.avatar.formats.small.url,
    sameAs: [
      author.social_networks.facebook,
      author.social_networks.github,
      author.social_networks.instagram,
      author.social_networks.linkedin,
      author.social_networks.twitter,
    ],
  };

  const jsonLd = jsonLdAuthorPage(configJson);

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
        image_default={FacebookImageDefault}
        image_large={FacebookImageLarge}
        image_small={FacebookImageSmall}
        image_twitter={TwitterImage}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        ></script>
      </SEO>
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
