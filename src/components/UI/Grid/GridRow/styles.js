import styled from 'styled-components';

export const GridRowWrapper = styled.li`
  display: grid;
  grid-template-columns: ${({columns}) => columns ?? 'repeat(auto-fill, 1fr)'};
  align-items: center;
  column-gap: 20px;
  padding: 10px 20px;
  background-color: ${({highlighted, theme}) => highlighted ? theme.secondaryShadowColor : theme.shadowColor};
  border: 1px solid ${({highlighted, theme}) => highlighted ? theme.secondaryColor : theme.shadowColor};
  border-radius: 10px;
`;

export const GridRowClickable = styled(GridRowWrapper)`
  &:hover {
    cursor: pointer;
    border-color: ${({theme}) => theme.fontColor};
  }
`;
