import Link from 'next/link';
import {
  FaHome,
  FaEnvelope,
  FaSearch,
  FaTags,
  FaFolderOpen,
  FaBook,
} from 'react-icons/fa';

import { ContainerNav } from './styled';

export function SideNav() {
  return (
    <ContainerNav>
      <Link href="/">
        <a aria-label="Home">
          <FaHome size={36} />
          <span>Home</span>
        </a>
      </Link>

      <Link href="/404">
        <a aria-label="Newsletter">
          <FaEnvelope size={36} />
          <span>Newsletter</span>
        </a>
      </Link>

      <Link href="/pesquisar">
        <a aria-label="Pesquisar">
          <FaSearch size={36} />
          <span>Pesquisar</span>
        </a>
      </Link>

      <Link href="/categorias">
        <a aria-label="Categorias">
          <FaFolderOpen size={36} />
          <span>Categorias</span>
        </a>
      </Link>

      <Link href="/tags">
        <a aria-label="Tags">
          <FaTags size={36} />
          <span>Tags</span>
        </a>
      </Link>

      <Link href="/sobre">
        <a aria-label="Sobre">
          <FaBook size={36} />
          <span>Sobre</span>
        </a>
      </Link>
    </ContainerNav>
  );
}
