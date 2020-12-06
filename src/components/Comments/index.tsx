import { DiscussionEmbed } from 'disqus-react';
import { DISQUS_SHORTNAME, DISQUS_URL } from '../../config/disqus-config';

import { Container } from './styled';

export type CommentsProps = {
  slug: string;
  title: string;
};

export function Comments({ slug, title }: CommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname={DISQUS_SHORTNAME}
        config={{
          url: `${DISQUS_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}
