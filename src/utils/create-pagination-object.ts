import { postsPerPage } from '../config/constants';
import { PaginationTypes } from '../domain/posts/pagination';

export type createPaginationObjectProps = {
  pageUrl: number;
  numberOfPosts: number;
};

export async function createPaginationObject({
  pageUrl,
  numberOfPosts,
}: createPaginationObjectProps): Promise<PaginationTypes> {
  const page = pageUrl;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const numberOfPages = Math.ceil(numberOfPosts / postsPerPage);

  return {
    nextPage,
    numberOfPosts,
    numberOfPages,
    postsPerPage,
    previousPage,
    page,
  };
}
