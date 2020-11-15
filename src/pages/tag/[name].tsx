import { GetStaticProps, GetStaticPaths } from 'next';
// import { useRouter } from 'next/router';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getAllTags } from '../../data/tags/get-all-tags';
import { PostData } from '../../domain/posts/post';

export type DynamicTagProps = {
  posts: PostData[];
  tag: string;
};

export default function DynamicTag({ posts, tag }: DynamicTagProps) {
  /*
  const router = useRouter();

  if (router.isFallback) {
    return <div>...Loading</div>;
  }
  */

  return (
    <>
      <h1>Categorias: {tag}</h1>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const tagName = ctx.params.name;
  const urlQuery = `_sort=id:desc&tags.name_contains=${tagName}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: {
      posts,
      tag: tagName,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          name: tag.name,
        },
      };
    }),
    fallback: false,
  };
};
