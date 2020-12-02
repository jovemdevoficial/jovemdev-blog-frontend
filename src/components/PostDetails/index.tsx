import Image from 'next/image';

import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';

import { PostData } from '../../domain/posts/post';

import { Typography } from '../../infra/components/Typography';

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
            label="WhatsApp"
            color="#27801b"
            url={`https://api.whatsapp.com/send?text=${SITE_URL}/posts/${post.slug}`}
          >
            <FaWhatsapp />
          </Shields>

          <Shields
            label="Facebook"
            color="#3b5998"
            url={`https://www.facebook.com/sharer/sharer.php?u=${
              SITE_URL + '/posts/' + post.slug
            }`}
          >
            <FaFacebookF />
          </Shields>

          <Shields
            label="Twitter"
            color="#007AC3"
            url={`https://twitter.com/intent/tweet?url=${
              SITE_URL + '/posts/' + post.slug
            }&text=`}
          >
            <FaTwitter />
          </Shields>

          <Shields
            label="Linkedin"
            color="#0e76a8"
            url={`https://www.linkedin.com/shareArticle?mini=true&url=${
              SITE_URL + '/posts/' + post.slug
            }&title=&summary=&source="`}
          >
            <FaLinkedinIn />
          </Shields>

          <Shields
            label="Telegram"
            color="#0b73a7"
            url={`https://telegram.me/share/url?url=${
              SITE_URL + '/posts/' + post.slug
            }`}
          >
            <FaTelegramPlane />
          </Shields>
        </SharedDetails>
      </SharedContainer>
    </Container>
  );
}
