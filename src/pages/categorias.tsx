import { GetStaticProps } from 'next';
import { SEO } from '../infra/components/SEO';
import { getAllCategories } from '../data/categories/get-all-categories';

import { ClassificationPage } from '../container/ClassificationPage';

import { jsonLdClassificationPage } from '../lib/json-ld-classfication-page';

import { SITE_URL, SITE_NAME, SITE_AUTHORS } from '../config/site-config';

import FacebookImageDefault from '../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../assets/images/logo-image-twitter-150x150.png';

export type CategoriesProps = {
  categories: { name: string; slug: string }[];
  name: string;
};

export default function Categories({ categories, name }: CategoriesProps) {
  const jsonLd = jsonLdClassificationPage({
    classficationList: categories,
    name: name,
  });

  return (
    <>
      <SEO
        title={`Todas as Categorias | ${SITE_NAME}`}
        site_name={SITE_NAME}
        description="Encontre sua categoria favorita em nosso blog"
        keywords="Categorias, Blog"
        type="blog"
        authors={SITE_AUTHORS}
        url={`${SITE_URL}/categorias`}
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
        classificationList={categories}
        title="Todas as Categorias"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategories();

  return {
    props: {
      categories: categories.map((category) => {
        return {
          name: category.name,
          slug: category.slug,
        };
      }),
      name: 'categoria',
    },
  };
};
