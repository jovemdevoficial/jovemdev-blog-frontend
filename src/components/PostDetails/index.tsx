// import Link from 'next/link';
import Image from 'next/image';
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaRss,
} from 'react-icons/fa';

import { PostData } from '../../domain/posts/post';
// import { SocialNetworks } from '../../components/SocialNetworks';

import { Typography } from '../../infra/components/Typography';

//import { insertZeroLeft } from '../../utils/insert-zero-left';
import { formateDate } from '../../utils/formate-data';
import { SITE_URL } from '../../config/api-config';

import { Shields } from '../../components/Shields';

import { Container, SharedDetails } from './styled';

export type PostDetailsProps = {
  post: PostData;
};

export function PostDetails({ post }: PostDetailsProps) {
  return (
    <Container>
      <span>{`Publicado em ${formateDate(post.published_at)}`}</span>
      <Typography component="title">{post.title}</Typography>
      <Typography component="subtitle3">{post.description}</Typography>
      <Image
        src={post.cover.formats.large.url}
        alt={post.title}
        width={920}
        height={500}
        loading="eager"
        priority={true}
      />

      <span>#Compartilhe</span>

      <SharedDetails>
        <Shields
          label="Linkedin"
          color="#0e76a8"
          url={`https://www.linkedin.com/shareArticle?mini=true&url=${
            SITE_URL + '/posts/' + post.slug
          }pt-br/webtools/sharelink/&title=&summary=&source="`}
        >
          <FaLinkedinIn size={20} />
        </Shields>

        <Shields
          label="Twitter"
          color="#00acee"
          url={`https://twitter.com/intent/tweet?url=${
            SITE_URL + '/posts/' + post.slug
          }pt-br/webtools/sharelink/&text=`}
        >
          <FaTwitter size={20} />
        </Shields>

        <Shields
          label="Facebook"
          color="#3b5998"
          url={`https://twitter.com/intent/tweet?url=${
            SITE_URL + '/posts/' + post.slug
          }pt-br/webtools/sharelink/&text=`}
        >
          <FaFacebookF size={20} />
        </Shields>

        <Shields
          label="Pinterest"
          color="#c8232c"
          url={`https://pinterest.com/pin/create/button/?url=${
            SITE_URL + '/posts/' + post.slug
          }&media=${post.cover.url}&description=`}
        >
          <FaPinterestP size={20} />
        </Shields>

        <Shields label="Feed" color="#ee802f" url={`${SITE_URL}/rss.xml`}>
          <FaRss size={20} />
        </Shields>
      </SharedDetails>

      {/*post.authors.map((author) => {
        return (
          <AuthorDetails key={author.published_at}>
            <AuthorDescription>
              <Image
                src={author.avatar.formats.thumbnail.url}
                alt={author.name}
                width={64}
                height={64}
                loading="eager"
                priority={true}
              />
              <div>
                <Link href="/autor/[name]" as={`/autor/${author.slug}`}>
                  <a>
                    <span>{author.name}</span>
                  </a>
                </Link>

                <span>
                  {insertZeroLeft(author.amountOfPosts)} posts publicados
                </span>
              </div>
            </AuthorDescription>
            <SocialNetworks
              facebookUrl={author.social_networks.facebook}
              githubUrl={author.social_networks.github}
              instagramUrl={author.social_networks.instagram}
              linkedinUrl={author.social_networks.linkedin}
              twitterUrl={author.social_networks.twitter}
            />
          </AuthorDetails>
        );
      })*/}
    </Container>
  );
}
