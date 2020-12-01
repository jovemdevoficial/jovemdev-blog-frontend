import { Typography } from '../../infra/components/Typography';
import { Container } from './styled';

export type PaginationDescriptionProps = {
  category: string;
  tag: string;
};

export function PaginationDescription({
  category,
  tag,
}: PaginationDescriptionProps) {
  return (
    <Container>
      <Typography component="h1">
        {category
          ? `Categoria: ${category}`
          : tag
          ? `Tag: ${tag}`
          : 'Todos os Posts'}
      </Typography>
      <Typography component="subtitle1">
        Gostou do conteúdo não foi? Então confira abaixo todos os nossos posts
        {category ? ` da categoria ${category}` : tag && ` da tag ${tag}`}{' '}
        &#128516; &#128151;
      </Typography>
    </Container>
  );
}
