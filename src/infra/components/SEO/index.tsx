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
  url: string;
  type: 'blog' | 'website' | 'article' | 'profile';
  site_name: string;
  authors: PropertyAuthors[];
  category?: string;
  tags?: PropertyTags[];
  published_time?: string;
  modified_time?: string;
  image_large: string;
  image_small: string;
  image_twitter: string;
  image_default: string;
  children?: React.ReactNode;
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
  modified_time = '',
  image_large,
  image_small,
  image_default,
  image_twitter,
  children,
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="application-name" content="Jovem DEV" />
      <meta name="description" content={description} />
      <meta name="author" content={transformArrayToString(authors)} />
      <meta name="creator" content="Jovem DEV" />
      <meta name="keywords" content={keywords} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={image_default} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />

      <meta property="og:image" content={image_large} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />

      <meta property="og:image" content={image_small} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />

      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site_name} />
      <meta property="fb:app_id" content="1841679489341843" />

      <meta property="og:type" content={type} />

      {type === 'article' && (
        <>
          <meta
            property="article:author"
            content={transformArrayToString(authors)}
          />
          <meta property="article:section" content={category} />
          <meta property="article:tag" content={transformArrayToString(tags)} />
          <meta property="article:published_time" content={published_time} />
          <meta property="article:modified_time" content={modified_time} />
        </>
      )}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jovemdevoficial" />
      <meta name="twitter:creator" content="@almerindopaixao" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image_twitter} />
      <meta name="twitter:image:alt" content={description} />
      {children}
    </Head>
  );
}
