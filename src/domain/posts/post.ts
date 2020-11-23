export type PostID = number;

export type PostAuthor = {
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
};

export type AuthorSocialNetworks = {
  id: PostID;
  github: string;
  twitter: string;
  facebook: string;
  linkedin: string;
};

export type PostCategory = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  published_at: string;
};

export type PostTag = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  published_at: string;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  id: PostID;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  published_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostData = {
  id: PostID;
  title: string;
  content: string;
  category?: PostCategory;
  slug: string;
  description: string;
  seo: string;
  authors?: PostAuthor[];
  tags?: PostTag[];
  created_by: PostCreatedBy;
  updated_by: PostCreatedBy;
  created_at: string;
  updated_at: string;
  published_at: string;
  cover: PostCover;
};
