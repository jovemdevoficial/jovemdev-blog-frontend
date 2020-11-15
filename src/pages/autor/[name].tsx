import { GetStaticProps, GetStaticPaths } from 'next';
// import { useRouter } from 'next/router';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getAllAuthors } from '../../data/authors/get-all-authors';
import { PostData } from '../../domain/posts/post';

export type DynamicAuthorProps = {
  posts: PostData[];
  author: string;
};

export default function DynamicAuthor({ posts, author }: DynamicAuthorProps) {
  /*
  const router = useRouter();

  if (router.isFallback) {
    return <div>...Loading</div>;
  }
  */

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
  const authorName = ctx.params.name;
  const urlQuery = `_sort=id:desc&authors.name_contains=${authorName}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: {
      posts,
      author: authorName,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = await getAllAuthors();

  return {
    paths: authors.map((author) => {
      return {
        params: {
          name: author.name,
        },
      };
    }),
    fallback: false,
  };
};
