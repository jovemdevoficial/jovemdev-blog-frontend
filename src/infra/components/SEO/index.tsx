import NextHead from 'next/head';

export type SeoProps = {
  title: string;
  description: string;
  keywords: string;
};

export function SEO({ title, description, keywords }: SeoProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jovem DEV" />
      <meta name="keywords" content={keywords} />
    </NextHead>
  );
}
