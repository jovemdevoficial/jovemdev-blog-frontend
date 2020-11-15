import { PostData } from '../../domain/posts/post';
import { POSTS_URL } from '../../config/api-config';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (query = '') => {
  const url = `${POSTS_URL}?${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
