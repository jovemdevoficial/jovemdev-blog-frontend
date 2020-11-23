import { postsPerPage } from '../config/constants';
import { countAllPosts } from '../data/posts/count-all-post';

export async function createArrayWithNumberOfPosts(
  query = '',
): Promise<string[]> {
  const numberOfPosts = Number(await countAllPosts(query));

  const numberOfPages = Math.ceil(numberOfPosts / postsPerPage);
  const arrayPages = [];
  let i: number;

  for (i = 1; i <= numberOfPages; i++) {
    arrayPages.push(String(i));
  }

  return arrayPages;
}
