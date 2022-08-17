import styled from 'styled-components';

interface FavoritesIconWrapperProps {
  active: boolean;
}

export const FavoritesIconWrapper = styled.svg<FavoritesIconWrapperProps>`
  stroke: ${({ theme }) => theme.palette.primaryColor};
  stroke-width: 3px;
  fill: ${({ theme, active }) =>
    active ? theme.palette.primaryColor : 'transparent'};
`;
