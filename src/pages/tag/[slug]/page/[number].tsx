import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllTags } from '../../../../data/tags/get-all-tags';
import { Tag } from '../../../../domain/tags/tag';
import { PaginationTypes } from '../../../../domain/posts/pagination';

import { createArrayWithNumberOfPosts } from '../../../../utils/create-array-with-number-of-posts';
import { postsPerPage } from '../../../../config/constants';
import { createPaginationObject } from '../../../../utils/create-pagination-object';

import { PaginationPage } from '../../../../container/PaginationPage';
import { SEO } from '../../../../infra/components/SEO';
import { SITE_NAME } from '../../../../config/api-config';

export type DynamicTagProps = {
  tag: Tag;
  pagination: PaginationTypes;
};

export default function DynamicTag({ tag, pagination }: DynamicTagProps) {
  return (
    <>
      <SEO
        title={`${tag.name} | ${SITE_NAME} Blog`}
        description="Página para tags"
        site_name={SITE_NAME}
        authors={[{ name: 'Almerindo Paixão' }, { name: 'Angélica' }]}
        keywords="Tags, Blog"
        type="blog"
        url={`http://localhost:3000/tag/${tag.slug}/page/${pagination.page}`}
      />
      <PaginationPage
        pagination={pagination}
        tagName={tag.name}
        tagSlug={tag.slug}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const tagSlug = ctx.params.slug;
  const page = Number(ctx.params.number);

  const startFrom = (page - 1) * postsPerPage;
  const stopTo = page * postsPerPage;

  const urlQueryAllTags = `slug=${tagSlug}`;

  const data = await getAllTags(urlQueryAllTags);

  const pagination = await createPaginationObject({
    pageUrl: page,
    numberOfPosts: data[0].posts.length,
  });

  data[0].posts.sort((a, b) => (b.id < a.id ? -1 : 1));

  const tag = {
    ...data[0],
    posts: data[0].posts.slice(startFrom, stopTo),
  };

  return {
    props: {
      tag: data.length > 0 ? tag : {},
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags();

  const paths = [];

  let tag: Tag;
  let number: string;

  for (tag of tags) {
    const numberOfPosts = tag.posts.length;
    const numberOfPages = createArrayWithNumberOfPosts(numberOfPosts);

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
