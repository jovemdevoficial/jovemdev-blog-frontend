import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllAuthors } from '../../data/authors/get-all-authors';
import { Author } from '../../domain/authors/author';

import { AuthorPage } from '../../container/AuthorPage';

export type DynamicAuthorProps = {
  author: Author;
};

export default function DynamicAuthor({ author }: DynamicAuthorProps) {
  return <AuthorPage author={author} />;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const authorSlug = ctx.params.slug;
  const urlQuery = `slug=${authorSlug}`;
  const data = await getAllAuthors(urlQuery);

  data[0].posts.sort((a, b) => (b.id < a.id ? -1 : 1));

  const author = data[0];

  return {
    props: {
      author: {
        name: author.name,
        biography: author.biography,
        slug: author.slug,
        email: author.email,
        social_networks: author.social_networks,
        avatar: {
          formats: {
            thumbnail: {
              url: author.avatar.formats.thumbnail.url,
            },
            small: {
              url: author.avatar.formats.small.url,
            },
            large: {
              url: author.avatar.formats.large.url,
            },
            medium: {
              url: author.avatar.formats.medium.url,
            },
          },
        },
        posts: author.posts.map((post) => {
          return {
            title: post.title,
            cover: {
              formats: {
                small: {
                  url: post.cover.formats.small.url,
                },
              },
            },
            slug: post.slug,
            published_at: post.published_at,
            description: post.description,
            authors: [{ name: author.name }, { slug: author.slug }],
          };
        }),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = await getAllAuthors();

  return {
    paths: authors.map((author) => {
      return {
        params: {
          slug: author.slug,
        },
      };
    }),
    fallback: false,
  };
};
