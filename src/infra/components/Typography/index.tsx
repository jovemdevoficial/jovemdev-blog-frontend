import { H1, H2, H3, H4, H5, Paragraphy, Subtitle1, Subtitle2 } from './styled';

export type TypographyProps = {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'subtitle1' | 'subtitle2';
  children: React.ReactNode;
};

export function Typography(props: TypographyProps) {
  switch (props.component) {
    case 'h1':
      return <H1>{props.children}</H1>;
    case 'h2':
      return <H2>{props.children}</H2>;
    case 'h3':
      return <H3>{props.children}</H3>;
    case 'h4':
      return <H4>{props.children}</H4>;
    case 'h5':
      return <H5>{props.children}</H5>;
    case 'subtitle1':
      return <Subtitle1>{props.children}</Subtitle1>;
    case 'subtitle2':
      return <Subtitle2>{props.children}</Subtitle2>;
    case 'p':
      return <Paragraphy>{props.children}</Paragraphy>;
    default:
      return <Paragraphy>{props.children}</Paragraphy>;
  }
}
