import { GetStaticProps, GetStaticPaths } from 'next';
import { PostData } from '../../../domain/posts/post';
import { PaginationTypes } from '../../../domain/posts/pagination';
import { countAllPosts } from '../../../data/posts/count-all-post';
import { postsPerPage } from '../../../config/constants';
import { getAllPosts } from '../../../data/posts/get-all-posts';

import { PaginationPage } from '../../../container/PaginationPage';

import { createArrayWithNumberOfPosts } from '../../../utils/create-array-with-number-of-posts';
import { jsonLdPaginationPage } from '../../../lib/json-ld-pagination-page';

import { SEO } from '../../../infra/components/SEO';

import { SITE_NAME, SITE_URL, SITE_AUTHORS } from '../../../config/api-config';

import FacebookImageDefault from '../../../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../../../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../../../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../../../assets/images/logo-image-twitter-150x150.png';

export type PagePostsProps = {
  posts: PostData[];
  pagination: PaginationTypes;
};

export default function PagePosts({ pagination, posts }: PagePostsProps) {
  const jsonLd = jsonLdPaginationPage({ posts });

  return (
    <>
      <SEO
        title={`Todos os posts: Página ${pagination.page} | ${SITE_NAME} Blog`}
        authors={SITE_AUTHORS}
        description="Todos os posts do blog jovem dev"
        keywords="Posts, Blog"
        site_name={SITE_NAME}
        url={`${SITE_URL}/posts/page/${pagination.page}`}
        type="blog"
        image_default={FacebookImageDefault}
        image_large={FacebookImageLarge}
        image_small={FacebookImageSmall}
        image_twitter={TwitterImage}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        ></script>
      </SEO>
      <PaginationPage posts={posts} pagination={pagination} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params.number);
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const urlQuery = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}`;

  const posts = await getAllPosts(urlQuery);

  const numberOfPosts = Number(await countAllPosts());

  const numberOfPages = Math.ceil(numberOfPosts / postsPerPage);

  const pagination: PaginationTypes = {
    nextPage,
    numberOfPosts,
    numberOfPages,
    postsPerPage,
    previousPage,
    page,
  };

  return {
    props: { posts, pagination },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = Number(await countAllPosts());
  const arrayPages = await createArrayWithNumberOfPosts(numberOfPosts);

  return {
    paths: arrayPages.map((number) => {
      return {
        params: {
          number: number,
        },
      };
    }),
    fallback: false,
  };
};
