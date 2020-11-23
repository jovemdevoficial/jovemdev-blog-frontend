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
};

export default function DynamicCategory({
  category,
  pagination,
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
        url={`http://localhost:3000/categoria/${category}/page/${pagination.page}`}
      />
      <PaginationPage pagination={pagination} category={category} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const categoryName = ctx.params.name;
  const page = Number(ctx.params.number);

  const startFrom = (page - 1) * postsPerPage;

  const urlQueryAllPosts = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}&category.name_contains=${categoryName}`;

  const posts = await getAllPosts(urlQueryAllPosts);

  const urlQueryCountAllPosts = `category.name_contains=${categoryName}`;

  const pagination = await createPaginationObject({
    pageUrl: page,
    urlCountAllPosts: urlQueryCountAllPosts,
  });

  return {
    props: {
      posts,
      pagination,
      category: categoryName,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();

  const paths = [];

  let category: PostCategory;
  let number: string;

  for (category of categories) {
    const urlQuery = `category.name_contains=${category.name}`;
    const numberOfPages = await createArrayWithNumberOfPosts(urlQuery);

    for (number of numberOfPages) {
      paths.push({
        params: {
          name: category.name,
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
