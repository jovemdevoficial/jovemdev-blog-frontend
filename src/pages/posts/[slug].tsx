import { GetStaticPaths, GetStaticProps } from 'next';
import { PostAuthor, PostData } from '../../domain/posts/post';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { countAllPosts } from '../../data/posts/count-all-post';
import { getPost } from '../../data/posts/get-post';

import { PostPage } from '../../container/PostPage';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  return <PostPage post={post} />;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.slug;
  const data = await getPost(slug);

  let post = {};
  const authors = [];
  let amountOfPosts: string;
  let author: PostAuthor;

  if (data.length > 0) {
    for (author of data[0].authors) {
      amountOfPosts =
        String(await countAllPosts(`authors.name_contains=${author.name}`)) ||
        '';

      authors.push({ ...author, amountOfPosts });
    }

    post = { ...data[0], authors };
  } else {
    post = {};
  }

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
