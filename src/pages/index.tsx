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
  const urlQuery = '_sort=id:desc';
  const posts = await getAllPosts(urlQuery);

  const slice = posts.slice(0, 7);

  return {
    props: {
      posts: slice.map((post) => {
        return {
          title: post.title,
          description: post.description,
          cover: {
            formats: {
              small: {
                url: post.cover.formats.small.url,
              },
              large: {
                url: post.cover.formats.large.url,
              },
              medium: {
                url: post.cover.formats.medium.url,
              },
              thumbnail: {
                url: post.cover.formats.thumbnail.url,
              },
            },
          },
          slug: post.slug,
          published_at: post.published_at,
          updated_at: post.updated_at,
          created_at: post.created_at,
          authors: post.authors.map((author) => {
            return {
              name: author.name,
              slug: author.slug,
              avatar: {
                formats: {
                  thumbnail: {
                    url: author.avatar.formats.thumbnail.url,
                  },
                },
              },
              social_networks: author.social_networks,
            };
          }),
        };
      }),
    },
  };
};
