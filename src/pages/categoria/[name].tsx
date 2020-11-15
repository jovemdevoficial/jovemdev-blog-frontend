import { GetStaticProps, GetStaticPaths } from 'next';
// import { useRouter } from 'next/router';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getAllCategories } from '../../data/categories/get-all-categories';
import { PostData } from '../../domain/posts/post';

export type DynamicCategoryProps = {
  posts: PostData[];
  category: string;
};

export default function DynamicCategory({
  posts,
  category,
}: DynamicCategoryProps) {
  /*
  const router = useRouter();

  if (router.isFallback) {
    return <div>...Loading</div>;
  }
  */

  return (
    <>
      <h1>Categorias: {category}</h1>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categoryName = ctx.params.name;
  const urlQuery = `_sort=id:desc&category.name_contains=${categoryName}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: {
      posts,
      category: categoryName,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();

  return {
    paths: categories.map((category) => {
      return {
        params: {
          name: category.name,
        },
      };
    }),
    fallback: false,
  };
};
