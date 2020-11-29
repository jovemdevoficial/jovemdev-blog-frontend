import { PostData } from '../../domain/posts/post';
import { PaginationTypes } from '../../domain/posts/pagination';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { MainContainer } from '../../components/MainContainer';
import { GridLayout } from '../../components/GridLayout';
import { PostCard } from '../../patterns/PostCard';
import { Pagination } from '../../components/Pagination';
import { PaginationDescription } from '../../components/PaginationDescription';
import { SideNav } from '../../components/SideNav';
import LightBox from '../../components/LightBox';

export type PaginationPageProps = {
  posts: PostData[];
  categoryName?: string;
  categorySlug?: string;
  tagName?: string;
  tagSlug?: string;
  pagination: PaginationTypes;
};

export function PaginationPage({
  pagination,
  categoryName = '',
  categorySlug = '',
  tagName = '',
  tagSlug = '',
  posts,
}: PaginationPageProps) {
  return (
    <>
      <Header />
      <SideNav />

      <LightBox />
      <MainContainer>
        <PaginationDescription category={categoryName} tag={tagName} />
        <GridLayout>
          {posts.map((post) => {
            return <PostCard key={post.slug} post={post} />;
          })}
        </GridLayout>
        <Pagination {...pagination} category={categorySlug} tag={tagSlug} />
      </MainContainer>
      <Footer />
    </>
  );
}
