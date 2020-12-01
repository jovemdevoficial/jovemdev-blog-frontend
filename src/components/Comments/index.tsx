import { DiscussionEmbed } from 'disqus-react';
// import { SITE_URL } from '../../config/api-config';

import { Container } from './styled';

export type CommentsProps = {
  slug: string;
  title: string;
};

export function Comments({ slug, title }: CommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="jovemdev"
        config={{
          url: `http://vcap.me/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}
