import { Category } from '../../domain/categories/category';
import { CATEGORIES_URL } from '../../config/api-config';
import { fetchJson } from '../../utils/fetch-json';

export const getAllCategories = async (query = '') => {
  const url = `${CATEGORIES_URL}?${query}`;
  const posts = await fetchJson<Category[]>(url);
  return posts;
};
