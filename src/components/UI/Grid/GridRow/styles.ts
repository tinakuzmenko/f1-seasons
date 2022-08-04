import styled from 'styled-components';

const columns: { [key: string]: string } = {
  round: 'auto 2fr 3fr',
  favorites: '3fr 1fr 3fr 3fr 1fr 1fr',
  result: '1fr 1fr 5fr 4fr 4fr 2fr 2fr 1fr',
};

interface GridRowWrapperProps {
  highlighted: boolean;
  type: string;
}

export const GridRowWrapper = styled.li<GridRowWrapperProps>`
  display: grid;
  justify-items: start;
  row-gap: 10px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.palette.shadowColor};
  border: 1px solid
    ${({ highlighted, theme }) =>
      highlighted ? theme.palette.secondaryColor : theme.palette.shadowColor};
  border-radius: 10px;
  align-items: self-start;

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    grid-template-columns: ${({ type }) => columns[type]};
    column-gap: 20px;
    align-items: center;
  }
`;

export const GridTooltip = styled.span`
  display: inline-flex;
  margin-right: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.fontColor};

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    display: none;
  }
`;

export const GridRowClickable = styled(GridRowWrapper)`
  justify-items: center;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.palette.fontColor};
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    justify-items: start;
  }
`;

export const PrimaryContent = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const SecondaryContent = styled.div`
  color: ${({ theme }) => theme.palette.neutralColor};
`;
