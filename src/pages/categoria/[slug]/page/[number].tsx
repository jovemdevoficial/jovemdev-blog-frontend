import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllCategories } from '../../../../data/categories/get-all-categories';
import { getAllPosts } from '../../../../data/posts/get-all-posts';
import { Category } from '../../../../domain/categories/category';
import { PaginationTypes } from '../../../../domain/posts/pagination';
import { PostData } from '../../../../domain/posts/post';

import { createArrayWithNumberOfPosts } from '../../../../utils/create-array-with-number-of-posts';
import { postsPerPage } from '../../../../config/constants';
import { createPaginationObject } from '../../../../utils/create-pagination-object';

import { PaginationPage } from '../../../../container/PaginationPage';
import { SEO } from '../../../../infra/components/SEO';
import { SITE_NAME, SITE_AUTHORS } from '../../../../config/api-config';

export type DynamicCategoryProps = {
  pagination: PaginationTypes;
  category: Category;
  posts: PostData[];
};

export default function DynamicCategory({
  category,
  pagination,
  posts,
}: DynamicCategoryProps) {
  return (
    <>
      <SEO
        title={`${category.name} | ${SITE_NAME} Blog`}
        description="Página para tags"
        site_name={SITE_NAME}
        authors={SITE_AUTHORS}
        keywords="Tags, Blog"
        type="blog"
        url={`http://localhost:3000/categoria/${category.slug}/page/${pagination.page}`}
      />
      <PaginationPage
        pagination={pagination}
        categoryName={category.name}
        categorySlug={category.slug}
        posts={posts}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categorySlug = ctx.params.slug;
  const page = Number(ctx.params.number);

  const startFrom = (page - 1) * postsPerPage;

  const urlQueryAllPosts = `_sort=id:desc&_start=${startFrom}&_limit=6&category.slug=${categorySlug}`;

  const data = await getAllPosts(urlQueryAllPosts);

  const pagination = await createPaginationObject({
    pageUrl: page,
    numberOfPosts: data.length,
  });

  const posts = data.length > 0 ? data : {};

  return {
    props: {
      category: {
        slug: categorySlug,
        name: posts[0].category.name,
      },
      pagination,
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();

  const paths = [];

  let category: Category;
  let number: string;

  for (category of categories) {
    const numberOfPosts = category.posts.length;
    const numberOfPages = createArrayWithNumberOfPosts(numberOfPosts);

    for (number of numberOfPages) {
      paths.push({
        params: {
          slug: category.slug,
          number: number,
        },
      });
    }
  }

  return {
    paths: paths,
    fallback: false,
  };
};
