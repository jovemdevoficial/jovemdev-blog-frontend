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

  const author = data.length > 0 ? data[0] : {};

  return {
    props: {
      author,
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
