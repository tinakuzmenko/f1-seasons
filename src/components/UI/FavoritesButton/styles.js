import styled from 'styled-components';

export const FavoritesButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 16px;
  height: auto;

  &:hover {
    cursor: pointer;
  }

  svg {
    stroke: ${({theme}) => theme.primaryColor};
    stroke-width: 3px;
    fill: ${({active, theme}) => active ? theme.primaryColor : 'transparent'};
  }
`;
