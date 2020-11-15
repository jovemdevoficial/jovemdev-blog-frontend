import { Author } from '../../domain/authors/author';
import { AUTHORS_URL } from '../../config/api-config';
import { fetchJson } from '../../utils/fetch-json';

export const getAllAuthors = async (query = '') => {
  const url = `${AUTHORS_URL}?${query}`;
  const posts = await fetchJson<Author[]>(url);
  return posts;
};
