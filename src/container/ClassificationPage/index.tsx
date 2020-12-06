import Link from 'next/link';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { Typography } from '../../infra/components/Typography';

import { MainContainer } from '../../components/MainContainer';
import LightBox from '../../components/LightBox';
import { SideNav } from '../../components/SideNav';

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
  return (
    <>
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
