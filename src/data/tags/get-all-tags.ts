import { Tag } from '../../domain/tags/tag';
import { TAGS_URL } from '../../config/api-config';
import { fetchJson } from '../../utils/fetch-json';

export const getAllTags = async (query = '') => {
  const url = `${TAGS_URL}?${query}`;
  const posts = await fetchJson<Tag[]>(url);
  return posts;
};
