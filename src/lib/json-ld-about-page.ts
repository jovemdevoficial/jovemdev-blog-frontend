import { SITE_NAME, SITE_URL } from '../config/site-config';

export const jsonLdAboutPage = () => {
  return {
    ['@context']: 'http://schema.org/',
    ['@type']: 'Organization',
    name: SITE_NAME,
    url: `${SITE_URL}/sobre`,
    logo: `${SITE_URL}/_next/static/images/logo-image-twitter-150x150.png`,
    foundingDate: '2010',
    founders: [
      {
        '@type': 'Person',
        name: 'Almerindo da Paixão Junior',
      },
      {
        '@type': 'Person',
        name: 'Angélica Pereira',
      },
    ],
    sameAs: [
      'https://github.com/jovemdevoficial',
      'https://www.instagram.com/jovemdevoficial/',
    ],
  };
};
