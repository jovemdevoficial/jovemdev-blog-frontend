import { Container } from './styled';

export type ShieldsPros = {
  label: string;
  color: string;
  url: string;
  children: React.ReactNode;
};

export function Shields({ children, color, label, url }: ShieldsPros) {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <Container color={color}>
        {children}
        <span>{label}</span>
      </Container>
    </a>
  );
}
