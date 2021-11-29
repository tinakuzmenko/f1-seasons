import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: grid;
  width: auto;
  grid-auto-flow: column;
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
`;
