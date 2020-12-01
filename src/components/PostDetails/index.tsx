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

import { Typography } from '../../infra/components/Typography';

//import { insertZeroLeft } from '../../utils/insert-zero-left';
import { formateDate } from '../../utils/formate-data';
import { SITE_URL } from '../../config/api-config';

import { Shields } from '../../components/Shields';

import { Container, SharedContainer, SharedDetails } from './styled';

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
      <SharedContainer>
        <span>#Compartilhe</span>

        <SharedDetails>
          <Shields
            label="Linkedin"
            color="#0e76a8"
            url={`https://www.linkedin.com/shareArticle?mini=true&url=${
              SITE_URL + '/posts/' + post.slug
            }pt-br/webtools/sharelink/&title=&summary=&source="`}
          >
            <FaLinkedinIn />
          </Shields>

          <Shields
            label="Twitter"
            color="#00acee"
            url={`https://twitter.com/intent/tweet?url=${
              SITE_URL + '/posts/' + post.slug
            }pt-br/webtools/sharelink/&text=`}
          >
            <FaTwitter />
          </Shields>

          <Shields
            label="Facebook"
            color="#3b5998"
            url={`https://twitter.com/intent/tweet?url=${
              SITE_URL + '/posts/' + post.slug
            }pt-br/webtools/sharelink/&text=`}
          >
            <FaFacebookF />
          </Shields>

          <Shields
            label="Pinterest"
            color="#c8232c"
            url={`https://pinterest.com/pin/create/button/?url=${
              SITE_URL + '/posts/' + post.slug
            }&media=${post.cover.url}&description=`}
          >
            <FaPinterestP />
          </Shields>

          <Shields label="Feed" color="#ee802f" url="/rss.xml">
            <FaRss />
          </Shields>
        </SharedDetails>
      </SharedContainer>
    </Container>
  );
}
