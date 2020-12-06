import { SITE_URL } from '../config/site-config';

export type JsonLdAuthorPageProps = {
  name: string;
  email: string;
  slug: string;
  image: string[];
  sameAs: string[];
};

export const jsonLdAuthorPage = ({
  name,
  email,
  image,
  sameAs,
  slug,
}: JsonLdAuthorPageProps) => {
  return {
    ['@context']: 'http://schema.org/',
    ['@type']: 'Person',
    name: name,
    email: email,
    url: `${SITE_URL}/autor/${slug}`,
    image: image,
    sameAs: sameAs,
  };
};
