import styled from 'styled-components';

export const RoundItemLink = styled.a`
  display: grid;
  grid-template-columns: auto 2fr 3fr;
  padding: 10px 10px;
  align-items: center;
  gap: 20px;
  color: ${({theme}) => theme.fontColor};
  border-radius: 10px;
  background-color: ${({theme}) => theme.shadowColor};
  border: 1px solid ${({theme}) => theme.shadowColor};

  &:hover {
    border-color: ${({theme}) => theme.fontColor};
    cursor: pointer;
  }
`;

export const RoundItemRace = styled.div`
  font-size: 18px;
  font-weight: ${({round}) => !round && 'bold'};
  color: ${({round, theme}) => round && theme.neutralColor}
`;
