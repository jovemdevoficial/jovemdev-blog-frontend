import { PostData } from '../../domain/posts/post';
import {
  Container,
  Main,
  Featured,
  ImageCover,
  FeaturedDatails,
} from './styled';
import { SEO } from '../../infra/components/SEO';
import { Typography } from '../../infra/components/Typography';
import { SITE_NAME } from '../../config/api-config';

import { Header } from '../../patterns/Header';

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
      />
      <Container>
        <Header />
        <Main>
          <Featured>
            <ImageCover>
              <img
                src="https://res.cloudinary.com/almerindopaixao/image/upload/v1605244650/small_Post_Azul_com_Titulo_Grande_de_Novembro_Azul_para_Redes_Sociais_84058d78b3.png"
                alt="Qualquer Coisa"
              />
            </ImageCover>
            <FeaturedDatails>
              <Typography component="h1">Olá eu sou um h1</Typography>
            </FeaturedDatails>
          </Featured>
        </Main>
      </Container>
    </>
  );
}
