import { PostData } from '../../domain/posts/post';
import { PaginationTypes } from '../../domain/posts/pagination';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { MainContainer } from '../../components/MainContainer';
import { GridLayout } from '../../components/GridLayout';
import { PostCard } from '../../patterns/PostCard';
import { Pagination } from '../../components/Pagination';
import { PaginationDescription } from '../../components/PaginationDescription';

export type PaginationPageProps = {
  posts?: PostData;
  category?: string;
  tag?: string;
  pagination: PaginationTypes;
};

export function PaginationPage({
  pagination,
  category = '',
  tag = '',
}: PaginationPageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <PaginationDescription category={category} tag={tag} />
        <GridLayout>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </GridLayout>
        <Pagination {...pagination} category={category} tag={tag} />
      </MainContainer>
      <Footer />
    </>
  );
}
