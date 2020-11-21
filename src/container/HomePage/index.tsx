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

import { SITE_NAME } from '../../config/api-config';

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
        url="http://localhost:3000"
        type="blog"
        site_name="Jovem Dev"
        authors={[{ name: 'Almerindo Paixão' }, { name: 'Angélica Pereira' }]}
      />
      <Header />
      <MainContainer>
        <Featured backgroundUrlResponsive={posts[1].cover.formats.large.url}>
          <FeaturedCover>
            <img src={posts[1].cover.formats.small.url} alt="Qualquer Coisa" />
          </FeaturedCover>

          <FeaturedDatails>
            <AuthorDetails>
              <img
                src={posts[0].authors[0].avatar.formats.thumbnail.url}
                alt="Author Avatar"
              />
              <div>
                <span>
                  Publicado por{' '}
                  <Link href="/">
                    <a>Angélica Pereira</a>
                  </Link>
                </span>
                <span>20 de novembro de 2020</span>
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
                <Link href="#">
                  <a>
                    <FaHeart />
                  </a>
                </Link>
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
