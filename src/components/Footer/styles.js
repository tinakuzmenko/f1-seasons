import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({theme}) => theme.fontColor};
  padding: 30px 0;
`;

export const FooterInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogo = styled.img`
  display: block;
`;

export const FooterCopyright = styled.div`
  display: flex;
  gap: 3ch;
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${({theme}) => theme.backgroundColor};
  font-size: 12px;
`;
