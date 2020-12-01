import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllTags } from '../../../../data/tags/get-all-tags';
import { getAllPosts } from '../../../../data/posts/get-all-posts';

import { Tag } from '../../../../domain/tags/tag';
import { PaginationTypes } from '../../../../domain/posts/pagination';
import { PostData } from '../../../../domain/posts/post';

import { createPaginationObject } from '../../../../utils/create-pagination-object';
import { createArrayWithNumberOfPosts } from '../../../../utils/create-array-with-number-of-posts';

import { jsonLdPaginationPage } from '../../../../lib/json-ld-pagination-page';

import { PaginationPage } from '../../../../container/PaginationPage';
import { SEO } from '../../../../infra/components/SEO';

import {
  SITE_NAME,
  SITE_AUTHORS,
  SITE_URL,
} from '../../../../config/api-config';
import { postsPerPage } from '../../../../config/constants';

import FacebookImageDefault from '../../../../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../../../../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../../../../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../../../../assets/images/logo-image-twitter-150x150.png';

export type DynamicTagProps = {
  tag: Tag;
  pagination: PaginationTypes;
  posts: PostData[];
};

export default function DynamicTag({
  tag,
  pagination,
  posts,
}: DynamicTagProps) {
  const jsonLd = jsonLdPaginationPage({ posts });

  return (
    <>
      <SEO
        title={`${tag.name} | ${SITE_NAME} Blog`}
        description="Página para tags"
        site_name={SITE_NAME}
        authors={SITE_AUTHORS}
        keywords="Tags, Blog"
        type="blog"
        url={`${SITE_URL}/tag/${tag.slug}/page/${pagination.page}`}
        image_default={FacebookImageDefault}
        image_large={FacebookImageLarge}
        image_small={FacebookImageSmall}
        image_twitter={TwitterImage}
      >
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </SEO>
      <PaginationPage
        pagination={pagination}
        tagName={tag.name}
        tagSlug={tag.slug}
        posts={posts}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const tagSlug = ctx.params.slug;
  const page = Number(ctx.params.number);

  const startFrom = (page - 1) * postsPerPage;

  const urlQueryAllPosts = `_sort=id:desc&_start=${startFrom}&_limit=6&tags.slug=${tagSlug}`;

  const data = await getAllPosts(urlQueryAllPosts);

  const pagination = await createPaginationObject({
    pageUrl: page,
    numberOfPosts: data.length,
  });

  const posts = data.length > 0 ? data : {};

  return {
    props: {
      tag: {
        slug: tagSlug,
        name: posts[0].tags[0].name,
      },
      pagination,
      posts,
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
