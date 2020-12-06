import { SITE_URL } from '../config/site-config';

export type JsonLdPaginationPageProps = {
  posts: { slug: string }[];
};

export function jsonLdPaginationPage({ posts }: JsonLdPaginationPageProps) {
  return {
    ['@context']: 'http://schema.org/',
    ['@type']: 'ItemList',
    itemListElement: posts.map((post, index) => {
      return {
        ['@type']: 'ListItem',
        position: Number(index) + 1,
        url: `${SITE_URL}/posts/${post.slug}`,
      };
    }),
  };
}
