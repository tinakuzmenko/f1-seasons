import styled from 'styled-components';

export const Position = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const SecondaryContent = styled.div`
  color: ${({theme}) => theme.neutralColor};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
