import styled from 'styled-components';

export const GridRowWrapper = styled.li`
  display: grid;
  grid-template-columns: ${({columns}) => columns};
  align-items: center;
  column-gap: 20px;
  padding: 10px 20px;
  background-color: ${({theme}) => theme.shadowColor};
  border: 1px solid ${({highlighted, theme}) => highlighted ? theme.secondaryColor : theme.shadowColor};
  border-radius: 10px;
`;

export const GridRowClickable = styled(GridRowWrapper)`
  &:hover {
    cursor: pointer;
    border-color: ${({theme}) => theme.fontColor};
  }
`;

export const PrimaryContent = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const SecondaryContent = styled.div`
  color: ${({theme}) => theme.neutralColor};
`;

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
