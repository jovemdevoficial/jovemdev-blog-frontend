import { PostID, PostCover, PostData } from '../posts/post';

export type Author = {
  id: PostID;
  name: string;
  email: string;
  biography: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  published_at: string;
  social_networks: AuthorSocialNetworks;
  avatar: PostCover;
  amountOfPosts: string;
  posts: PostData[] & { category: number };
};

export type AuthorSocialNetworks = {
  id: PostID;
  github: string;
  twitter: string;
  facebook: string;
  linkedin: string;
};
