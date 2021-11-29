import styled from 'styled-components';

export const RowWrapper = styled.li`
  display: grid;
  grid-template-columns: 3% 3% 3% 3fr 3fr 2fr 2fr auto auto;
  align-items: center;
  grid-gap: 20px;
  padding: 10px 20px;
  background-color: ${({position, theme}) => position <= 3 ? theme.secondaryShadowColor : theme.shadowColor};
  border: 1px solid ${({position, theme}) => position <= 3 ? theme.secondaryColor : theme.shadowColor};
  border-radius: 10px;
`;
