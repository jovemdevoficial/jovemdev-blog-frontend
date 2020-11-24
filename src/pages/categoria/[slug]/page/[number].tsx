import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts } from '../../../../data/posts/get-all-posts';
import { getAllCategories } from '../../../../data/categories/get-all-categories';
import { PostCategory, PostData } from '../../../../domain/posts/post';
import { PaginationTypes } from '../../../../domain/posts/pagination';

import { createArrayWithNumberOfPosts } from '../../../../utils/create-array-with-number-of-posts';
import { postsPerPage } from '../../../../config/constants';
import { createPaginationObject } from '../../../../utils/create-pagination-object';

import { PaginationPage } from '../../../../container/PaginationPage';
import { SEO } from '../../../../infra/components/SEO';
import { SITE_NAME } from '../../../../config/api-config';

export type DynamicCategoryProps = {
  posts?: PostData[];
  pagination: PaginationTypes;
  category: string;
  slug: string;
};

export default function DynamicCategory({
  category,
  pagination,
  slug,
}: DynamicCategoryProps) {
  return (
    <>
      <SEO
        title={`${category} | Jovem DEV Blog`}
        description="Página para tags"
        site_name={SITE_NAME}
        authors={[{ name: 'Almerindo Paixão' }, { name: 'Angélica' }]}
        keywords="Tags, Blog"
        type="blog"
        url={`http://localhost:3000/categoria/${slug}/page/${pagination.page}`}
      />
      <PaginationPage
        pagination={pagination}
        categoryName={category}
        categorySlug={slug}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categorySlug = ctx.params.slug;
  const page = Number(ctx.params.number);

  const startFrom = (page - 1) * postsPerPage;

  const urlQueryAllPosts = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}&category.slug_contains=${categorySlug}`;

  const posts = await getAllPosts(urlQueryAllPosts);

  const urlQueryCountAllPosts = `category.slug_contains=${categorySlug}`;

  const pagination = await createPaginationObject({
    pageUrl: page,
    urlCountAllPosts: urlQueryCountAllPosts,
  });

  return {
    props: {
      posts,
      pagination,
      category: posts[0].category.name,
      slug: categorySlug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();

  const paths = [];

  let category: PostCategory;
  let number: string;

  for (category of categories) {
    const urlQuery = `category.slug_contains=${category.slug}`;
    const numberOfPages = await createArrayWithNumberOfPosts(urlQuery);

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
