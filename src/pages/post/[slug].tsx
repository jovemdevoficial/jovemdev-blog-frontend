import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../domain/posts/post';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { countAllPosts } from '../../data/posts/count-all-post';
import { getPost } from '../../data/posts/get-post';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  return (
    <>
      <h1>{`Post: ${post.title}`}</h1>
      <br />
      <p>{post.published_at}</p>
      <br />
      {post.content}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.slug;
  const data = await getPost(slug);

  const post = data.length > 0 ? data[0] : {};

  return {
    props: { post: post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
