import { postsPerPage } from '../config/constants';

export function createArrayWithNumberOfPosts(numberOfPosts: number): string[] {
  const numberOfPages = Math.ceil(numberOfPosts / postsPerPage);
  const arrayPages = [];
  let i: number;

  for (i = 1; i <= numberOfPages; i++) {
    arrayPages.push(String(i));
  }

  return arrayPages;
}
