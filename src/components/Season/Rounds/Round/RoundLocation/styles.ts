import styled from 'styled-components';

export const RoundItemLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RoundItemCountry = styled.div`
  color: ${({ theme }) => theme.palette.neutralColor};
  font-size: 14px;
`;
