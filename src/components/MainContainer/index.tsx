import { Container } from './styled';

export type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return <Container>{children}</Container>;
}
