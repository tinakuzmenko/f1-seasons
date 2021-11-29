import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background-color: ${({theme}) => theme.primaryColor};
  padding: 20px 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;

export const NavInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.img`
  display: block;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 3ch;
  margin: 0;
  padding: 0;
  list-style: none;

  a {
    color: ${({theme}) => theme.backgroundColor};

    &:hover {
      opacity: 0.7;
    }
  }
`;
