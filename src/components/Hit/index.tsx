import { PostData } from '../../domain/posts/post';

import { PostCard } from '../../patterns/PostCard';

export type HitProps = {
  hit: PostData;
};

export function Hit({ hit }: HitProps) {
  return <PostCard post={hit} />;
}
