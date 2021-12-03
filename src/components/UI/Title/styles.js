import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: grid;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
  }

  select {
    display: block;
    padding: 5px;
    font-size: 16px;
  }

  @media (min-width: ${({theme}) => theme.md}) {
    grid-auto-flow: column;
  }
`;
