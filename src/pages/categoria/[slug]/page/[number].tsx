import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllCategories } from '../../../../data/categories/get-all-categories';
import { Category } from '../../../../domain/categories/category';
import { PaginationTypes } from '../../../../domain/posts/pagination';

import { createArrayWithNumberOfPosts } from '../../../../utils/create-array-with-number-of-posts';
import { postsPerPage } from '../../../../config/constants';
import { createPaginationObject } from '../../../../utils/create-pagination-object';

import { PaginationPage } from '../../../../container/PaginationPage';
import { SEO } from '../../../../infra/components/SEO';
import { SITE_NAME, SITE_AUTHORS } from '../../../../config/api-config';

export type DynamicCategoryProps = {
  pagination: PaginationTypes;
  category: Category;
};

export default function DynamicCategory({
  category,
  pagination,
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
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categorySlug = ctx.params.slug;
  const page = Number(ctx.params.number);

  const startFrom = (page - 1) * postsPerPage;
  const stopTo = page * postsPerPage;

  const urlQueryAllCategory = `slug=${categorySlug}`;

  const data = await getAllCategories(urlQueryAllCategory);

  const pagination = await createPaginationObject({
    pageUrl: page,
    numberOfPosts: data[0].posts.length,
  });

  data[0].posts.sort((a, b) => (b.id < a.id ? -1 : 1));

  const category = {
    ...data[0],
    posts: data[0].posts.slice(startFrom, stopTo),
  };

  return {
    props: {
      category: data.length > 0 ? category : {},
      pagination,
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
