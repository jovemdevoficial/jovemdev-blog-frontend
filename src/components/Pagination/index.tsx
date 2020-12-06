import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Typography } from '../../infra/components/Typography';
import { PaginationTypes } from '../../domain/posts/pagination';
import { Container, CurrentPage, DynamicLink } from './styled';

export type PaginationProps = PaginationTypes & {
  category: string;
  tag: string;
};

export function Pagination({
  nextPage,
  numberOfPages,
  numberOfPosts,
  page,
  postsPerPage,
  previousPage,
  category,
  tag,
}: PaginationProps) {
  const nextLink = category
    ? `/categoria/${category}/page/${nextPage}`
    : tag
    ? `/tag/${tag}/page/${nextPage}`
    : `/posts/page/${nextPage}`;

  const previousLink = category
    ? `/categoria/${category}/page/${previousPage}`
    : tag
    ? `/tag/${tag}/page/${previousPage}`
    : `/posts/page/${previousPage}`;

  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;

  return (
    <Container>
      {hasPreviousPage && (
        <DynamicLink>
          <Link href={previousLink}>
            <a rel="prev">
              <FaArrowLeft />
              <span>Página Anterior</span>
            </a>
          </Link>
        </DynamicLink>
      )}
      <CurrentPage>
        <Typography component="subtitle1">
          {page} de {numberOfPages}
        </Typography>
      </CurrentPage>
      {hasNextPage && (
        <DynamicLink>
          <Link href={nextLink}>
            <a rel="next">
              <span>Próxima Página</span>
              <FaArrowRight />
            </a>
          </Link>
        </DynamicLink>
      )}
    </Container>
  );
}
