import Link from 'next/link';
import { FaShare, FaHeart } from 'react-icons/fa';

import { PostData } from '../../domain/posts/post';

import {
  Featured,
  FeaturedCover,
  FeaturedDatails,
  AuthorDetails,
  IconsContainer,
} from './styled';

import { SEO } from '../../infra/components/SEO';
import { Typography } from '../../infra/components/Typography';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';
import { PostCard } from '../../patterns/PostCard';

import { SITE_NAME, SITE_URL } from '../../config/api-config';
import { formateDate } from '../../utils/formate-data';

import { MainContainer } from '../../components/MainContainer';
import { GridLayout } from '../../components/GridLayout';

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
        url={SITE_URL}
        type="blog"
        site_name="Jovem Dev"
        authors={[{ name: 'Almerindo Paixão' }, { name: 'Angélica Pereira' }]}
      />
      <Header />
      <MainContainer>
        <Featured backgroundUrlResponsive={posts[0].cover.formats.large.url}>
          <FeaturedCover>
            <img src={posts[0].cover.formats.small.url} alt={posts[0].title} />
          </FeaturedCover>

          <FeaturedDatails>
            <AuthorDetails>
              <img
                src={posts[0].authors[0].avatar.formats.thumbnail.url}
                alt={posts[0].authors[0].name}
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
              Mostrando últimos posts e vídeos no Github Profile
            </Typography>

            <Typography component="subtitle1">
              Como utilizar o github Actions para mandar seu profile atualizado
              e bonito e lorem ipsun etc etc etc...
            </Typography>

            <IconsContainer>
              <div>
                <span>10</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}/posts/${posts[0].slug}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaHeart />
                </a>
              </div>
              <Link href="#">
                <a>
                  <FaShare />
                </a>
              </Link>
            </IconsContainer>
          </FeaturedDatails>
        </Featured>
        <GridLayout>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </GridLayout>
      </MainContainer>
      <Footer />
    </>
  );
}
