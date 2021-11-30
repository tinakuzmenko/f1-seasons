import styled from 'styled-components';

export const ResultsHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 5fr 4fr 4fr 2fr 2fr 1fr;
  column-gap: 20px;
  padding: 10px 20px;
  align-items: center;

  > div {
    font-weight: bold;
  }
`;
