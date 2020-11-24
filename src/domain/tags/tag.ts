import { PostID, PostData } from '../posts/post';

export type Tag = {
  id: PostID;
  name: string;
  slug: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  published_at: string;
  posts: PostData[] & { category: number };
};
