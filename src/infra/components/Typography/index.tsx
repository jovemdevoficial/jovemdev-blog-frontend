export type TypographyProps = {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'subtitle';
  children: React.ReactNode;
};

export function Typography(props: TypographyProps) {
  switch (props.component) {
    case 'h1':
      return <h1>{props.children}</h1>;
    case 'h2':
      return <h2>{props.children}</h2>;
    case 'h3':
      return <h3>{props.children}</h3>;
    case 'h4':
      return <h4>{props.children}</h4>;
    case 'h5':
      return <h5>{props.children}</h5>;
    case 'subtitle':
      return <h2>{props.children}</h2>;
    case 'p':
      return <p>{props.children}</p>;
    default:
      return <p>{props.children}</p>;
  }
}
