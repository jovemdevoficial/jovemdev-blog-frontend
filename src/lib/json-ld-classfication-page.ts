import { SITE_URL } from '../config/site-config';

export type JsonLdClassificationPageProps = {
  classficationList: { slug: string }[];
  name: string;
};

export function jsonLdClassificationPage({
  classficationList,
  name,
}: JsonLdClassificationPageProps) {
  return {
    ['@context']: 'http://schema.org/',
    ['@type']: 'ItemList',
    itemListElement: classficationList.map((classfication, index) => {
      return {
        ['@type']: 'ListItem',
        position: Number(index) + 1,
        url: `${SITE_URL}/${name}/${classfication.slug}/page/1`,
      };
    }),
  };
}
