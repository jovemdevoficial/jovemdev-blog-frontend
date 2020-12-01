import { SITE_NAME, SITE_URL } from '../config/api-config';
import { PostData } from '../domain/posts/post';

export type JsonLdHomePageProps = {
  posts: PostData[];
};

export function jsonLdHomePage({ posts }: JsonLdHomePageProps) {
  return {
    ['@context']: 'http://schema.org/',
    ['@type']: 'Blog',
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [
      'https://github.com/jovemdevoficial',
      'https://www.instagram.com/jovemdevoficial/',
    ],
    blogPost: posts.map((post) => {
      return {
        ['@type']: 'BlogPosting',
        headline: post.title,
        mainEntityOfPage: {
          ['@type']: 'Blog',
          ['@id']: `${SITE_URL}`,
        },
        image: [
          post.cover.formats.thumbnail.url,
          post.cover.formats.small.url,
          post.cover.formats.medium.url,
          post.cover.formats.large.url,
        ],
        datePublished: post.published_at,
        dateModified: post.updated_at,
        dateCreated: post.created_at,
        author: post.authors.map((author) => {
          return {
            ['@type']: 'Person',
            name: author.name,
            url: `${SITE_URL}/autor/${author.slug}`,
            image: author.avatar.formats.thumbnail.url,
            sameAs: [
              author.social_networks.facebook,
              author.social_networks.github,
              author.social_networks.instagram,
              author.social_networks.linkedin,
              author.social_networks.twitter,
            ],
          };
        }),
        publisher: {
          ['@type']: 'Organization',
          name: 'Jovem Dev',
          url: SITE_URL,
          logo: {
            ['@type']: 'ImageObject',
            url: `${SITE_URL}/_next/static/images/imagem-de-perfil-do-instagram-do-jovemdev-7ff0315747cc50ddae9f24b3dfef3220.png`,
          },
        },
      };
    }),
  };
}
