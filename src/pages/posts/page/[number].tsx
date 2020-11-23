import { GetStaticProps, GetStaticPaths } from 'next';
import { PostData } from '../../../domain/posts/post';
import { PaginationTypes } from '../../../domain/posts/pagination';
import { countAllPosts } from '../../../data/posts/count-all-post';
import { postsPerPage } from '../../../config/constants';
import { getAllPosts } from '../../../data/posts/get-all-posts';

import { PaginationPage } from '../../../container/PaginationPage';
import { createArrayWithNumberOfPosts } from '../../../utils/create-array-with-number-of-posts';

export type PagePostsProps = {
  posts: PostData[];
  pagination: PaginationTypes;
};

export default function PagePosts({ pagination }: PagePostsProps) {
  return <PaginationPage pagination={pagination} />;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params.number);
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const urlQuery = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}`;

  const posts = await getAllPosts(urlQuery);

  const numberOfPosts = Number(await countAllPosts());

  const numberOfPages = Math.ceil(numberOfPosts / postsPerPage);

  const pagination: PaginationTypes = {
    nextPage,
    numberOfPosts,
    numberOfPages,
    postsPerPage,
    previousPage,
    page,
  };

  return {
    props: { posts, pagination },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const arrayPages = await createArrayWithNumberOfPosts();

  return {
    paths: arrayPages.map((number) => {
      return {
        params: {
          number: number,
        },
      };
    }),
    fallback: false,
  };
};
