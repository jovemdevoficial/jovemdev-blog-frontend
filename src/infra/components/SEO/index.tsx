import Head from 'next/head';
import { transformArrayToString } from '../../../utils/transform-array-to-string';

export type PropertyTags = {
  name: string;
};

export type PropertyAuthors = {
  name: string;
};

export type SeoProps = {
  title: string;
  description: string;
  keywords: string;
  url?: string;
  type: 'blog' | 'website' | 'article';
  site_name: string;
  authors: PropertyAuthors[];
  category?: string;
  tags?: PropertyTags[];
  published_time?: string;
  updated_time?: string;
};

export function SEO({
  title,
  description,
  keywords,
  url = '',
  type,
  site_name,
  authors,
  tags = [{ name: '' }],
  category = '',
  published_time = '',
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="application-name" content="Jovem DEV Blog" />
      <meta name="description" content={description} />
      <meta name="author" content={transformArrayToString(authors)} />
      <meta name="creator" content="Jovem DEV" />
      <meta name="keywords" content={keywords} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Maior que 200px x 200px
      <meta property="og:image" content="" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      */}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site_name} />
      <meta property="fb:app_id" content="1841679489341843" />

      {type === 'article' && (
        <>
          <meta
            property="article:author"
            content={transformArrayToString(authors)}
          />
          <meta property="article:section" content={category} />
          <meta property="article:tag" content={transformArrayToString(tags)} />
          <meta property="article:published_time" content={published_time} />
        </>
      )}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* menor que 1mb, o tamanho deve ser thumbinail
        <meta name="twitter:image"content="" />
        <meta name="twitter:creator" content="" />
      */}
      <meta name="twitter:url" content={url} />
    </Head>
  );
}
