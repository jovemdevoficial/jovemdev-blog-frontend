import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getAllAuthors } from '../../data/authors/get-all-authors';
import { PostData } from '../../domain/posts/post';

export type DynamicAuthorProps = {
  posts: PostData[];
  author: string;
};

export default function DynamicAuthor({ posts, author }: DynamicAuthorProps) {
  return (
    <>
      <h1>Autor: {author}</h1>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const authorSlug = ctx.params.slug;
  const urlQuery = `_sort=id:desc&authors.slug_contains=${authorSlug}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: {
      posts,
      author: posts[0].authors.filter((value) => value.slug == authorSlug)[0]
        .name,
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
