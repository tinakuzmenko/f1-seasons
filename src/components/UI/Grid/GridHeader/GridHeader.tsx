import { FC, PropsWithChildren } from 'react';

import { GridHeaderWrapper } from './styles';

interface GridHeaderProps extends PropsWithChildren {
  item: string;
}

const GridHeader: FC<GridHeaderProps> = ({ item, children }) => (
  <GridHeaderWrapper item={item}>{children}</GridHeaderWrapper>
);

export default GridHeader;
