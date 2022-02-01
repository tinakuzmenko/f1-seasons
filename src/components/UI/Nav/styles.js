import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 20px 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;

export const NavInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.sm}) {
    grid-template-columns: 1fr 1fr;

    button {
      display: none;
    }
  }
`;

export const NavTopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: ${({ active }) => (active ? 'block' : 'none')};
  margin: 0 auto;
  padding: 20px 0;
  list-style: none;

  li:not(:last-child) {
    margin-bottom: 10px;
  }

  a {
    color: ${({ theme }) => theme.backgroundColor};

    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: ${({ theme }) => theme.sm}) {
    display: flex;
    gap: 3ch;
    padding: 0;
    margin-right: 0;

    li:not(:last-child) {
      margin: 0;
    }
  }
`;
