import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';
import { getAllPosts } from '../data/posts/get-all-posts';
import { HomePage } from '../container/HomePage';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const urlQuery = '_sort=id:desc&_start=0&_limit=6';
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts },
  };
};
