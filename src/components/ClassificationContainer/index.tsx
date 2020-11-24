import Link from 'next/link';

import { PostTag, PostCategory } from '../../domain/posts/post';
import { Container } from './styled';

export type ClassificationContainerProps = {
  tags: PostTag[];
  category: PostCategory;
};

export function ClassificationContainer({
  tags,
  category,
}: ClassificationContainerProps) {
  return (
    <Container>
      <Link href={`/categoria/${category.slug}/page/1`}>
        <a>{category.name}</a>
      </Link>
      {tags.map((tag) => (
        <Link key={tag.slug} href={`/tag/${tag.slug}/page/1`}>
          <a>{tag.name}</a>
        </Link>
      ))}
    </Container>
  );
}
