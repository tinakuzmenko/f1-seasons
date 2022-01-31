import styled from 'styled-components';

const columns = {
  favorites: '3fr 1fr 3fr 3fr 1fr 1fr',
  results: '1fr 1fr 5fr 4fr 4fr 2fr 2fr 1fr',
};

export const GridHeaderWrapper = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.md}) {
    display: grid;
    grid-template-columns: ${({ item }) => columns[item]};
    column-gap: 20px;
    padding: 10px 20px;
    align-items: center;

    > div {
      font-weight: bold;
    }
  }
`;
