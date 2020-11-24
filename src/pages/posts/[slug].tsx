import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import php from 'highlight.js/lib/languages/php';

import { PostAuthor, PostData } from '../../domain/posts/post';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { countAllPosts } from '../../data/posts/count-all-post';
import { getPost } from '../../data/posts/get-post';

import { PostPage } from '../../container/PostPage';

export type DynamicPostProps = {
  post: PostData;
};

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('php', php);

export default function DynamicPost({ post }: DynamicPostProps) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

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
        String(await countAllPosts(`authors.slug_contains=${author.slug}`)) ||
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
