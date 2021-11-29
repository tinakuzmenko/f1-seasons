import styled from 'styled-components';

export const RoundItemLink = styled.a`
  display: grid;
  grid-template-columns: auto 1fr 1fr auto;
  align-items: center;
  gap: 2ch;
  color: ${({theme}) => theme.fontColor};
  border-radius: 10px;
  background-color: ${({theme}) => theme.shadowColor};
  border: 1px solid ${({theme}) => theme.shadowColor};

  &:hover {
    border-color: ${({theme}) => theme.fontColor};
    cursor: pointer;
  }
`;

export const RoundItemInnerWrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
