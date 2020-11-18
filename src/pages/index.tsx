import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';
import { getAllPosts } from '../data/posts/get-all-posts';
import { SEO } from '../infra/components/SEO';
import { SITE_NAME } from '../config/api-config';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <SEO title={SITE_NAME} />
      <h1>Home Page</h1>
      <br />
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const urlQuery = '_sort=id:desc&_start=0&_limit=6';
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts },
  };
};
