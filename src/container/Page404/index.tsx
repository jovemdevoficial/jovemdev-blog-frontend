import Link from 'next/link';
import Image from 'next/image';

import { FaHome } from 'react-icons/fa';

import { SEO } from '../../infra/components/SEO';
import { Typography } from '../../infra/components/Typography';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { Container } from './styled';

import pageNotFound from '../../assets/svgs/page_not_found.svg';

import { SITE_NAME, SITE_AUTHORS } from '../../config/api-config';

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
      />
      <Header />
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
