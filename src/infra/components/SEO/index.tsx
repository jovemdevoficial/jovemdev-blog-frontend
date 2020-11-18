import NextHead from 'next/head';

export type HeadProps = {
  title: string;
};

export function SEO({ title }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" constent="Site de ... sobre ..." />
      <meta name="author" content="Jovem DEV" />
    </NextHead>
  );
}
