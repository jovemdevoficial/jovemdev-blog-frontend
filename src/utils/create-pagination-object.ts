import { postsPerPage } from '../config/constants';
import { countAllPosts } from '../data/posts/count-all-post';
import { PaginationTypes } from '../domain/posts/pagination';

export type createPaginationObjectProps = {
  pageUrl: number;
  urlCountAllPosts: string;
};

export async function createPaginationObject({
  pageUrl,
  urlCountAllPosts,
}: createPaginationObjectProps): Promise<PaginationTypes> {
  const page = pageUrl;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const numberOfPosts = Number(await countAllPosts(urlCountAllPosts));

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
