import Link from 'next/link';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { SEO } from '../../infra/components/SEO';
import { Typography } from '../../infra/components/Typography';

import { MainContainer } from '../../components/MainContainer';
import LightBox from '../../components/LightBox';
import { SideNav } from '../../components/SideNav';

import { SITE_URL, SITE_NAME, SITE_AUTHORS } from '../../config/api-config';
import { jsonLdClassificationPage } from '../../lib/json-ld-classfication-page';

import FacebookImageDefault from '../../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../../assets/images/logo-image-twitter-150x150.png';

import { Container } from './styled';

export type ClassficationPageProps = {
  classificationList: { name: string; slug: string }[];
  title: string;
  name: string;
};

export function ClassificationPage({
  classificationList,
  title,
  name,
}: ClassficationPageProps) {
  const jsonLd = jsonLdClassificationPage({
    classficationList: classificationList,
    name: name,
  });

  return (
    <>
      <SEO
        title={`${title} | Jovem Dev Blog`}
        site_name={SITE_NAME}
        description="Encontre sua categoria favorita em nosso blog"
        keywords="Categorias, Blog"
        type="blog"
        authors={SITE_AUTHORS}
        url={`${SITE_URL}/categorias`}
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
        <Container>
          <Typography component="h1">{title}</Typography>
          <ul>
            {classificationList.map((classification) => {
              return (
                <li key={classification.name}>
                  <Link
                    href={`/${name}/[slug]/page/[number]`}
                    as={`/${name}/${classification.slug}/page/1`}
                  >
                    <a>{classification.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
