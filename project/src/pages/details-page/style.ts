import styled from 'styled-components';

export const DetailsPageStyled = styled.div`
  display: flex;
  gap: 12px;
`;

export const LoadingErrorImg = styled.img`
  display: block;
  width: 56px;
  height: 56px;
`;

export const LinkReload = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: ${({color }) => color};
  text-decoration: none;
`;
