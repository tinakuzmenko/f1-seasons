import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({theme}) => theme.fontColor};
  padding: 30px 0;
`;

export const FooterLayout = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  row-gap: 10px;

  @media (min-width: ${({theme}) => theme.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterCopyright = styled.div`
  color: ${({theme}) => theme.backgroundColor};
  font-size: 12px;
`;

export const FooterSocial = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5px;

  a:hover {
    opacity: 0.7;
  }
`;
