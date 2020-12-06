import Link from 'next/link';
import Image from 'next/image';

import { v4 as uuidv4 } from 'uuid';

import { PostData } from '../../domain/posts/post';

import {
  Featured,
  FeaturedCover,
  FeaturedDatails,
  AuthorDetails,
  SeeMore,
} from './styled';

import { SEO } from '../../infra/components/SEO';
import { Typography } from '../../infra/components/Typography';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';
import { PostCard } from '../../patterns/PostCard';

import { SITE_NAME, SITE_URL, SITE_AUTHORS } from '../../config/site-config';
import { formateDate } from '../../utils/formate-data';
import { jsonLdHomePage } from '../../lib/json-ld-home-page';

import { MainContainer } from '../../components/MainContainer';
import { GridLayout } from '../../components/GridLayout';
import { SideNav } from '../../components/SideNav';
import LightBox from '../../components/LightBox';

import FacebookImageDefault from '../../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../../assets/images/logo-image-twitter-150x150.png';

export type HomePageProps = {
  posts: PostData[];
};

export function HomePage({ posts }: HomePageProps) {
  const jsonLd = jsonLdHomePage({ posts });

  return (
    <>
      <SEO
        title={`${SITE_NAME} | O Blog Feito Para Programadores`}
        description="Um blog repleto de conteúdo sobre tecnologia, dicas de programação, marketing digital, desenvolvimento de software e tudo mais que você precisa conhecer"
        keywords="Blog,Tecnologia,Programação"
        url={SITE_URL}
        type="blog"
        site_name={SITE_NAME}
        authors={SITE_AUTHORS}
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
        <Featured backgroundUrlResponsive={posts[0].cover.formats.large.url}>
          <FeaturedCover>
            <Link href="/posts/[slug]" as={`/posts/${posts[0].slug}`}>
              <a aria-label={posts[0].title}>
                <Image
                  src={posts[0].cover.formats.small.url}
                  alt={posts[0].title}
                  width={400}
                  height={400}
                  loading="eager"
                  priority={true}
                />
              </a>
            </Link>
          </FeaturedCover>

          <FeaturedDatails>
            <AuthorDetails>
              <Image
                src={posts[0].authors[0].avatar.formats.thumbnail.url}
                alt={posts[0].authors[0].name}
                width={50}
                height={50}
                loading="eager"
                priority={true}
              />
              <div>
                <span>
                  Publicado por{' '}
                  <Link
                    href="/autor/[name]"
                    as={`/autor/${posts[0].authors[0].slug}`}
                  >
                    <a>{posts[0].authors[0].name}</a>
                  </Link>
                </span>
                <span>{formateDate(posts[0].published_at)}</span>
              </div>
            </AuthorDetails>

            <Typography component="h1">
              <Link href="/posts/[slug]" as={`/posts/${posts[0].slug}`}>
                <a>{posts[0].title}</a>
              </Link>
            </Typography>

            <Typography component="subtitle1">
              {posts[0].description}
            </Typography>
          </FeaturedDatails>
        </Featured>
        <GridLayout>
          {posts.slice(1).map((post) => {
            return <PostCard key={uuidv4()} post={post} />;
          })}
        </GridLayout>
        <SeeMore>
          <Link href="/posts/page/1">
            <a>
              <span>Ver mais</span>
            </a>
          </Link>
        </SeeMore>
      </MainContainer>
      <Footer />
    </>
  );
}
