import Head from 'next/head';

export type SeoProps = {
  title: string;
  description: string;
  keywords: string;
  url: string;
  type: 'blog' | 'website' | 'article';
  site_name: string;
  author: string;
};

export function SEO({
  title,
  description,
  keywords,
  url,
  type,
  site_name,
  author,
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="creator" content="Jovem DEV" />
      <meta name="keywords" content={keywords} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Maior que 200px x 200px
      <meta property="og:image" content="" />
      */}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site_name} />
      <meta property="fb:app_id" content="1841679489341843" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* menor que 1mb, o tamanho deve ser thumbinail
        <meta name="twitter:image"content="" />
      */}
      <meta name="twitter:url" content={url} />
    </Head>
  );
}
