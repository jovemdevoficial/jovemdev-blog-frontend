import { SEO } from '../../infra/components/SEO';

import { Header } from '../../patterns/Header';
import { Footer } from '../../patterns/Footer';

import { MainContainer } from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import { PostDetails } from '../../components/PostDetails';
import { ClassificationContainer } from '../../components/ClassificationContainer';
import { AuthorCard } from '../../components/AuthorCard';
import { SideNav } from '../../components/SideNav';
import { Comments } from '../../components/Comments';
import LightBox from '../../components/LightBox';

import { SITE_NAME, SITE_URL } from '../../config/site-config';
import { jsonLdPostPage } from '../../lib/json-ld-post-page';
import { PostData } from '../../domain/posts/post';

import { WritterBy } from './styled';

export type HomePageProps = {
  post: PostData;
};

export function PostPage({ post }: HomePageProps) {
  const configJson = {
    title: post.title,
    authors: post.authors,
    category: post.category,
    tags: post.tags,
    dateCreated: post.created_at,
    dateModified: post.updated_at,
    datePublished: post.published_at,
    image: [
      post.cover.formats.thumbnail.url,
      post.cover.formats.small.url,
      post.cover.formats.medium.url,
      post.cover.formats.large.url,
    ],
    slug: post.slug,
    description: post.description,
    seo: post.seo,
  };

  const jsonLd = jsonLdPostPage(configJson);

  return (
    <>
      <SEO
        title={`${post.title} | ${SITE_NAME}`}
        description={post.description}
        keywords={post.seo}
        url={`${SITE_URL}/posts/${post.slug}`}
        type="article"
        site_name={SITE_NAME}
        authors={post.authors}
        category={post.category.name}
        tags={post.tags}
        published_time={post.published_at}
        modified_time={post.updated_at}
        image_default={post.cover.url}
        image_large={post.cover.formats.large.url}
        image_small={post.cover.formats.small.url}
        image_twitter={post.cover.formats.thumbnail.url}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }}
        ></script>
      </SEO>
      <Header />
      <SideNav />

      <LightBox />
      <MainContainer>
        <PostDetails post={post} />
        <PostContainer content={post.content} />
        <ClassificationContainer category={post.category} tags={post.tags} />
        <WritterBy>Escrito Por</WritterBy>
        {post.authors.map((author) => (
          <AuthorCard key={author.slug} author={author} />
        ))}
        <Comments slug={post.slug} title={post.title} />
      </MainContainer>
      <Footer />
    </>
  );
}
