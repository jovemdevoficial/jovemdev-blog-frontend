import Link from 'next/link';
import { FaShare, FaHeart } from 'react-icons/fa';

import { PostData } from '../../domain/posts/post';

import {
  Container,
  Featured,
  FeaturedCover,
  FeaturedDatails,
  AuthorDetails,
  IconsContainer,
} from './styled';

import { SEO } from '../../infra/components/SEO';
import { Typography } from '../../infra/components/Typography';
import { Header } from '../../patterns/Header';

import { SITE_NAME } from '../../config/api-config';

import { MainContainer } from '../../components/MainContainer';

export type HomePageProps = {
  posts: PostData[];
};

export function HomePage() {
  return (
    <>
      <SEO
        title={`Home | ${SITE_NAME}`}
        description="Essa é uma descrição teste"
        keywords="Blog,Tecnologia,Programação"
        url="http://localhost:3000"
        type="blog"
        site_name="Jovem Dev"
        author="Almerindo Paixão"
      />
      <Container>
        <Header />
        <MainContainer>
          <Featured>
            <FeaturedCover>
              <img
                src="https://res.cloudinary.com/almerindopaixao/image/upload/v1605244650/small_Post_Azul_com_Titulo_Grande_de_Novembro_Azul_para_Redes_Sociais_84058d78b3.png"
                alt="Qualquer Coisa"
              />
            </FeaturedCover>

            <FeaturedDatails>
              <AuthorDetails>
                <img
                  src="https://res.cloudinary.com/almerindopaixao/image/upload/v1605244645/thumbnail_Post_Azul_com_Titulo_Grande_de_Novembro_Azul_para_Redes_Sociais_84058d78b3.png"
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
                Como utilizar o github Actions para mandar seu profile
                atualizado e bonito e lorem ipsun etc etc etc...
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
        </MainContainer>
      </Container>
    </>
  );
}
