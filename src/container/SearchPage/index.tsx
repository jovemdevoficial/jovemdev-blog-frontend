import { SEO } from '../../infra/components/SEO';
import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { MainContainer } from '../../components/MainContainer';

import { SITE_NAME, SITE_AUTHORS, SITE_URL } from '../../config/api-config';

export function SearchPage() {
  return (
    <>
      <SEO
        title={`Pesquisa | ${SITE_NAME} Blog`}
        authors={SITE_AUTHORS}
        description="Página de pesquisas do Blog jovem dev"
        site_name={SITE_NAME}
        keywords="Pesquisa, blog"
        type="blog"
        url={`${SITE_URL}/pesquisa`}
      />
      <Header />
      <MainContainer>
        <h1>Pesquisa</h1>
      </MainContainer>
      <Footer />
    </>
  );
}
