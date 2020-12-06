import { GetStaticProps } from 'next';
import { SEO } from '../infra/components/SEO';

import { ClassificationPage } from '../container/ClassificationPage';
import { getAllTags } from '../data/tags/get-all-tags';

import { jsonLdClassificationPage } from '../lib/json-ld-classfication-page';

import { SITE_URL, SITE_NAME, SITE_AUTHORS } from '../config/site-config';

import FacebookImageDefault from '../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../assets/images/logo-image-twitter-150x150.png';

export type TagsProps = {
  tags: { name: string; slug: string }[];
  name: string;
};

export default function Categories({ tags, name }: TagsProps) {
  const jsonLd = jsonLdClassificationPage({
    classficationList: tags,
    name: name,
  });

  return (
    <>
      <SEO
        title={`Todas as Tags | ${SITE_NAME}`}
        site_name={SITE_NAME}
        description="Encontre sua tag favorita em nosso blog"
        keywords="Tags, Blog"
        type="blog"
        authors={SITE_AUTHORS}
        url={`${SITE_URL}/tags`}
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
      <ClassificationPage
        name={name}
        classificationList={tags}
        title="Todas as Tags"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTags();

  return {
    props: {
      tags: tags.map((tag) => {
        return {
          name: tag.name,
          slug: tag.slug,
        };
      }),
      name: 'tag',
    },
  };
};
