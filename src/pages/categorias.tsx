import { GetStaticProps } from 'next';
import { getAllCategories } from '../data/categories/get-all-categories';

import { ClassificationPage } from '../container/ClassificationPage';

export type CategoriesProps = {
  categories: { name: string; slug: string }[];
  name: string;
};

export default function Categories({ categories, name }: CategoriesProps) {
  return (
    <ClassificationPage
      name={name}
      classificationList={categories}
      title="Todas as Categorias"
    />
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
