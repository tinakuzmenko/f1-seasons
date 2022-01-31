import styled from 'styled-components';

export const FavoritesIconWrapper = styled.svg`
  stroke: ${({ theme }) => theme.primaryColor};
  stroke-width: 3px;
  fill: ${({ theme, active }) => (active ? theme.primaryColor : 'transparent')};
`;
