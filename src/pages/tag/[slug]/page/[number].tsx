import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts } from '../../../../data/posts/get-all-posts';
import { getAllTags } from '../../../../data/tags/get-all-tags';
import { PostTag, PostData } from '../../../../domain/posts/post';
import { PaginationTypes } from '../../../../domain/posts/pagination';

import { createArrayWithNumberOfPosts } from '../../../../utils/create-array-with-number-of-posts';
import { postsPerPage } from '../../../../config/constants';
import { createPaginationObject } from '../../../../utils/create-pagination-object';

import { PaginationPage } from '../../../../container/PaginationPage';
import { SEO } from '../../../../infra/components/SEO';
import { SITE_NAME } from '../../../../config/api-config';

export type DynamicTagProps = {
  posts?: PostData[];
  pagination: PaginationTypes;
  tag: string;
  slug: string;
};

export default function DynamicTag({ tag, pagination, slug }: DynamicTagProps) {
  return (
    <>
      <SEO
        title={`${tag} | Jovem DEV Blog`}
        description="Página para tags"
        site_name={SITE_NAME}
        authors={[{ name: 'Almerindo Paixão' }, { name: 'Angélica' }]}
        keywords="Tags, Blog"
        type="blog"
        url={`http://localhost:3000/tag/${slug}/page/${pagination.page}`}
      />
      <PaginationPage pagination={pagination} tagName={tag} tagSlug={slug} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const tagSlug = ctx.params.slug;
  const page = Number(ctx.params.number);

  const startFrom = (page - 1) * postsPerPage;

  const urlQueryAllPosts = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}&tags.slug_contains=${tagSlug}`;

  const posts = await getAllPosts(urlQueryAllPosts);

  const urlQueryCountAllPosts = `tags.slug_contains=${tagSlug}`;

  const pagination = await createPaginationObject({
    pageUrl: page,
    urlCountAllPosts: urlQueryCountAllPosts,
  });

  return {
    props: {
      posts,
      pagination,
      tag: posts[0].tags.filter((value) => value.slug == tagSlug)[0].name,
      slug: tagSlug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags();

  const paths = [];

  let tag: PostTag;
  let number: string;

  for (tag of tags) {
    const urlQuery = `tags.slug_contains=${tag.slug}`;
    const numberOfPages = await createArrayWithNumberOfPosts(urlQuery);

    for (number of numberOfPages) {
      paths.push({
        params: {
          slug: tag.slug,
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
