import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllCategories } from '../../../../data/categories/get-all-categories';
import { getAllPosts } from '../../../../data/posts/get-all-posts';

import { Category } from '../../../../domain/categories/category';
import { PaginationTypes } from '../../../../domain/posts/pagination';
import { PostData } from '../../../../domain/posts/post';

import { createPaginationObject } from '../../../../utils/create-pagination-object';
import { createArrayWithNumberOfPosts } from '../../../../utils/create-array-with-number-of-posts';

import { postsPerPage } from '../../../../config/constants';
import {
  SITE_NAME,
  SITE_AUTHORS,
  SITE_URL,
} from '../../../../config/site-config';

import { jsonLdPaginationPage } from '../../../../lib/json-ld-pagination-page';

import { PaginationPage } from '../../../../container/PaginationPage';
import { SEO } from '../../../../infra/components/SEO';

import FacebookImageDefault from '../../../../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../../../../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../../../../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../../../../assets/images/logo-image-twitter-150x150.png';

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
  const jsonLd = jsonLdPaginationPage({ posts });

  return (
    <>
      <SEO
        title={`Página ${pagination.page}: Todos os Posts Sobre ${category.name} | ${SITE_NAME}`}
        description="Aqui você poderá encontrar todos os posts publicados em nosso blog relacionados à categoria frameworks "
        site_name={SITE_NAME}
        authors={SITE_AUTHORS}
        keywords="Tags, Blog"
        type="blog"
        url={`${SITE_URL}/categoria/${category.slug}/page/${pagination.page}`}
        image_default={FacebookImageDefault}
        image_large={FacebookImageLarge}
        image_small={FacebookImageSmall}
        image_twitter={TwitterImage}
      >
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </SEO>
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

  return {
    props: {
      category: {
        slug: categorySlug,
        name: data.length > 0 ? data[0].category.name : '',
      },
      pagination,
      posts:
        data.length > 0
          ? data.map((post) => {
              return {
                title: post.title,
                description: post.description,
                slug: post.slug,
                published_at: post.published_at,
                cover: {
                  formats: {
                    small: {
                      url: post.cover.formats.small.url,
                    },
                  },
                },
                authors: post.authors.map((author) => {
                  return {
                    name: author.name,
                    slug: author.slug,
                  };
                }),
              };
            })
          : [],
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
