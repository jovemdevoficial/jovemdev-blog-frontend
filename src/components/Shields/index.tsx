import { Container } from './styled';

export type ShieldsPros = {
  label: string;
  color: string;
  url: string;
  children: React.ReactNode;
};

export function Shields({ children, color, label, url }: ShieldsPros) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer nofollow">
      <Container color={color}>
        {children}
        <span>{label}</span>
      </Container>
    </a>
  );
}
