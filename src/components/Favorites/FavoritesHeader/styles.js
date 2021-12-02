import styled from 'styled-components';

export const FavoritesHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 3fr 1fr 1fr;
  column-gap: 20px;
  padding: 10px 20px;
  align-items: center;

  > div {
    font-weight: bold;
  }
`;
