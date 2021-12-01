import styled from 'styled-components';

export const IconButtonWrapper = styled.button`
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
    opacity: 0.7;
  }

  svg {
    stroke: ${({theme}) => theme.primaryColor};
    stroke-width: ${({type}) => type === 'favorites' && '3px'};
    fill: ${({type, active, theme}) => type === 'remove' || active ? theme.primaryColor : 'transparent'};
  }
`;
