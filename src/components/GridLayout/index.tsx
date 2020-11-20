import { Container } from './styled';

export type GridLayoutProps = {
  children: React.ReactNode;
};

export function GridLayout({ children }: GridLayoutProps) {
  return <Container>{children}</Container>;
}
