import styled from 'styled-components';

export const GridLayoutWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 5px;

  @media (min-width: ${({ theme }) => theme.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    grid-template-columns: 1fr;
  }
`;
