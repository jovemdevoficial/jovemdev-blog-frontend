import NextHead from 'next/head';

export type HeadProps = {
  title: string;
};

export function SEO({ title }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
}
