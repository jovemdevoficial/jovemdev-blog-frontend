import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  Configure,
} from 'react-instantsearch-dom';
import { FaAlgolia, FaSearch } from 'react-icons/fa';

import { SEO } from '../../infra/components/SEO';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { Hit } from '../../components/Hit';

import {
  BackgroundContainer,
  Container,
  AboveTheFoldContent,
  SearchWrapper,
  Algolia,
  SearchBoxAlgolia,
  SearchButton,
} from './styled';

import { SITE_NAME, SITE_AUTHORS, SITE_URL } from '../../config/site-config';
import { API_KEY, APP_ID, INDEX_NAME } from '../../config/algolia-config';

import BackgroundImage from '../../assets/svgs/imagem-de-fundo-da-pagina-de-pesquisa-do-blog-jovem-dev.svg';
import FacebookImageDefault from '../../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../../assets/images/logo-image-twitter-150x150.png';

import { SideNav } from '../../components/SideNav';
import LightBox from '../../components/LightBox';

export function SearchPage() {
  const searchClient = algoliasearch(APP_ID, API_KEY);

  return (
    <>
      <SEO
        title={`Pesquisa | ${SITE_NAME} Blog`}
        authors={SITE_AUTHORS}
        description="Não encontrou o que procura? Então faça uma pesquisa avançada em nosso blog utilizando o Algolia"
        site_name={SITE_NAME}
        keywords="Pesquisa, blog"
        type="blog"
        url={`${SITE_URL}/pesquisa`}
        image_default={FacebookImageDefault}
        image_large={FacebookImageLarge}
        image_small={FacebookImageSmall}
        image_twitter={TwitterImage}
      />
      <Header />
      <SideNav />

      <LightBox />
      <BackgroundContainer>
        <div></div>
        <img
          src={BackgroundImage}
          alt="Imagem de fundo da página de pesquisa do blog Jovem Dev"
        />
      </BackgroundContainer>
      <Container>
        <AboveTheFoldContent>
          <h1>Não encontrou o que você procura? Faça uma pesquisa avançada</h1>
        </AboveTheFoldContent>
        <SearchWrapper>
          <InstantSearch indexName={INDEX_NAME} searchClient={searchClient}>
            <Configure hitsPerPage={30} />
            <SearchBoxAlgolia>
              <SearchBox
                autoFocus
                translations={{ placeholder: 'Pesquisar' }}
              />
              <SearchButton>
                <FaSearch />
              </SearchButton>
            </SearchBoxAlgolia>
            <Stats
              translations={{
                stats(nbHits, timeSpentMS) {
                  return nbHits == 1
                    ? `${nbHits} resultado encontrado em ${timeSpentMS}ms`
                    : `${nbHits} resultados encontrados em ${timeSpentMS}ms`;
                },
              }}
            />
            <Hits hitComponent={Hit} />
          </InstantSearch>
          <Algolia>
            Powered by Algolia{' '}
            <FaAlgolia style={{ marginLeft: '10px' }} size={24} />
          </Algolia>
        </SearchWrapper>
      </Container>
      <Footer />
    </>
  );
}
