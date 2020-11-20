import Link from 'next/link';
import { FaShare, FaHeart } from 'react-icons/fa';

import { PostData } from '../../domain/posts/post';
import {
  Card,
  PostCardDetails,
  ContainerPostDetails,
  PublishDetails,
  IconsDetails,
} from './styled';

import { Typography } from '../../infra/components/Typography';

export type PostCardProps = {
  post: PostData;
};

export function PostCard() {
  return (
    <Card>
      <Link href="#">
        <a>
          <img
            src="https://res.cloudinary.com/almerindopaixao/image/upload/v1605244650/small_Post_Azul_com_Titulo_Grande_de_Novembro_Azul_para_Redes_Sociais_84058d78b3.png"
            alt="Teste"
          />
        </a>
      </Link>

      <PostCardDetails>
        <Typography component="h2">
          <Link href="#">
            <a>Mostrando últimos posts e vídeos no Github Profile</a>
          </Link>
        </Typography>

        <Typography component="subtitle2">
          Como utilizar o github Actions para mandar seu profile atualizado e
          bonito e lorem ipsun etc etc etc...
        </Typography>

        <ContainerPostDetails>
          <PublishDetails>
            <span>
              Publicado por{' '}
              <Link href="#">
                <a>Angélica Pereira</a>
              </Link>
            </span>
            <span>20 de novembro de 2020</span>
          </PublishDetails>

          <IconsDetails>
            <div>
              <span>10</span>
              <Link href="#">
                <a>
                  <FaHeart />
                </a>
              </Link>
            </div>
            <Link href="#">
              <a>
                <FaShare />
              </a>
            </Link>
          </IconsDetails>
        </ContainerPostDetails>
      </PostCardDetails>
    </Card>
  );
}
