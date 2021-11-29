import styled from 'styled-components';

export const RoundLink = styled.a`
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

  > div {
    padding: 20px 20px;
  }
`;

export const RoundDate = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: ${({theme}) => theme.fontColor};
  color: ${({theme}) => theme.backgroundColor};
  border-radius: 10px;
  padding: 10px 30px;
`;

export const RoundDateDay = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
