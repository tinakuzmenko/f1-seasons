import styled from 'styled-components';

const getColor = (type, theme) => {
  if (type === 'favorites') return 'transparent';
  if (type === 'menu') return theme.backgroundColor;
  else return theme.primaryColor;
}

export const IconButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  svg {
    stroke: ${({theme}) => theme.primaryColor};
    stroke-width: ${({type}) => type === 'favorites' && '3px'};
    fill: ${({type, theme}) => getColor(type, theme)};
  }
`;
