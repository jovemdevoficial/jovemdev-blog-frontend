import styled from 'styled-components';

export const AuthorDetails = styled.div`
  margin: ${({ theme }) => theme.spacings.medium} 0;

  & + & {
    margin-top: ${({ theme }) => theme.spacings.large};
  }
`;

export const AuthorDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50px;
  }
`;

export const PostDetails = styled.section`
  @media (max-width: 960px) {
    padding: ${({ theme }) => theme.spacings.medium};
  }
`;
