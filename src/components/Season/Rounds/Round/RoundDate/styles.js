import styled from 'styled-components';

export const RoundDateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.backgroundColor};
  border-radius: 10px;
  padding: 10px 20px;
`;

export const RoundDateDay = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
