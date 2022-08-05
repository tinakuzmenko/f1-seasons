import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { GridRowWrapper } from './styles';

interface GridRowProps extends PropsWithChildren {
  highlighted: boolean;
  onClick?: MouseEventHandler<HTMLLIElement>;
  type: string;
}

const GridRow: FC<GridRowProps> = ({
  highlighted,
  onClick,
  type,
  children,
}) => (
  <GridRowWrapper highlighted={highlighted} onClick={onClick} type={type}>
    {children}
  </GridRowWrapper>
);

export default GridRow;
