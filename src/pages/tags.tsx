import { GetStaticProps } from 'next';

import { ClassificationPage } from '../container/ClassificationPage';
import { getAllTags } from '../data/tags/get-all-tags';

export type TagsProps = {
  tags: { name: string; slug: string }[];
  name: string;
};

export default function Categories({ tags, name }: TagsProps) {
  return (
    <ClassificationPage
      name={name}
      classificationList={tags}
      title="Todas as Tags"
    />
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
