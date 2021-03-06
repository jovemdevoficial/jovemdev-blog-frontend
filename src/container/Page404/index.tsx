import Link from 'next/link';
import Image from 'next/image';

import { FaHome } from 'react-icons/fa';

import { SEO } from '../../infra/components/SEO';
import { Typography } from '../../infra/components/Typography';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { Container } from './styled';

import pageNotFound from '../../assets/svgs/page_not_found.svg';
import FacebookImageDefault from '../../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../../assets/images/logo-image-twitter-150x150.png';

import { SITE_NAME, SITE_AUTHORS, SITE_URL } from '../../config/site-config';
import { SideNav } from '../../components/SideNav';
import LightBox from '../../components/LightBox';

export function Page404() {
  return (
    <>
      <SEO
        title={`Página Não Encontrada | ${SITE_NAME}`}
        authors={SITE_AUTHORS}
        description="Ops, a página que você procura não existe em nosso blog, tente acessar outro endereço"
        keywords="404, not found"
        type="blog"
        site_name={SITE_NAME}
        url={`${SITE_URL}/404`}
        image_default={FacebookImageDefault}
        image_large={FacebookImageLarge}
        image_small={FacebookImageSmall}
        image_twitter={TwitterImage}
      />
      <Header />
      <SideNav />

      <LightBox />
      <Container>
        <Image
          src={pageNotFound}
          alt="Página não encontrada"
          width={920}
          height={420}
        />
        <Typography component="subtitle1">
          Ops, a página que você procura não existe em nosso blog, tente acessar
          outro endereço
        </Typography>
        <Link href="/">
          <a>
            <FaHome size={32} /> <strong>Voltar para a página inicial</strong>
          </a>
        </Link>
      </Container>
      <Footer />
    </>
  );
}
