import { PostAuthor, PostTag, PostCategory } from '../domain/posts/post';
import { SITE_URL } from '../config/api-config';

export type JsonLdPostPageProps = {
  title: string;
  description: string;
  category: PostCategory;
  image: string[];
  datePublished: string;
  dateModified: string;
  dateCreated: string;
  slug: string;
  seo: string;
  authors: PostAuthor[];
  tags: PostTag[];
};

export const jsonLdPostPage = ({
  title,
  image,
  dateCreated,
  dateModified,
  datePublished,
  description,
  authors,
  category,
  slug,
  seo,
  tags,
}: JsonLdPostPageProps) => {
  const breadcrumbList = tags.map((tag) => {
    return {
      ['@context']: 'https://schema.org',
      ['@type']: 'BreadcrumbList',
      itemListElement: [
        {
          ['@type']: 'ListItem',
          position: 1,
          name: 'Todos as Tags',
          item: `${SITE_URL}/tags`,
        },
        {
          ['@type']: 'ListItem',
          position: 2,
          name: tag.name,
          item: `${SITE_URL}/tag/${tag.name}/page/1`,
        },
        {
          ['@type']: 'ListItem',
          position: 3,
          name: title,
        },
      ],
    };
  });

  breadcrumbList.push({
    ['@context']: 'https://schema.org',
    ['@type']: 'BreadcrumbList',
    itemListElement: [
      {
        ['@type']: 'ListItem',
        position: 1,
        name: 'Todas as Categorias',
        item: `${SITE_URL}/categorias`,
      },
      {
        ['@type']: 'ListItem',
        position: 2,
        name: category.name,
        item: `${SITE_URL}/categoria/${category.name}/page/1`,
      },
      {
        ['@type']: 'ListItem',
        position: 3,
        name: title,
      },
    ],
  });

  return [
    {
      ['@context']: 'http://schema.org/',
      ['@type']: 'BlogPosting',
      mainEntityOfPage: {
        ['@type']: 'Blog',
        ['@id']: `${SITE_URL}`,
      },
      headline: title,
      url: `${SITE_URL}/posts/${slug}`,
      image: image,
      genre: category.name,
      keywords: seo,
      datePublished: datePublished,
      dateModified: dateModified,
      dateCreated: dateCreated,
      description: description,
      author: authors.map((author) => {
        return {
          ['@type']: 'Person',
          name: author.name,
          url: `${SITE_URL}/autor/${author.slug}`,
          image: author.avatar.formats.small.url,
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
    },
    breadcrumbList,
  ];
};
