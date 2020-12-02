import Link from 'next/link';
import {
  FaHome,
  FaSearch,
  FaTags,
  FaFolderOpen,
  FaBook,
  FaStickyNote,
  FaRss,
} from 'react-icons/fa';

import { ContainerNav } from './styled';

export function SideNav() {
  return (
    <ContainerNav>
      <Link href="/">
        <a aria-label="Home">
          <FaHome size={34} />
          <span>Home</span>
        </a>
      </Link>

      <Link href="/pesquisar">
        <a aria-label="Pesquisar">
          <FaSearch size={34} />
          <span>Pesquisar</span>
        </a>
      </Link>

      <Link href="/posts/page/1">
        <a aria-label="Posts">
          <FaStickyNote size={34} />
          <span>Posts</span>
        </a>
      </Link>

      <Link href="/categorias">
        <a aria-label="Categorias">
          <FaFolderOpen size={34} />
          <span>Categorias</span>
        </a>
      </Link>

      <Link href="/tags">
        <a aria-label="Tags">
          <FaTags size={34} />
          <span>Tags</span>
        </a>
      </Link>

      <Link href="/sobre">
        <a aria-label="Sobre">
          <FaBook size={34} />
          <span>Sobre</span>
        </a>
      </Link>

      <Link href="/rss.xml">
        <a aria-label="Feed Rss">
          <FaRss size={34} />
          <span>Feed Rss</span>
        </a>
      </Link>
    </ContainerNav>
  );
}
